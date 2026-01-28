@echo off
echo ===================================================
echo   LOLYPOP EMERGENCY DEPLOY
echo ===================================================
echo.
echo 1. Creating a new timestamp commit...
git commit --allow-empty -m "Force Cloudflare Rebuild %date% %time%"
echo.
echo 2. Pushing to GitHub...
git push -u origin main
echo.
if %errorlevel% neq 0 (
    echo [ERROR] Push failed.
) else (
    echo [SUCCESS] New build triggered!
    echo Go to Cloudflare and check the NEW build at the top.
)
pause
