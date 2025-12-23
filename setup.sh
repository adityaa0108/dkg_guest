#!/bin/bash

# Event Booking Platform - Quick Setup Script
# This script will set up your development environment

set -e  # Exit on any error

echo "🎯 Event Booking Platform - Setup Script"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version is too old: $(node -v)"
    echo "Please upgrade to Node.js 18+ from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo "✅ npm $(npm -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo "This will take 2-3 minutes..."
echo ""

npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
else
    echo ""
    echo "❌ Installation failed!"
    echo "Try: npm cache clean --force && npm install"
    exit 1
fi

# Check if TypeScript errors are resolved
echo "🔍 Checking for TypeScript errors..."
npm run type-check

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ No TypeScript errors found!"
    echo ""
else
    echo ""
    echo "⚠️  Some TypeScript errors remain"
    echo "Try restarting VS Code or your editor"
    echo ""
fi

# Success message
echo "=========================================="
echo "🎉 Setup Complete!"
echo "=========================================="
echo ""
echo "Your project is ready! Next steps:"
echo ""
echo "1. Start development server:"
echo "   npm run dev"
echo ""
echo "2. Open in browser:"
echo "   http://localhost:3000"
echo ""
echo "3. Build for production:"
echo "   npm run build"
echo ""
echo "4. Run production server:"
echo "   npm start"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Project overview"
echo "   - STRUCTURE.md - Architecture details"
echo "   - FOLDER_STRUCTURE.md - Visual structure"
echo ""
echo "Happy coding! 🚀"
echo ""
