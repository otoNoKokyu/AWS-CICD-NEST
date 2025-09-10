#!/bin/bash
# Navigate to the app's directory on the server
cd /var/www/my-nestjs-app

# Start or restart the application with PM2 using the ecosystem file
echo "Starting the application with PM2..."
pm2 startOrRestart ecosystem.pm2.js --env production