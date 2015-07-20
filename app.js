var profile = require("./profile");
var username = process.argv.slice(2);

profile.get(username);
