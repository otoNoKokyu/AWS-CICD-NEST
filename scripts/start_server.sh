#!/bin/bash

source ~/.nvm/nvm.sh || true
nvm use default || true


echo "Navigating to app directory..."
cd /var/www/my-nestjs-app

# Start the application with PM2
echo "Starting the application with PM2..."
pm2 stop all 2>/dev/null; pm2 start ecosystem.config.js

