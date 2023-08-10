<script lang="ts" setup>
import { data } from "./data.ts";
const getStyle = () => {
  if (process.client) {
    // 获取 topBox 的高度
    const topBox = document.getElementById("topBox");
    // 计算剩下高度的vh
    const height =
      (window.innerHeight - topBox?.offsetHeight - 200) / window.innerHeight;
    // 返回style
    const content = document.getElementById("content");
    content.style.cssText = `height: ${height * 100}vh;`;
  }
};

const webList = ref(data);

const open = (link: string) => {
  window.open(link);
};
const init = () => {
  if (process.client) {
    // 禁用右键
    document.oncontextmenu = new Function("event.returnValue=false");
    // 禁用选择
    document.onselectstart = new Function("event.returnValue=false");
    //禁止f12
    document.οnkeydοwn = new Function("event.returnValue=false");
    document.onkeydown = function (e) {
      if (e && e.keyCode === 123) {
        e.returnValue = false;
        // e.keyCode = 0   //去掉也可以的，倘若要写，则需要setter 以及 getter配合使用，不配合，会报错
        return false;
      }
    };
  }
};

onMounted(() => {
  getStyle();
  // init();
});

</script>

<template>
  <div id="kifshomepage">
    <TopBox />
    <div m-l-7vw m-r-7vw m-t-2vh overflow-auto id="content">
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
            flex
            flex-col
            justify-between
          >
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
            <div w="100%" h-1px m-1px bg="#a475f9"></div>
            <!-- title -->
            <div text-20px p-t-10px class="tracking-in-expand">
              {{ web.name }}
            </div>
            <!-- desc -->
            <div text-14px p-t-10px>{{ web.desc }}</div>
            <div w="100%" h-1px m-t-2px bg="#a475f9"></div>
            <div flex items-center justify-around>
              <!-- home图标 -->
              <div
                v-if="web.home"
                class="i-mdi-home"
                text-2xl
                h-2rem
                m-1px
                @click="open(web.home)"
              ></div>
              <!-- github图标 -->
              <div
                v-if="web.github"
                class="i-mdi-github"
                text-2xl
                h-2rem
                m-1px
                @click="open(web.github)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Chatgpt /> -->
    <User/>
    <Footer />
  </div>
</template>
