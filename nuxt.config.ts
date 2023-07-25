// https://nuxt.com/docs/api/configuration/nuxt-config
import { presetIcons, defineConfig } from "unocss";
export default defineNuxtConfig({
  alias: {
    "@": "./"
  },
  modules: ["@unocss/nuxt"],
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: {},
    rules: [
      ["shadow", {
        "box-shadow":
          "3.4px 3.4px 2.7px rgba(0, 0, 0, 0.05),8.7px 8.7px 6.9px rgba(0, 0, 0, 0.071),17.7px 17.7px 14.2px rgba(0, 0, 0, 0.089),36.5px 36.5px 29.2px rgba(0, 0, 0, 0.11), 100px 100px 80px rgba(0, 0, 0, 0.16)"
      }],
      ["shadow-sm", {
        "box-shadow":
          "3.4px 2.6px 17.2px rgba(0, 0, 0, 0.019),8.7px 6.6px 43.4px rgba(0, 0, 0, 0.027),17.7px 13.5px 88.6px rgba(0, 0, 0, 0.033),36.5px 27.7px 182.5px rgba(0, 0, 0, 0.041),100px 76px 500px rgba(0, 0, 0, 0.06)"
      }],
      [
        "bg-img",{
          "background-image":"url(https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=zh-CN)",
          "background-size":"100%",
          "background-repeat":"no-repeat",
        }
      ]
    ],
  },
});
