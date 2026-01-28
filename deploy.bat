@echo off
echo ===================================================
echo   LOLYPOP FINAL DEPLOYMENT
echo ===================================================

echo 1. Adding all new files (Icon, Config)...
git add .

echo 2. Saving changes...
git commit -m "Final Favicon Fix & Cleanup"

echo 3. Getting fresh code from cloud...
git pull origin main

echo 4. Pushing to Cloudflare...
git push origin main

echo.
if %errorlevel% neq 0 (
    echo [ERROR] Something went wrong.
) else (
    echo [SUCCESS] ALL FILES SENT! 🚀
    echo Go to Cloudflare and watch the build.
)
pause
