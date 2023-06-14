<template>
  <div id="kifshomepage" class="p-t-3rem h-100vh">
    <div class="flex flex-justify-around flex-row w-30%">
      <div class="nav" v-for="nav in navData" :key="nav.id">
        <a :href="nav.link"> {{ nav.name }}</a>
      </div>
    </div>

    <div class="w-100% flex flex-justify-center">
      <img class="h-5rem m-t-6rem" src="../public/logo.png" alt="logo" />
    </div>
    <div>
      <div class="w-100% flex flex-justify-center m-t-3rem">
        <div class="h-2rem" @click="changeEnginList">
          <img
            :src="searchEngineIcon"
            alt=""
            srcset=""
            class="h-1.7rem m-r-1rem"
          />
        </div>
        <div
          class="invite-code-panel w-20% flex flex-justify-center border-rd-1 bg p-3px"
        >
          <input
            class="h-2rem border-none bg w-100%"
            type="text"
            v-model="searchValue"
            @keyup.enter="search"
            required
          />
          <div class="i-mdi-clear text-2xl h-2rem m-l-1rem" @click="clear" />
        </div>

        <div class="icon" @click="search">
          <div class="i-mdi-magnify text-2xl h-2rem m-l-1rem" />
        </div>
      </div>
      <div
        v-show="searchEngineListShow"
        class="enginList flex flex-justify-center m-t-1rem"
      >
        <div v-for="item in searchEngine" :key="item.id" class="item">
          <img
            :src="item.icon"
            alt=""
            srcset=""
            class="h-1.7rem m-r-1rem"
            @click="changeEngin(item.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const navData = [
  {
    id: 0,
    name: "首页",
    link: "/",
  },
  {
    id: 1,
    name: "github",
    link: "https://github.com/wkif",
  },
  {
    id: 2,
    name: "博客（hexo版本）",
    link: "https://www.kifroom.icu/",
  },
  {
    id: 3,
    name: "博客（Nuxt3版本）",
    link: "https://kifroom-nuxt.vercel.app/",
  },
];
// 搜索引擎
const searchEngine = [
  {
    id: 0,
    name: "必应",
    link: "https://cn.bing.com/search?q=",
    icon: "https://files.codelife.cc/itab/search/bing.svg",
  },
  {
    id: 1,
    name: "谷歌",
    link: "https://www.google.com/search?q=",
    icon: "https://files.codelife.cc/itab/search/google.svg",
  },
  {
    id: 2,
    name: "百度",
    link: "https://www.baidu.com/s?wd=",
    icon: "https://files.codelife.cc/itab/search/baidu.svg",
  },
];
const searchEngineIndex = ref(0);
let searchEngineIcon = searchEngine[searchEngineIndex.value].icon;
const searchEngineListShow = ref(false);
const changeEnginList = () => {
  searchEngineListShow.value = !searchEngineListShow.value;
};
const changeEngin = (id: number) => {
  searchEngineIndex.value = id;
  searchEngineIcon = searchEngine[searchEngineIndex.value].icon;
  searchEngineListShow.value = false;
};
let searchValue = ref("");
const search = () => {
  if (!searchValue.value) return;
  window.open(searchEngine[searchEngineIndex.value].link + searchValue.value);
};
const clear = () => {
  searchValue.value = "";
};
</script>
<style lang="less" scoped>
a {
  color: #c91c1c;
  text-decoration: none;
  font-size: 1rem;
}
a:hover {
  color: #fff;
}
.bg {
  background-color: #fbba2d;
}
.bg2 {
  background-color: #f58463;
}
</style>
<style src="./style/gOmboMm.less"></style>
