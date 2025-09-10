#!/bin/bash
# Stop the application process using PM2
echo "Stopping the application..."
# The "|| true" is important to prevent the deployment from failing
# if the process is not already running (e.g., on the first deployment).
pm2 stop my-nestjs-app || true