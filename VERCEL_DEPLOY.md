# Vercel Deployment Guide

## 📦 Chuẩn bị Deploy

### 1. Database Setup
Vercel không hỗ trợ database trực tiếp. Bạn cần sử dụng:
- **Neon** (PostgreSQL serverless) - Khuyến nghị ⭐
- **PlanetScale** (MySQL)
- **Vercel Postgres**
- **Supabase**

### 2. Environment Variables

#### Backend Environment Variables (Cấu hình trên Vercel Dashboard)
```
NODE_ENV=production
PORT=8000
HOST=0.0.0.0
CORS_ORIGIN=https://your-frontend.vercel.app
DATABASE_URL=postgresql://...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GOOGLE_REDIRECT_URI=https://your-backend.vercel.app/auth/google/callback
JWT_SECRET_ACCESS_TOKEN=...
JWT_SECRET_REFRESH_TOKEN=...
EXPIRES_IN_ACCESS_TOKEN=15m
EXPIRES_IN_REFRESH_TOKEN=7d
DEFAULT_USER_AVATAR_URL=...
```

#### Frontend Environment Variables (Cấu hình trên Vercel Dashboard)
```
VITE_API_BASE_URL=https://your-backend.vercel.app
```

## 🚀 Deploy Steps

### Option 1: Deploy qua Vercel Dashboard (Khuyến nghị)

1. **Push code lên GitHub**
```bash
git add .
git commit -m "chore: setup vercel deployment"
git push origin deploy/vercel
```

2. **Deploy Backend**
   - Truy cập: https://vercel.com/new
   - Import repository: `flyingdoggoo/S-Group-Trello`
   - Root Directory: `BE-Sgroup-2025-4-6-`
   - Framework Preset: Other
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Thêm Environment Variables ở trên
   - Click Deploy

3. **Deploy Frontend**
   - Import repository lại: `flyingdoggoo/S-Group-Trello`
   - Root Directory: `FE-Sgroup`
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Thêm `VITE_API_BASE_URL` với URL backend vừa deploy
   - Click Deploy

### Option 2: Deploy qua Vercel CLI

1. **Cài đặt Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy Backend**
```bash
cd BE-Sgroup-2025-4-6-
vercel
# Follow prompts, nhập environment variables
vercel --prod
```

3. **Deploy Frontend**
```bash
cd ../FE-Sgroup
vercel
# Follow prompts, nhập VITE_API_BASE_URL
vercel --prod
```

## ⚙️ Post-Deploy Configuration

### 1. Update CORS
Sau khi deploy frontend, cập nhật `CORS_ORIGIN` trong backend environment variables với URL frontend thực tế.

### 2. Update Google OAuth Redirect URI
- Vào Google Cloud Console
- Thêm redirect URI: `https://your-backend.vercel.app/auth/google/callback`
- Thêm authorized origins: `https://your-frontend.vercel.app`

### 3. Database Migration
Nếu sử dụng Neon hoặc PlanetScale:
```bash
# Local
DATABASE_URL="your-production-db-url" npx prisma db push
```

## 🔍 Troubleshooting

### Backend không khởi động
- Kiểm tra logs: `vercel logs <deployment-url>`
- Đảm bảo `DATABASE_URL` đúng format
- Kiểm tra Prisma đã generate: `prisma generate`

### CORS Error
- Cập nhật `CORS_ORIGIN` với URL frontend chính xác
- Không thêm trailing slash (/)

### Database Connection Error
- Kiểm tra connection string format
- Đảm bảo IP của Vercel được whitelist (nếu dùng database có IP restrictions)

## 📝 Notes

- Vercel có giới hạn execution time 10s (Hobby plan) / 60s (Pro plan)
- Cold start có thể mất 1-2s
- Database pooling quan trọng để tránh connection limit
- Cân nhắc sử dụng Prisma Accelerate cho production

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Neon PostgreSQL](https://neon.tech)
- [Prisma Vercel Guide](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)
