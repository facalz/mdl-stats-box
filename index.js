const main = require('mdl-update-box');

const {
    GIST_ID: gistId,
    GH_TOKEN: githubToken,
    USER: user,
    TITLE: title
} = process.env;

main(user, title, gistId, githubToken);