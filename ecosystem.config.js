// https://pm2.keymetrics.io/docs/usage/expose/

module.exports = {
    script: "serve",
    env: {
        PM2_SERVE_PATH: "./web-build",
        PM2_SERVE_PORT: 3000,
        PM2_SERVE_SPA: "true",
        PM2_SERVE_HOMEPAGE: "./index.html",
    },
};
