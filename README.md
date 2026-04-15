# S-Group Trello

Ứng dụng quản lý dự án kiểu Trello, gồm:
- Backend: Node.js + Express + Prisma + PostgreSQL
- Frontend: React + Vite + TailwindCSS

## Cấu trúc thư mục

```text
BE-Pull/
|- BE-Sgroup-2025-4-6-   # Backend
|- FE-Sgroup             # Frontend
|- README.md
```

## Yêu cầu hệ thống

- Node.js `>=18`
- npm `>=9`
- Docker Desktop (để chạy PostgreSQL local)
- Git

## Quick Start

### 1. Clone repository

```bash
git clone https://github.com/flyingdoggoo/S-Group-Trello.git
cd S-Group-Trello
```

### 2. Setup Backend

```bash
cd BE-Sgroup-2025-4-6-
npm install
copy .env.example .env
```

Sau đó mở file `.env` và điền giá trị theo môi trường local của bạn.

Chạy database:

```bash
docker-compose up -d
docker ps
```

Chạy migration + generate:

```bash
npm run db:push
npm run db:gen-dto
```

Chạy backend:

```bash
npm run dev
```

Backend mặc định: `http://localhost:8000`

### 3. Setup Frontend

Mở terminal mới:

```bash
cd FE-Sgroup
npm install
npm run dev
```

Frontend mặc định: `http://localhost:5173`

## Environment Variables (Safe Template)

Không commit giá trị thật lên Git. Chỉ dùng placeholder như bên dưới:

```env
NODE_ENV=development
PORT=8000
HOST=localhost
CORS_ORIGIN=http://localhost:5173

DATABASE_URL="postgresql://<DB_USER>:<DB_PASSWORD>@localhost:<DB_PORT>/<DB_NAME>?schema=public"

GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>
GOOGLE_CLIENT_SECRET=<YOUR_GOOGLE_CLIENT_SECRET>
GOOGLE_REDIRECT_URI=http://localhost:8000/auth/google/callback

DEFAULT_USER_AVATAR_URL=https://via.placeholder.com/150

EXPIRES_IN_ACCESS_TOKEN=15m
JWT_SECRET_ACCESS_TOKEN=<YOUR_ACCESS_TOKEN_SECRET>
EXPIRES_IN_REFRESH_TOKEN=7d
JWT_SECRET_REFRESH_TOKEN=<YOUR_REFRESH_TOKEN_SECRET>
```

## Security Notes

- Tuyệt đối không commit file `.env` hoặc bất kỳ secret/token/key thật nào.
- Không đưa thông tin nhạy cảm lên README, issue, PR comment, hoặc screenshot.
- Nếu lỡ lộ secret:
1. Rotate secret ngay lập tức (JWT, OAuth, DB password, mail credentials...).
2. Thu hồi token/session liên quan.
3. Cập nhật lại biến môi trường trên server và local.

## Scripts hữu ích

### Backend (`BE-Sgroup-2025-4-6-`)

- `npm run dev`: chạy development server
- `npm run build`: build production
- `npm run start`: chạy bản build
- `npm run lint`: lint + fix
- `npm run format`: format code
- `npm run db:push`: đồng bộ schema DB
- `npm run db:gen-dto`: generate Prisma client
- `npm run db:gen-migration`: tạo migration mới

### Frontend (`FE-Sgroup`)

- `npm run dev`: chạy dev server
- `npm run build`: build production
- `npm run preview`: preview bản build
- `npm run lint`: lint source code

## API Docs

Swagger UI: `http://localhost:8000/api-docs` (sau khi backend chạy).

## Troubleshooting nhanh

### Không kết nối được DB

1. Kiểm tra Docker Desktop đã chạy.
2. Kiểm tra container bằng `docker ps`.
3. Kiểm tra `DATABASE_URL` trong `.env`.
4. Khởi động lại container: `docker-compose restart`.

### Port bị trùng

- Backend: đổi `PORT` trong `.env`.
- Frontend: Vite tự nhảy sang port khác.
- PostgreSQL: đổi port ở `docker-compose.yml` và cập nhật `DATABASE_URL`.

## Git workflow gợi ý

```bash
git checkout main
git pull origin main
git checkout -b feature/<ten-tinh-nang>
```

Sau đó:

```bash
git add .
git commit -m "feat: mo ta thay doi"
git push origin feature/<ten-tinh-nang>
```
