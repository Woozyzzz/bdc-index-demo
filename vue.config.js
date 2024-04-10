const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  pages: {
    index: {
      entry: "src/main.js",
      title: "中国红十字会总会事业发展中心",
    },
  },
});
