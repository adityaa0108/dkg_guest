@echo off
REM Event Booking Platform - Quick Setup Script (Windows)
REM This script will set up your development environment

echo.
echo ============================================
echo Event Booking Platform - Setup Script
echo ============================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [31mNode.js is not installed![0m
    echo Please install Node.js 18+ from https://nodejs.org/
    pause
    exit /b 1
)

echo [32mNode.js detected[0m
node -v
echo [32mnpm detected[0m
npm -v
echo.

REM Install dependencies
echo.
echo [36mInstalling dependencies...[0m
echo This will take 2-3 minutes...
echo.

call npm install

if %ERRORLEVEL% equ 0 (
    echo.
    echo [32mDependencies installed successfully![0m
    echo.
) else (
    echo.
    echo [31mInstallation failed![0m
    echo Try: npm cache clean --force
    echo Then run this script again
    pause
    exit /b 1
)

REM Check TypeScript
echo [36mChecking for TypeScript errors...[0m
call npm run type-check

if %ERRORLEVEL% equ 0 (
    echo.
    echo [32mNo TypeScript errors found![0m
    echo.
) else (
    echo.
    echo [33mSome TypeScript errors remain[0m
    echo Try restarting VS Code or your editor
    echo.
)

REM Success message
echo.
echo ============================================
echo [32mSetup Complete![0m
echo ============================================
echo.
echo Your project is ready! Next steps:
echo.
echo 1. Start development server:
echo    npm run dev
echo.
echo 2. Open in browser:
echo    http://localhost:3000
echo.
echo 3. Build for production:
echo    npm run build
echo.
echo 4. Run production server:
echo    npm start
echo.
echo Documentation:
echo    - README.md - Project overview
echo    - STRUCTURE.md - Architecture details
echo    - FOLDER_STRUCTURE.md - Visual structure
echo.
echo Happy coding! 🚀
echo.
pause
