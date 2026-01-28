@echo off
echo ===================================================
echo   LOLYPOP FINAL PUSH
echo ===================================================

echo 1. Creating fix commit...
git add .
git commit -m "Fix sitemap static export"

echo.
echo 2. FORCING PUSH TO GITHUB...
git push origin main

echo.
if %errorlevel% neq 0 (
    echo [ERROR] Push Failed.
) else (
    echo [SUCCESS] CODE UPDATED.
    echo Go to Cloudflare and click RETRY now.
)
pause
