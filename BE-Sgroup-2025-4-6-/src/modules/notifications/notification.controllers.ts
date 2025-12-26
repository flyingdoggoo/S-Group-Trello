import { io } from "socket.io-client";
export class NotificationController {
    constructor() {}
    async testReceiveNotification(req: any, res: any) {
        const socket = io("http://localhost:8000", {
            transports: ["websocket"],
        });
        socket.on("notification", (data) => {
            console.log("Received message:", data);
        });
        res.status(200).json({
                success: true,
                message: "Notification received",
                data: null
            });
    }
}