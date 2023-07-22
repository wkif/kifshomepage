<template>
  <div id="kifshomepage" p-t-3rem>
    <div h-30vh>
      <div w="100%" flex flex-justify-around items-center>
        <div flex flex-justify-around flex-row w="30%">
          <div class="nav" v-for="nav in navData" :key="nav.id">
            <!-- title -->
            <div
              text-15px
              flex
              text="#8c959f"
              cursor-pointer
              @click="open(nav.link)"
            >
              {{ nav.name }}
            </div>
          </div>
        </div>
        <Darkmode cursor-pointer />
      </div>
      <div flex flex-col items-center>
        <div w="100%" flex flex-justify-center class="bounce-top flicker-1">
          <img h-5rem m-t-6rem src="../public/logo.png" alt="logo" />
        </div>
        <!-- 请注意，以下的示例包含超链接，您可能需要手动配置样式使其不变色。如果您嫌麻烦，可以移除。 -->
        <p id="hitokoto_text">:D 获取中...</p>
        <div shadow p-b-20px w="100%" rounded-20px>
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
            z-2
            flex
            flex-col
            flex-justify-center
            m-t-1rem
            absolute
            bg="#fafafa"
            class="dark:bg-#32383f"
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
            >
              <!-- 序号 -->
              <div text-20px m-r-2rem>{{ index + 1 }}.</div>
              <a
                :href="searchEngine[searchEngineIndex].link + item"
                target="_blank"
                >{{ item }}</a
              >
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
    <div m-l-7vw m-r-7vw m-t-2vh h-60vh overflow-auto>
      <div v-for="item in webList" :key="item.type">
        <div v-if="item.list.length">
          <div text-20px p-10px flex text="#8c959f" class="tracking-in-expand">
            {{ item.name }}
          </div>
          <div w-130px h-2px m-b-20px bg="#d7dadd"></div>
        </div>

        <div flex flex-wrap>
          <div
            v-for="web in item.list"
            :key="web.name"
            m-20px
            p-20px
            rounded-10px
            w-200px
            cursor-pointer
            class="text-gray-800 dark:bg-#32383f bg-#eaeef2 dark:text-gray-100 slide-in-top"
            @click="open(web.link)"
            flex
            flex-col
            justify-between
          >
            <!-- title -->
            <div text-20px p-t-10px class="tracking-in-expand">
              {{ web.name }}
            </div>
            <!-- desc -->
            <div text-14px p-t-10px>{{ web.desc }}</div>
            <div flex items-center justify-end>
              <div
                v-for="tag in web.tags"
                :key="tag"
                text-10px
                p-4px
                m-4px
                bg="#a475f9"
                rounded-7px
              >
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { data } from "./data.ts";

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
const webList = ref(data);
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
const getMessage = async () => {
  // 请注意此 Web API 的兼容性，
  // 不支持 IE, iOS Safari < 10.1，
  // 完整支持列表参考：https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  fetch("https://v1.hitokoto.cn")
    .then((response) => response.json())
    .then((data) => {
      const hitokoto = document.querySelector("#hitokoto_text");
      hitokoto.innerText = data.hitokoto;
    })
    .catch(console.error);
};
const remove = (index: number) => {
  history.value.splice(index, 1);
};
const open = (link: string) => {
  window.open(link);
};
onMounted(() => {
  getHistory();
  getMessage();
});
onUnmounted(() => {
  localStorage.setItem("history", JSON.stringify(history.value));
});
</script>
