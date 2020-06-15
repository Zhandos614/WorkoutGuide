const config = require("./config.shared");
const fs = require("fs");

const fileContents = `module.exports = {
    NODE_ENV: 'staging',
    apolloClientConnectionURI: '${config.apolloClientConnectionURI_staging}',
    SENTRY_DSN: '${config.SENTRY_DSN}',
};`;

fs.writeFile("./src/config/config.js", fileContents, (error) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Using staging enviroment variables.");
    }
});
