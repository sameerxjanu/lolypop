@echo off
echo ===================================================
echo   LOLYPOP DEPLOYMENT
echo ===================================================

:: Ensure everything is committed
git add .
git commit -m "Auto-deploy update"

:: Ensure we are on main branch
git branch -M main

:: Sync remote
git remote remove origin
git remote add origin https://github.com/sameerxjanu/lolypop.git

:: Push
echo Pushing to GitHub...
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Push failed.
    echo Please make sure you are logged in to GitHub.
) else (
    echo.
    echo [SUCCESS] Code pushed successfully!
)
pause
