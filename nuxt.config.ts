// https://nuxt.com/docs/api/configuration/nuxt-config
import { presetIcons, defineConfig } from "unocss";
export default defineNuxtConfig({
  alias: {
    "@": "./",
  },
  app: {
    head: {
      title: "kif nav",
      meta: [
        { name: "description", content: "程序员的导航页" },
        {
          name: "keywords",
          content:
            "程序员,导航,导航页,程序员导航,程序员导航页,程序员的导航页,kifnav,kifroom",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        // { children: 'JavaScript is required' }
      ],
    },
  },
  modules: ["@unocss/nuxt"],
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: {},
    rules: [
      [
        "shadow",
        {
          "box-shadow":
            "3.4px 3.4px 2.7px rgba(0, 0, 0, 0.05),8.7px 8.7px 6.9px rgba(0, 0, 0, 0.071),17.7px 17.7px 14.2px rgba(0, 0, 0, 0.089),36.5px 36.5px 29.2px rgba(0, 0, 0, 0.11), 100px 100px 80px rgba(0, 0, 0, 0.16)",
        },
      ],
      [
        "shadow-sm",
        {
          "box-shadow":
            "3.4px 2.6px 17.2px rgba(0, 0, 0, 0.019),8.7px 6.6px 43.4px rgba(0, 0, 0, 0.027),17.7px 13.5px 88.6px rgba(0, 0, 0, 0.033),36.5px 27.7px 182.5px rgba(0, 0, 0, 0.041),100px 76px 500px rgba(0, 0, 0, 0.06)",
        },
      ],
      [
        "bg-img",
        {
          "background-position": "center",
          "background-size": "100%",
          "background-repeat": "no-repeat",
          "filter": "brightness(80%)",
        },
      ],
      [
        /^transformX-([-?\.\d]+)$/,
        ([_, num]) => ({ transform: `translateX(${num}%)` }),
      ],
      [
        /^transformY-([-?\.\d]+)$/,
        ([_, num]) => ({ transform: `translateY(${num}%)` }),
      ],
    ],
  },
});
