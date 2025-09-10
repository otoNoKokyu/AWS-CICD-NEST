#!/bin/bash
echo "Navigating to app directory..."
# This will now work because the directory is created by CodeDeploy's 'Install' hook.
cd /var/www/my-nestjs-app

echo "Installing Node.js dependencies..."
npm install

echo "Building NestJS application..."
npm run build