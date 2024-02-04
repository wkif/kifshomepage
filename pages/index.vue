<script lang="ts" setup>
import Plum from "../composables/Plum";
const getStyle = () => {
  if (process.client) {
    // 获取 topBox 的高度
    const topBox = document.getElementById("topBox")!;
    // 计算剩下高度的vh
    const body = document.body;
    const height =
      (body.offsetHeight - topBox?.offsetHeight - 100) / body.offsetHeight;
    const content = document.getElementById("content")!;
    content.style.cssText = `height: ${height * 100}vh;`;
  }
};

const activeTab = ref(0);
const TabList = ref([
  {
    name: "网站导航",
    id: 0,
  },
  // {
  //   name: "资讯信息",
  //   id: 1,
  // },
]);

const el = ref<HTMLCanvasElement>();
const el2 = ref<HTMLCanvasElement>();
function initFlower() {
  // const canvas = el.value!

  const canvasList = [];
  canvasList.push(el.value!);
  canvasList.push(el2.value!);
  const branchList = [
    {
      start: {
        x: 0,
        y: Math.random() * 600,
      },
      length: Math.random() * 10,
      theta: -Math.PI / 2 + Math.random() * 10,
    },
    {
      start: {
        x: 1900,
        y: Math.random() * 600,
      },
      length: Math.random() * 10,
      theta: -Math.PI / 2 + Math.random() * 10,
    },
  ];
  canvasList.forEach((canvas, index) => {
    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight;
    const plum = new Plum(canvas);
    const branch = branchList[index];
    plum.startPlum(branch);
  });
}
function init() {
  setTimeout(() => {
    initFlower();
  }, 1000);
}

onMounted(() => {
  getStyle();
  // init();
});
</script>

<template>
  <div id="kifshomepage">
    <!-- <div class="z--1 absolute w-100% h-100%">
      <canvas id="el" ref="el" class="absolute"></canvas>
      <canvas id="el2" ref="el2" class="absolute"></canvas>
    </div> -->
    <TopBox />
    <div id="content" overflow-auto>
      <div
        id="tabs"
        class="responsive sticky-top"
        absolute
        bg-white
        w-100vw
        z-1
      >
        <div class="tabs tabs-center table">
          <!-- <a
            href="#web"
            class="tab"
            :class="activeTab === 'web' ? 'active' : ''"
          >
            网站导航
          </a>
          <a href="#news" class="tab"> 资讯信息 </a> -->
          <a
            class="tab"
            :class="activeTab === tab.id ? 'active' : ''"
            v-for="tab in TabList"
            :key="tab.id"
            @click="activeTab = tab.id"
            >{{ tab.name }}</a
          >
        </div>
      </div>
      <ContentWebList v-show="activeTab === 0" />
      <ContentNewList v-show="activeTab === 1" />
    </div>
    <Chatgpt z-2 />
    <User />
    <News />
    <Footer />
  </div>
</template>
<style lang="less" scoped>
.tabs {
  display: table;
  border-collapse: separate;
  table-layout: auto;
  &.tabs-center {
    margin: auto;
  }
  &.tabs-justify {
    width: 100%;
    table-layout: fixed;
  }
  a.tab {
    position: relative;
    display: table-cell;
    transition: all ease 0.3s;
    padding: 1em 1.6em;
    transform: translate3d(0, 0, 0);
    color: #636d84;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      color: rgb(60, 180, 250);
    }
    &:after {
      transition: all 0.3s cubic-bezier(1, 0, 0, 1);
      will-change: transform, box-shadow, opacity;
      position: absolute;
      content: "";
      height: 3px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      border-radius: 3px 3px 0px 0px;
      background: rgba(60, 180, 250, 0.2);
      box-shadow: 0px 4px 10px 3px rgba(60, 180, 250, 0.15);
      opacity: 0;
      transform: scale(0, 1);
    }
    &.active {
      color: rgb(60, 180, 250);
      &:after {
        opacity: 1;
        transform: scale(1, 1);
      }
    }
  }
}
</style>
