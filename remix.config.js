/** @type {import('@remix-run/dev').AppConfig} */
const { flatRoutes } = require("remix-flat-routes");
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  //before ignoredRouteFiles: ["**/.*", "**/*.test.{ts,tsx}"],
  ignoredRouteFiles: ["**/*"],
  serverModuleFormat: "cjs",
  routes: async (defineRoutes) => {
    return flatRoutes("routes", defineRoutes);
  },
};
