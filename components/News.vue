<script setup lang="ts">
interface TabType {
  name: string;
  type: string;
  active?: boolean;
}
interface NewsType {
  id: string;
  title: string;
  url: string;
  hot: number;
}
const show = ref(false);
const change = function () {
  show.value = !show.value;
};
const TabList = ref<TabType[]>([
  {
    name: "哔哩哔哩",
    type: "bilibili",
    active: false,
  },
  {
    name: "微博",
    type: "weibo",
    active: false,
  },
  {
    name: "抖音",
    type: "douyin",
    active: false,
  },
  {
    name: "知乎",
    type: "zhihu",
    active: false,
  },
  {
    name: "少数派",
    type: "sspai",
    active: false,
  },
  {
    name: "IT 之家",
    type: "ithome",
    active: false,
  },
  {
    name: "稀土掘金",
    type: "juejin",
    active: true,
  },
]);
const link = ref();
const changeTab = function (index: number) {
  TabList.value.forEach((tab: TabType, i) => {
    if (i === index) {
      tab.active = true;
      link.value = tab.type;
    } else {
      tab.active = false;
    }
  });
  getData();
};
const newsList = ref<NewsType[]>([]);
const newsTotal = ref(0);
const loading = ref(false);
const getData = async function () {
  loading.value = true;
  link.value = link.value
    ? link.value
    : TabList.value.find((item) => item.active)?.type;
  const { code, data, total } = await $fetch(
    `https://daily-hot-api-pi-one.vercel.app/${link.value}`
  );
  if (code === 200) {
    newsList.value = data;
    newsTotal.value = total;
  }
  loading.value = false;
};
const goto = function (url: string) {
  if (url) {
    window.open(url);
  }
};

onMounted(() => {
  getData();
});
</script>

<template>
  <div fixed left-3rem bottom-3rem>
    <div
      v-show="show"
      h-50vh
      w-30vw
      rounded-10px
      p-1rem
      class="text-gray-800 dark:bg-#32383f bg-#eaeef2 dark:text-gray-100 shadow swing-in-top-fwd"
    >
      <div flex items-center justify-between>
        <div p-1rem color="red" flex items-center>
          热点
          <div i-material-symbols-local-fire-department-rounded></div>
        </div>
        <div
          cursor-pointer
          i-material-symbols-close-rounded
          @click="change"
        ></div>
      </div>
      <div flex justify-evenly items-center text-0.8rem>
        <div v-for="(tab, index) in TabList" :key="tab.type">
          <div
            flex
            flex-col
            items-center
            cursor-pointer
            @click="changeTab(index)"
          >
            <div>
              {{ tab.name }}
            </div>
            <div
              v-show="tab.active"
              w="100%"
              op-50
              h-10px
              transformY--100
              bg-amber
            ></div>
          </div>
        </div>
      </div>
      <div w="100%" h-1px op-50 class="dark:bg-#eaeef2 bg-#32383f"></div>
      <div v-show="loading" h-40vh text-center class="loader"></div>
      <div v-show="!loading" h="40vh" overflow-auto p-10px>
        <div v-for="news in newsList" :key="news.id" p-1rem shadow-sm>
          <div flex justify-between cursor-pointer @click="goto(news.url)">
            <div text-0.8rem>{{ news.title }}</div>
            <div v-if="news.hot" text-0.7rem color-red flex items-center>
              {{ news.hot }}
              <div i-material-symbols-local-fire-department-rounded></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      text-2rem
      @click="change"
      cursor-pointer
      i-material-symbols-breaking-news-alt-1
    ></div>
  </div>
</template>

<style lang="less" scoped>
.active {
  background-color: aqua;
  background-size: 50%;
  transform: translateY(-50%);
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 10px;
  background: #3498db;
  border-radius: 5px;
  animation: load 1.8s ease-in-out infinite;
  &:before,
  &:after {
    position: absolute;
    display: block;
    content: "";
    animation: load 1.8s ease-in-out infinite;
    height: 10px;
    border-radius: 5px;
  }
  &:before {
    top: -20px;
    left: 10px;
    width: 40px;
    background: #ef4836;
  }
  &:after {
    bottom: -20px;
    width: 35px;
    background: #f5ab35;
  }
}

@keyframes load {
  0% {
    transform: translateX(40px);
  }

  50% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(40px);
  }
}
</style>
