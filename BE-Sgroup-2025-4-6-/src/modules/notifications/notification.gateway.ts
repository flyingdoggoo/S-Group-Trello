import { Server, Socket } from "socket.io";
import { Server as HTTPServer } from "http";
export class NotificationGateway {
    //UserId -> SocketID || 1 User can have multiple SocketID
    //SocketID -> UserId || 1 SocketID only have 1 UserId

    private server: Server | null = null;
    private readonly connectedUsers = new Map<string, Set<string>>();
    private readonly socketToUserMap = new Map<string, string>();
    constructor() {
    }

    initialize(httpServer: HTTPServer) {
        this.server = new Server(httpServer, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        });

        this.server.use((socket, next) => {
            // jwt tu header hoac cookie

            socket.data.userId = "abcd";
            next();
        });
        this.server.on("connection", (socket) => {
            this.handleConnection(socket);
        });
    }
    async handleConnection(client: Socket) {
        const userId = client.data.userId as string;
        this.connectedUsers.set(
            userId,
            this.connectedUsers.get(userId)
                ? this.connectedUsers.get(userId)!.add(client.id)
                : new Set([client.id])
        );
        this.socketToUserMap.set(client.id, userId);
        console.log(`User connected: ${userId} with socket ID: ${client.id}`);
        this.sendMessageToUser("abcd", { message: "hello", time: new Date() });
        client.on("disconnect", () => {
            this.handleDisconnect(client);
        });
    }
    async handleDisconnect(client: Socket) {
        const userId = this.socketToUserMap.get(client.id);
        if (userId) {
            const userSockets = this.connectedUsers.get(userId);
            if (userSockets) {
                userSockets.delete(client.id);
                if (userSockets.size === 0) {
                    this.connectedUsers.delete(userId);
                }
            }
            this.socketToUserMap.delete(client.id);
        }
    }

    async sendMessageToUser(userId: string, payload: {message: string, time: Date}) {
        const socketIds = this.connectedUsers.get(userId) as Set<string>;
        socketIds.forEach(socketId => {
            this.server?.to(socketId).emit("notification", payload);
        });
    }
}

export default new NotificationGateway();