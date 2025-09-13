module.exports = {
  apps: [{
    name: "my-nestjs-app",
    cwd: "/var/www/my-nestjs-app",
    script: "dist/main.js",
    watch: true,            // enables auto-restart on code changes
    ignore_watch: ["node_modules", "logs"], // optional
    instances: 1,           // single instance for dev
    exec_mode: "fork",      // simpler than cluster for dev
    env: {
      NODE_ENV: "development",
      PORT: 3000
    }
  }]
};
