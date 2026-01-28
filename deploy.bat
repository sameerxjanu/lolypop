@echo off
echo ===================================================
echo   LOLYPOP DEPLOYMENT (v2)
echo ===================================================
echo.
echo Pushing to GitHub...
echo.
git push -u origin main
echo.
if %errorlevel% neq 0 (
    echo [ERROR] Push failed?
    echo Please make sure you sign in to the popup window.
) else (
    echo [SUCCESS] Done!
)
pause
