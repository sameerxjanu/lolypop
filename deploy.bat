@echo off
echo ===================================================
echo   LOLYPOP DEPLOYMENT (AUTO-FIX)
echo ===================================================
echo.
echo 1. Saving your changes...
git add .
git commit -m "Auto-update from deploy script"
echo.
echo 2. Pushing to GitHub...
git push -u origin main
echo.
if %errorlevel% neq 0 (
    echo [ERROR] Something went wrong.
) else (
    echo [SUCCESS] Changes sent to Cloudflare!
    echo Go check your dashboard now.
)
pause
