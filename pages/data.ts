const data = [
  {
    type: "tools",
    name: "工具",
    list: [
      {
        id: 0,
        name: "Kifs print online",
        link: "https://print.kifroom.icu/",
        desc: "个开源的虚拟手绘风格的白板。创建任何漂亮的手绘图。",
        tags: ["白板", "在线工具", "自部署"]
      },
      {
        id: 1,
        name: "Animista",
        link: "https://animista.net/",
        desc: "CSS动画生成器",
        tags: ["动画", "在线工具"]
      },
      {
        id: 2,
        name: "CSS Gradient",
        link: "https://cssgradient.io/",
        desc: "CSS渐变生成器",
        tags: ["渐变", "在线工具"]
      },
      {
        id: 3,
        name: "CSS Box Shadow",
        link: "https://cssgenerator.org/box-shadow-css-generator.html",
        desc: "CSS阴影生成器",
        tags: ["阴影", "在线工具"]
      },
      {
        id: 4,
        name: "CSS Border Radius",
        link: "https://cssgenerator.org/border-radius-css-generator.html",
        desc: "CSS圆角生成器",
        tags: ["圆角", "在线工具"]

      },
      {
        id: 5,
        name: "Remove Bg",
        link: "https://www.remove.bg/zh",
        desc: "在线抠图",
        tags: ["抠图", "在线工具"]
      },
      {
        id: 6,
        name: "Animate.css",
        link: "https://animate.style/",
        desc: "CSS动画库",
        tags: ["动画"]
      },
      {
        id: 7,
        name: "Grabient",
        link: "https://www.grabient.com/",
        desc: "CSS渐变库",
        tags: ["渐变"]
      },
      {
        id: 8,
        name: "Recoded",
        link: "https://recoded.netlify.app/",
        desc: "为程序开发人员的代码界面生成器",
        tags: ["代码"]
      },
      {
        id: 9,
        name: "Iconfont",
        link: "https://www.iconfont.cn/",
        desc: "阿里巴巴矢量图标库",
        tags: ["图标"]
      },
      {
        id: 10,
        name: "路过图床",
        link: "https://imgchr.com/",
        desc: "免费图床",
        tags: ["图床"]
      },
      {
        id: 11,
        name: "腾讯邮箱",
        link: "https://work.weixin.qq.com/mail/",
        desc: "腾讯邮箱",
        tags: ["邮箱"]
      },
      {
        id: 12,
        name: "163邮箱",
        link: "https://mail.163.com/",
        desc: "163邮箱",
        tags: ["邮箱"]
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
        link: "https://cn.vuejs.org/",
        desc: "渐进式JavaScript 框架",
        tags: ["框架"]
      }, {
        id: 1,
        name: "Vue Router",
        link: "https://router.vuejs.org/zh/",
        desc: "Vue.js 官方的路由管理器",
        tags: ["路由"]
      }, {
        id: 2,
        name: "Pinia",
        link: "https://pinia.web3doc.top/",
        desc: "Vue.js 应用程序开发的状态管理模式",
        tags: ["状态管理"]
      },
      {
        id: 3,
        name: "Vue CLI",
        link: "https://cli.vuejs.org/zh/",
        desc: "Vue.js 开发的标准工具",
        tags: ["构建工具"]
      }, {
        id: 4,
        name: "Nuxt3",
        link: "https://v3.nuxtjs.org/",
        desc: "Vue.js 应用程序开发的静态站点生成器",
        tags: ["SSR"]
      },
      {
        id: 18,
        name: "Vite",
        link: "https://cn.vitejs.dev/",
        desc: "下一代前端开发与构建工具",
        tags: ["构建工具"]
      },
      {
        id: 5,
        name: "VuePress",
        link: "https://vuepress.vuejs.org/zh/",
        desc: "Vue 驱动的静态网站生成器",
        tags: ["文档"]
      }, {
        id: 6,
        name: "Vitpress",
        link: "https://vitejs.cn/vitepress/",
        desc: "基于vite的静态网站生成器",
        tags: ["文档"]
      },
      {
        id: 7,
        name: "Icones",
        link: "https://icones.js.org/",
        desc: "图标库",
        tags: ["图标"]
      },
      {
        id: 8,
        name: "Vueuse",
        link: "https://vueuse.org/",
        desc: "Vue.js 的基本用法集合",
        tags: ["工具库"]
      },
      {
        id: 9,
        name: "Unocss",
        link: "https://unocss.dev/",
        desc: "零配置的工具，用于编写可维护和可扩展的样式",
        tags: ["css"]
      },
      {
        id: 10,
        name: "Unocss-interactive",
        link: "https://unocss.dev/interactive/",
        desc: "unocss-interactive",
        tags: ["查询工具"]
      },
      {
        id: 11,
        name: "Element plus",
        link: "https://element-plus.org/#/zh-CN",
        desc: "基于element-ui的组件库",
        tags: ["组件库"]
      },
      {
        id: 12,
        name: "Ant Design Vue",
        link: "https://www.antdv.com/components/overview-cn",
        desc: "Ant Design Vue",
        tags: ["组件库"]
      },
      {
        id: 13,
        name: "Vant",
        link: "https://vant-contrib.gitee.io/vant/#/zh-CN/",
        desc: "轻量、可靠的移动端 Vue 组件库",
        tags: ["组件库"]
      },
      {
        id: 14,
        name: "unplugin-vue-components",
        link: "https://www.npmjs.com/package/unplugin-vue-components",
        desc: "unplugin-vue-components",
        tags: ["插件", "npm"]
      },
      {
        id: 15,
        name: "pinia-plugin-persistedstate",
        link: "https://www.npmjs.com/package/pinia-plugin-persistedstate",
        desc: "pinia-plugin-persistedstate",
        tags: ["插件", "npm"]
      },
      {
        id: 16,
        name: "unplugin-auto-import",
        link: "https://github.com/antfu/unplugin-auto-import",
        desc: "unplugin-auto-import",
        tags: ["插件", "npm"]
      },
      {
        id: 17,
        name: "Vue I18n",
        link: "https://vue-i18n.intlify.dev/",
        desc: "Vue I18n",
        tags: ["国际化"]
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
        link: "https://code.visualstudio.com/",
        desc: "Visual Studio Code",
        tags: ["编辑器"]
      },
      {
        id: 1,
        name: "Neovim",
        link: "https://neovim.io/",
        desc: "Neovim",
        tags: ["编辑器"]
      },
      {
        id: 2,
        name: "Typora",
        link: "https://typora.io/",
        desc: "Typora",
        tags: ["编辑器"]
      },
      {
        id: 3,
        name: "向日葵",
        link: "https://sunlogin.oray.com/",
        desc: "向日葵",
        tags: ["远程"]
      },
      {
        id: 4,
        name: "花生壳",
        link: "https://hsk.oray.com/",
        desc: "花生壳",
        tags: ["内网穿透"]
      },
      {
        id: 5,
        name: "Navicat",
        link: "https://www.navicat.com.cn/",
        desc: "Navicat",
        tags: ["数据库"]
      },
      {
        id: 6,
        name: "Postman",
        link: "https://www.postman.com/",
        desc: "Postman",
        tags: ["接口测试"]
      },
      {
        id: 7,
        name: "Figma",
        link: "https://www.figma.com/",
        desc: "Figma",
        tags: ["设计"]
      },
      {
        id: 8,
        name: "Tim",
        link: "https://tim.qq.com/",
        desc: "tim",
        tags: ["通讯"]

      },
      {
        id: 9,
        name: "微信",
        link: "https://weixin.qq.com/",
        desc: "微信",
        tags: ["通讯"]
      },
      {
        id: 10,
        name: "腾讯会议",
        link: "https://meeting.tencent.com/",
        desc: "腾讯会议",
        tags: ["通讯"]
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
        link: "https://juejin.cn/",
        desc: "掘金是一个帮助开发者成长的社区",
        tags: ["社区"]
      },
      {
        id: 8,
        name: "SegmentFault",
        link: "https://segmentfault.com/",
        desc: "SegmentFault 思否",
        tags: ["社区"]
      },
      {
        id: 9,
        name: "CSDN",
        link: "https://www.csdn.net/",
        desc: "CSDN-专业IT技术社区",
        tags: ["社区"]
      },
      {
        id: 10,
        name: "博客园",
        link: "https://www.cnblogs.com/",
        desc: "博客园 - 开发者的网上家园",
        tags: ["社区"]
      },
      {
        id: 0,
        name: "GitHub",
        link: "https://github.com/",
        desc: "全球最大的开源社区",
        tags: ["开源社区"]
      },
      {
        id: 1,
        name: "Gitee",
        link: "https://gitee.com/",
        desc: "基于 Git 的代码托管和研发协作平台",
        tags: ["开源社区"]
      },
      {
        id: 2,
        name: "CodePen",
        link: "https://codepen.io/",
        desc: "前端代码展示平台",
        tags: ["前端"]
      },
      {
        id: 3,
        name: "CodeSandbox",
        link: "https://codesandbox.io/dashboard",
        desc: "在线代码编辑器",
        tags: ["前端"]
      },
      {
        id: 4,
        name: "Vercel",
        link: "https://vercel.com/",
        desc: "前端部署平台",
        tags: ["部署"]
      },
      {
        id: 5,
        name: "在线js",
        link: "https://jsrun.net/new",
        desc: "在线js",
        tags: ["js"]
      },
      {
        id: 6,
        name: "Echarts",
        link: "https://echarts.apache.org/zh/index.html",
        desc: "一个使用 JavaScript 实现的开源可视化库",
        tags: ["可视化"]
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
        link: "https://react.docschina.org/",
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
        link: "https://music.163.com/",
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
        link: "https://www.bilibili.com/",
        desc: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
        tags: ["视频"]
      }, {
        id: 1,
        name: "YouTube",
        link: "https://www.youtube.com/",
        desc: "YouTube",
        tags: ["视频"]
      },
      {
        id: 2,
        name: "腾讯视频",
        link: "https://v.qq.com/",
        desc: "腾讯视频",
        tags: ["视频"]
      },
      {
        id: 3,
        name: "libvio",
        link: "https://www.libvio.cc/",
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