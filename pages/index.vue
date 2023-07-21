<template>
  <div id="kifshomepage" class="p-t-3rem">
    <div class="flex flex-justify-around flex-row w-30%">
      <div class="nav" v-for="nav in navData" :key="nav.id">
        <a :href="nav.link"> {{ nav.name }}</a>
      </div>
    </div>

    <div class="w-100% flex flex-justify-center">
      <img class="h-5rem m-t-6rem" src="../public/logo.png" alt="logo" />
    </div>
    <div shadow p-b-20px>
      <div class="w-100% flex flex-justify-center m-t-3rem items-center">
        <div class="h-2rem" @click="changeEnginList">
          <img
            :src="searchEngineIcon"
            alt=""
            srcset=""
            class="h-1.7rem m-r-1rem"
          />
        </div>
        <div
          class="invite-code-panel w-40% flex flex-justify-center items-center border-rd-1 p-3px"
        >
          <input
            class="h-3rem border-none w-100% shake-horizontal"
            type="text"
            outline-none
            v-model="searchValue"
            @keyup.enter="search"
            @onkeydown="search"
            required
            border-rd-1
            shadow-sm
          />
          <div class="i-mdi-clear text-2xl h-2rem m-l-1rem" @click="clear" />
        </div>

        <div class="icon" @click="search">
          <div class="i-mdi-magnify text-2xl h-2rem m-l-1rem" />
        </div>
      </div>

      <div
        v-show="searchEngineListShow"
        class="enginList flex flex-justify-center m-t-1rem items-center bg-#e1e1e1"
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
    <!-- 下拉按钮 -->
    <div class="flex flex-justify-center items-center">
      <div
        class="i-mdi-chevron-down text-2xl h-2rem m-l-1rem"
        v-show="historyshow"
        @click="historyshow = false"
      />
      <div
        class="i-mdi-chevron-up text-2xl h-2rem m-l-1rem"
        v-show="!historyshow"
        @click="historyshow = true"
      />
    </div>
    <div
      v-show="historyshow"
      class="history flex flex-col flex-justify-center m-t-1rem"
    >
      <div
        v-for="(item, index) in history"
        :key="item"
        class="item flex flex-justify-center items-center border-rd-1 p-3px m-r-1rem"
      >
        <a
          :href="searchEngine[searchEngineIndex].link + item"
          target="_blank"
          >{{ item }}</a
        >
        <!-- 删除 -->
        <div
          class="i-mdi-close text-2xl h-2rem m-l-5rem"
          @click="remove(index)"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import data from "./data.json";

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
const historyshow = ref(false);
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
  if (history.value.length > 10) history.value.shift();
  if (history.value.find((item) => item === searchValue.value)) {
  } else {
    history.value.push(searchValue.value);
  }
  window.open(searchEngine[searchEngineIndex.value].link + searchValue.value);
};
const clear = () => {
  searchValue.value = "";
};
const history = ref<string[]>([]);
const getHistory = () => {
  const historyData = localStorage.getItem("history");
  if (historyData) {
    history.value = JSON.parse(historyData);
  }
};
const remove = (index: number) => {
  history.value.splice(index, 1);
};
onMounted(() => {
  getHistory();
});
onUnmounted(() => {
  localStorage.setItem("history", JSON.stringify(history.value));
});
</script>
