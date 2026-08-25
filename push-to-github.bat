@echo off
title Push Portfolio LCT to GitHub
echo ======================================================
echo    Dang day ma nguon Portfolio LCT len GitHub...
echo ======================================================
echo.

set "PATH=C:\Program Files\Git\cmd;%PATH%"

git remote set-url origin https://github.com/lucchantoan-lang/portfolio-Toann.git
git branch -M main
git add .
git commit -m "Update Portfolio LCT" 2>nul
git push -u origin main --force

echo.
echo ======================================================
echo    Hoan tat! Nhan phim bat ky de thoat.
echo ======================================================
pause
