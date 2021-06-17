const { generateApi } = require("swagger-typescript-api");
const path = require("path");
generateApi({
  url: "https://pntapidoca.yocdev.com/swagger/doc.json",
  output: path.resolve(__dirname, "../../src/api/collection"),
  httpClientType: "",
  modular: true,
  cleanOutput: true,
  templates: path.resolve(__dirname, './taro-template')
});
