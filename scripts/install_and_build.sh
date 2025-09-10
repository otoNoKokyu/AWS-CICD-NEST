#!/bin/bash

# Source the nvm environment
source ~/.nvm/nvm.sh || true
nvm use default || true

# Navigate to the app directory
echo "Navigating to app directory..."
cd /var/www/my-nestjs-app

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm install

# Build NestJS application
echo "Building NestJS application..."
npm run build