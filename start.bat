@echo off
echo === Starting all projects ===

REM mở frontend
start cmd /k "cd /d D:\Workspace\Sgroup-BE\BE-Pull\BE-Sgroup-2025-4-6-&& npm run dev"

REM mở backend
start cmd /k "cd /d D:\Workspace\Sgroup-BE\BE-Pull\FE-Sgroup && npm run dev"

REM mở databse
start cmd /k "cd /d D:\Workspace\Sgroup-BE\BE-Pull\BE-Sgroup-2025-4-6- && npx prisma studio"

echo All servers started in new terminals.
pause
