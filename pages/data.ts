const data = [
  {
    type: "tools",
    name: "工具",
    list: [
      {
        id: 0,
        name: "Kifs print online",
        desc: "个开源的虚拟手绘风格的白板。创建任何漂亮的手绘图。",
        tags: ["白板", "在线工具", "自部署"],
        home: "https://print.kifroom.icu/",
        github: "https://github.com/wkif/ajietextd.github.io"
      },
      {
        id: 15,
        name: "Chat GPT",
        desc: "Chat GPT",
        tags: ["聊天", "在线工具"],
        home: "https://openai.com/",
      },
      {
        id: 1,
        name: "Animista",
        home: "https://animista.net/",
        desc: "CSS动画生成器",
        tags: ["动画", "在线工具"]
      },
      {
        id: 2,
        name: "CSS Gradient",
        home: "https://cssgradient.io/",
        desc: "CSS渐变生成器",
        tags: ["渐变", "在线工具"]
      },
      {
        id: 3,
        name: "CSS Box Shadow",
        home: "https://cssgenerator.org/box-shadow-css-generator.html",
        desc: "CSS阴影生成器",
        tags: ["阴影", "在线工具"]
      },
      {
        id: 4,
        name: "CSS Border Radius",
        home: "https://cssgenerator.org/border-radius-css-generator.html",
        desc: "CSS圆角生成器",
        tags: ["圆角", "在线工具"]

      },
      {
        id: 5,
        name: "Remove Bg",
        home: "https://www.remove.bg/zh",
        desc: "在线抠图",
        tags: ["抠图", "在线工具"]
      },
      {
        id: 6,
        name: "Animate.css",
        home: "https://animate.style/",
        desc: "CSS动画库",
        tags: ["动画"]
      },
      {
        id: 7,
        name: "Grabient",
        home: "https://www.grabient.com/",
        desc: "CSS渐变库",
        tags: ["渐变"]
      },
      {
        id: 8,
        name: "Recoded",
        home: "https://recoded.netlify.app/",
        desc: "为程序开发人员的代码界面生成器",
        tags: ["代码"]
      },
      {
        id: 9,
        name: "Iconfont",
        home: "https://www.iconfont.cn/",
        desc: "阿里巴巴矢量图标库",
        tags: ["图标"]
      },
      {
        id: 10,
        name: "路过图床",
        home: "https://imgchr.com/",
        desc: "免费图床",
        tags: ["图床"]
      },
      {
        id: 11,
        name: "腾讯邮箱",
        home: "https://work.weixin.qq.com/mail/",
        desc: "腾讯邮箱",
        tags: ["邮箱"]
      },
      {
        id: 12,
        name: "163邮箱",
        home: "https://mail.163.com/",
        desc: "163邮箱",
        tags: ["邮箱"]
      },
      {
        id: 13,
        name: "QQ邮箱",
        home: "https://mail.qq.com/",
        desc: "QQ邮箱",
        tags: ["邮箱"]
      }, {
        id: 14,
        name: "Gmail",
        home: "https://mail.google.com/",
        desc: "Gmail",
        tags: ["邮箱"]
      },
      {
        id: 16,
        name: "微信公众平台",
        home: "https://mp.weixin.qq.com/",
        desc: "微信公众平台",
        tags: ["微信"]
      },
      {
        id: 17,
        name: "blobanimation",
        home: "https://blobanimation.com/",
        desc: "blobanimation",
        tags: ["动画"]
      },
      {
        id: 18,
        name: "Wakatime",
        home: "https://wakatime.com/",
        desc: "Wakatime",
        tags: ["统计"]
      }
    ]
  },
  {
    type: "vue",
    name: "Vue",
    list: [

      {
        id: 0,
        name: "Vuejs",
        home: "https://cn.vuejs.org/",
        desc: "渐进式JavaScript 框架",
        tags: ["框架"],
        github: "https://github.com/vuejs/vue"
      }, {
        id: 1,
        name: "Vue Router",
        home: "https://router.vuejs.org/zh/",
        desc: "Vue.js 官方的路由管理器",
        tags: ["路由"],
        github: "https://github.com/vuejs/router"
      }, {
        id: 2,
        name: "Pinia",
        home: "https://pinia.web3doc.top/",
        desc: "Vue.js 应用程序开发的状态管理模式",
        tags: ["状态管理"],
        github: "https://github.com/vuejs/pinia"
      },
      {
        id: 3,
        name: "Vue CLI",
        home: "https://cli.vuejs.org/zh/",
        desc: "Vue.js 开发的标准工具",
        tags: ["构建工具"],
        github: "https://github.com/vuejs/vue-cli"
      }, {
        id: 4,
        name: "Nuxt3",
        home: "https://v3.nuxtjs.org/",
        desc: "Vue.js 应用程序开发的静态站点生成器",
        tags: ["SSR"],
        github: "https://github.com/nuxt/nuxt"
      },
      {
        id: 18,
        name: "Vite",
        home: "https://cn.vitejs.dev/",
        desc: "下一代前端开发与构建工具",
        tags: ["构建工具"],
        github: "https://github.com/vitejs/vite"
      },
      {
        id: 5,
        name: "VuePress",
        home: "https://vuepress.vuejs.org/zh/",
        desc: "Vue 驱动的静态网站生成器",
        tags: ["文档"],
        github: "https://github.com/vuejs/vuepress"
      }, {
        id: 6,
        name: "Vitpress",
        home: "https://vitepress.dev/",
        desc: "基于vite的静态网站生成器",
        tags: ["文档"],
        github: "https://github.com/vuejs/vitepress"
      },
      {
        id: 7,
        name: "Icones",
        home: "https://icones.js.org/",
        desc: "图标库",
        tags: ["图标"]
      },
      {
        id: 8,
        name: "Vueuse",
        home: "https://vueuse.org/",
        desc: "Vue.js 的基本用法集合",
        tags: ["工具库"],
        github: "https://github.com/vueuse/vueuse"
      },
      {
        id: 9,
        name: "Unocss",
        home: "https://unocss.dev/",
        desc: "零配置的工具，用于编写可维护和可扩展的样式",
        tags: ["css"],
        github: "https://github.com/unocss/unocss"
      },
      {
        id: 10,
        name: "Unocss-interactive",
        home: "https://unocss.dev/interactive/",
        desc: "unocss-interactive",
        tags: ["查询工具"],
        github: "https://github.com/unocss/unocss"
      },
      {
        id: 11,
        name: "Element plus",
        home: "https://element-plus.org/#/zh-CN",
        desc: "基于element-ui的组件库",
        tags: ["组件库"],
        github: "https://github.com/element-plus/element-plus"
      },
      {
        id: 18,
        name: "Element",
        home: "https://element.eleme.cn/#/zh-CN",
        desc: "基于element-ui的vue2组件库",
        tags: ["组件库"],
        github: "https://github.com/ElemeFE/element"
      },
      {
        id: 12,
        name: "Ant Design Vue",
        home: "https://www.antdv.com/components/overview-cn",
        desc: "Ant Design Vue",
        tags: ["组件库"],
        github: "https://github.com/vueComponent/ant-design-vue"
      },
      {
        id: 13,
        name: "Vant",
        home: "https://vant-contrib.gitee.io/vant/#/zh-CN/",
        desc: "轻量、可靠的移动端 Vue 组件库",
        tags: ["组件库"],
        github: "https://github.com/youzan/vant"
      },
      {
        id: 14,
        name: "unplugin-vue-components",
        home: "https://www.npmjs.com/package/unplugin-vue-components",
        desc: "unplugin-vue-components",
        tags: ["插件", "npm"],
        github: "https://github.com/antfu/unplugin-vue-components"
      },
      {
        id: 15,
        name: "pinia-plugin-persistedstate",
        home: "https://www.npmjs.com/package/pinia-plugin-persistedstate",
        desc: "pinia-plugin-persistedstate",
        tags: ["插件", "npm"],
        github: "https://prazdevs.github.io/pinia-plugin-persistedstate/"
      },
      {
        id: 16,
        name: "unplugin-auto-import",
        home: "https://github.com/antfu/unplugin-auto-import",
        desc: "unplugin-auto-import",
        tags: ["插件", "npm"],
        github: "https://github.com/antfu/unplugin-auto-import",
      },
      {
        id: 17,
        name: "Vue I18n",
        home: "https://vue-i18n.intlify.dev/",
        desc: "Vue I18n",
        tags: ["国际化"],
        github: "https://github.com/intlify/vue-i18n-next"
      }
    ]
  },
  {
    type: "software",
    name: "软件",
    list: [
      {
        id: 0,
        name: "VS Code",
        home: "https://code.visualstudio.com/",
        desc: "Visual Studio Code",
        tags: ["编辑器"]
      },
      {
        id: 1,
        name: "Neovim",
        home: "https://neovim.io/",
        desc: "Neovim",
        tags: ["编辑器"]
      },
      {
        id: 2,
        name: "Typora",
        home: "https://typora.io/",
        desc: "Typora",
        tags: ["编辑器"]
      },
      {
        id: 3,
        name: "向日葵",
        home: "https://sunlogin.oray.com/",
        desc: "向日葵",
        tags: ["远程"]
      },
      {
        id: 4,
        name: "花生壳",
        home: "https://hsk.oray.com/",
        desc: "花生壳",
        tags: ["内网穿透"]
      },
      {
        id: 5,
        name: "Navicat",
        home: "https://www.navicat.com.cn/",
        desc: "Navicat",
        tags: ["数据库"]
      },
      {
        id: 6,
        name: "Postman",
        home: "https://www.postman.com/",
        desc: "Postman",
        tags: ["接口测试"]
      },
      {
        id: 7,
        name: "Figma",
        home: "https://www.figma.com/",
        desc: "Figma",
        tags: ["设计"]
      },
      {
        id: 8,
        name: "Tim",
        home: "https://tim.qq.com/",
        desc: "tim",
        tags: ["通讯"]

      },
      {
        id: 9,
        name: "微信",
        home: "https://weixin.qq.com/",
        desc: "微信",
        tags: ["通讯"]
      },
      {
        id: 10,
        name: "腾讯会议",
        home: "https://meeting.tencent.com/",
        desc: "腾讯会议",
        tags: ["通讯"]
      },
      {
        id: 11,
        name: "snapcraft",
        home: "https://snapcraft.io/",
        desc: "snapcraft",
        
      }
    ]
  },
  {
    type: "code",
    name: "编程",
    list: [
      {
        id: 7,
        name: "稀土掘金",
        home: "https://juejin.cn/",
        desc: "掘金是一个帮助开发者成长的社区",
        tags: ["社区"]
      },
      {
        id: 8,
        name: "SegmentFault",
        home: "https://segmentfault.com/",
        desc: "SegmentFault 思否",
        tags: ["社区"]
      },
      {
        id: 9,
        name: "CSDN",
        home: "https://www.csdn.net/",
        desc: "CSDN-专业IT技术社区",
        tags: ["社区"]
      },
      {
        id: 10,
        name: "博客园",
        home: "https://www.cnblogs.com/",
        desc: "博客园 - 开发者的网上家园",
        tags: ["社区"]
      },
      {
        id: 0,
        name: "GitHub",
        home: "https://github.com/",
        desc: "全球最大的开源社区",
        tags: ["开源社区"]
      },
      {
        id: 1,
        name: "Gitee",
        home: "https://gitee.com/",
        desc: "基于 Git 的代码托管和研发协作平台",
        tags: ["开源社区"]
      },
      {
        id: 2,
        name: "CodePen",
        home: "https://codepen.io/",
        desc: "前端代码展示平台",
        tags: ["前端"]
      },
      {
        id: 3,
        name: "CodeSandbox",
        home: "https://codesandbox.io/dashboard",
        desc: "在线代码编辑器",
        tags: ["前端"]
      },
      {
        id: 4,
        name: "Vercel",
        home: "https://vercel.com/",
        desc: "前端部署平台",
        tags: ["部署"]
      },
      {
        id: 5,
        name: "在线js",
        home: "https://jsrun.net/new",
        desc: "在线js",
        tags: ["js"]
      },
      {
        id: 6,
        name: "Echarts",
        home: "https://echarts.apache.org/zh/index.html",
        desc: "一个使用 JavaScript 实现的开源可视化库",
        tags: ["可视化"]
      },
      {
        id: 11,
        name: "Npm",
        home: "https://www.npmjs.com/",
        desc: "npm",
        tags: ["npm"]
      },
      {
        id: 12,
        name: "Yarn",
        home: "https://yarnpkg.com/",
        desc: "Yarn",
        tags: ["npm"]
      },
      {
        id: 13,
        name: "Less",
        home: "http://lesscss.cn/",
        desc: "Less",
        tags: ["css"]

      },
      {
        id: 14,
        name: "Sass",
        home: "https://sass.bootcss.com/",
        desc: "Sass",
        tags: ["css"]
      },
      {
        id: 15,
        name: "Eslint",
        home: "https://eslint.org/",
        desc: "Eslint",
        tags: ["代码检查"]
      },
      {
        id: 16,
        name: "Prettier",
        home: "https://prettier.io/",
        desc: "Prettier",
        tags: ["代码格式化"]

      },
      {
        id: 17,
        name: "Babel",
        home: "https://www.babeljs.cn/",
        desc: "Babel",
        tags: ["编译"]

      },
      {
        id: 18,
        name: "Webpack",
        home: "https://webpack.docschina.org/",
        desc: "Webpack",
        tags: ["打包"]

      }

    ]
  },

  {
    type: "react",
    name: "React",
    list: [
      {
        id: 0,
        name: "Reactjs",
        home: "https://react.docschina.org/",
        desc: "用于构建用户界面的 JavaScript 库"
      }
    ]
  },
  {
    type: "music",
    name: "音乐",
    list: [
      {
        id: 0,
        name: "网易云音乐",
        home: "https://music.163.com/",
        desc: "网易云音乐",
        tags: ["音乐"]
      }
    ]
  },
  {
    type: "video",
    name: "视频",
    list: [
      {
        id: 0,
        name: "Bilibili",
        home: "https://www.bilibili.com/",
        desc: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
        tags: ["视频"]
      }, {
        id: 1,
        name: "YouTube",
        home: "https://www.youtube.com/",
        desc: "YouTube",
        tags: ["视频"]
      },
      {
        id: 2,
        name: "腾讯视频",
        home: "https://v.qq.com/",
        desc: "腾讯视频",
        tags: ["视频"]
      },
      {
        id: 3,
        name: "libvio",
        home: "https://www.libvio.cc/",
        desc: "libvio",
        tags: ["视频"]
      }
    ]
  },
  {
    type: "game",
    name: "游戏",
    list: []
  },
  {
    type: "other",
    name: "其他",
    list: []
  }
]
export { data }