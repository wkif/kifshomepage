<script setup lang="ts">
const navData = [
  {
    id: 0,
    name: "首页",
    link: "/",
  },
  {
    id: 1,
    name: "Github",
    link: "https://github.com/wkif",
  },
  {
    id: 2,
    name: "博客（hexo版）",
    link: "https://www.kifroom.icu/",
  },
  {
    id: 3,
    name: "博客（Nuxt3版）",
    link: "https://blog.kifroom.icu/",
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
const getMessage = async () => {
  // 请注意此 Web API 的兼容性，
  // 不支持 IE, iOS Safari < 10.1，
  // 完整支持列表参考：https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  fetch("https://v1.hitokoto.cn")
    .then((response) => response.json())
    .then((data) => {
      if (process.client) {
        const hitokoto = document.querySelector("#hitokoto_text")!;
        hitokoto.innerText = data.hitokoto;
      }
    })
    .catch(console.error);
};
const searchEngineIndex = ref(0);
const historyshow = ref(false);
let searchEngineIcon = searchEngine[searchEngineIndex.value].icon;
const searchEngineListShow = ref(false);
const changeEnginList = () => {
  searchEngineListShow.value = !searchEngineListShow.value;
};
const changeEngin = (e: number) => {
  searchEngineIndex.value = e;
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
  localStorage.setItem("history", JSON.stringify(history.value));
  window.open(searchEngine[searchEngineIndex.value].link + searchValue.value);
};
const open = (e: string) => {
  window.open(e);
};
const clear = () => {
  searchValue.value = "";
};
const clearLocalStorage = () => {
  localStorage.clear();
  history.value = [];
};
const history = ref<string[]>([]);
const remove = (index: number) => {
  history.value.splice(index, 1);
};
const getHistory = () => {
  const historyData = localStorage.getItem("history");
  if (historyData) {
    history.value = JSON.parse(historyData);
  }
};
const bg = ref("");
const getImg = async () => {
  const res = await $fetch("/api/hello");
  if (res.code === 0) {
    bg.value = res.data;
    if (process.client) {
      const topBox = document.getElementById("topBox")!;
      // 修改背景图片
      topBox.style.cssText = `background-image: url(${bg.value});`;
    }
  } else {
    if (process.client) {
      const topBox = document.getElementById("topBox")!;
      // 修改背景图片
      topBox.style.cssText = `background-image: url(https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=zh-CN);`;
    }
  }
};
onMounted(() => {
  getHistory();
  getMessage();
  // init();
  getImg();
});

onUnmounted(() => {
  localStorage.setItem("history", JSON.stringify(history.value));
});
</script>

<template>
  <div id="topBox" bg-img rounded-b-20px class="shadow">
    <div w="100%" flex flex-justify-around items-center p-t-2rem>
      <div flex flex-justify-around flex-row w="30%">
        <div class="nav" v-for="nav in navData" :key="nav.id">
          <!-- title -->
          <div text-15px flex cursor-pointer @click="open(nav.link)">
            {{ nav.name }}
          </div>
        </div>
      </div>
      <div flex>
        <!-- 刷新图标 -->
        <div
          class="i-mdi-refresh text-gray-800 dark:bg-#32383f bg-#eaeef2 dark:text-gray-100"
          text-2xl
          h-2rem
          m-l-1rem
          m-r-1rem
          cursor-pointer
          @click="getImg"
        ></div>
        <!-- 清除图标 -->
        <div
          class="i-mdi-delete text-gray-800 dark:bg-#32383f bg-#eaeef2 dark:text-gray-100"
          text-2xl
          h-2rem
          m-l-1rem
          m-r-1rem
          cursor-pointer
          @click="clearLocalStorage"
        ></div>
        <Darkmode cursor-pointer />
      </div>
    </div>
    <div flex flex-col items-center>
      <div w="100%" flex flex-justify-center class="bounce-top flicker-1">
        <img h-5rem m-t-6rem src="../public/logo.png" alt="logo" />
      </div>
      <p id="hitokoto_text" @contextmenu.prevent.stop="getMessage">
        :D 获取中...
      </p>
      <!-- <span id="jinrishici-sentence">正在加载今日诗词....</span> -->
      <div p-b-20px w="100%" rounded-20px>
        <div flex flex-justify-center m-t-3rem items-center w="100%">
          <div h-2rem @click="changeEnginList">
            <img
              :src="searchEngineIcon"
              alt=""
              cursor-pointer
              srcset=""
              h-1.7rem
              m-r-1rem
            />
          </div>
          <div
            class="invite-code-panel"
            w="40%"
            flex
            flex-justify-center
            items-center
            border-rd-1
            p-3px
          >
            <input
              class="shake-horizontal"
              type="text"
              outline-none
              v-model="searchValue"
              @keyup.enter="search"
              @onkeydown="search"
              required
              border-rd-1
              shadow-sm
              h-3rem
              border-none
              w="100%"
              p-l-40px
            />
            <div
              v-show="searchValue"
              class="i-mdi-clear"
              text-2xl
              h-2rem
              m-l-1rem
              @click="clear"
            />
          </div>

          <div class="icon" @click="search">
            <div
              class="i-mdi-magnify"
              text-2xl
              h-2rem
              m-l-1rem
              cursor-pointer
            />
          </div>
        </div>

        <div
          v-show="searchEngineListShow"
          flex
          flex-justify-center
          m-t-1rem
          items-center
        >
          <div v-for="item in searchEngine" :key="item.id" class="item">
            <img
              :src="item.icon"
              alt=""
              srcset=""
              h-1.7rem
              m-r-1rem
              @click="changeEngin(item.id)"
            />
          </div>
        </div>
      </div>
      <!-- 下拉按钮 -->
      <div flex flex-justify-center items-center v-show="history.length">
        <div
          class="i-mdi-chevron-down"
          text-2xl
          h-2rem
          m-l-1rem
          v-show="historyshow"
          @click="historyshow = false"
        />
        <div
          class="i-mdi-chevron-up"
          text-2xl
          h-2rem
          m-l-1rem
          v-show="!historyshow"
          @click="historyshow = true"
        />
      </div>
      <div relative w="100%" flex flex-col items-center>
        <div
          v-show="historyshow"
          v-if="history.length"
          z-2
          flex
          flex-col
          flex-justify-center
          m-t-1rem
          absolute
          bg="#fafafa"
          class="dark:bg-#32383f text-gray-800 dark:text-gray-100 w-30%"
          p-10px
          rounded-10px
        >
          <div
            v-for="(item, index) in history"
            :key="item"
            class="text-gray-800 dark:bg-#32383f bg-#eaeef2 dark:text-gray-100"
            justify-center
            items-center
            border-rd-1
            p-rem
            m-r-1rem
            cursor-pointer
            flex
            text-truncate
          >
            <!-- 序号 -->
            <div text-20px m-r-2rem>{{ index + 1 }}.</div>
            <!-- <a
              :href="searchEngine[searchEngineIndex].link + item"
              target="_blank"
              >{{ item }}</a
            > -->
            <div @click="open(searchEngine[searchEngineIndex].link + item)">
              {{ item }}
            </div>
            <!-- 删除 -->
            <div
              class="i-mdi-close"
              text-xl
              h-2rem
              m-l-5rem
              @click="remove(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
