const config = require("./config.shared");
const fs = require("fs");

const fileContents = `module.exports = {
    NODE_ENV: 'local',
    apolloClientConnectionURI: '${config.apolloClientConnectionURI_local}',
    SENTRY_DSN: '${config.SENTRY_DSN}',
};`;

fs.writeFile("./src/config/config.js", fileContents, (error) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Using local enviroment variables.");
    }
});
