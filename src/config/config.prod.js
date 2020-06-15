const config = require("./config.shared");
const fs = require("fs");

const fileContents = `module.exports = {
    NODE_ENV: 'production',
    apolloClientConnectionURI: '${config.apolloClientConnectionURI_prod}',
    SENTRY_DSN: '${config.SENTRY_DSN}',
};`;

fs.writeFile("./src/config/config.js", fileContents, (error) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Using production enviroment variables.");
    }
});
