const path = require("path");
const dirName = path.dirname(require.main.filename);

const viewDir = (fileName) => path.join(dirName, "view", fileName);

module.exports = viewDir;