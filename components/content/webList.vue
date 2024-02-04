<script setup lang="ts">
import { data } from "../../composables/data.ts";
import type { WebType } from "../../composables/data.ts";

const webList = ref<WebType[]>(data);
const nameList = ref<string[]>([]);
const getNameList = () => {
  webList.value.forEach((item) => {
    item.list?.length && nameList.value.push(item.name);
  });
};
const open = (link: string) => {
  window.open(link);
};
onMounted(() => {
  getNameList();
});
</script>

<template>
  <div flex>
    <div flex flex-col p-l-50px m-t-10vh absolute>
      <a v-for="item in nameList" :key="item" :href="'#' + item" p-8px>{{
        item
      }}</a>
    </div>
    <div m-l-7vw m-r-7vw m-t-8vh overflow-auto>
      <div v-for="item in webList" :key="item.type">
        <div v-if="item.list?.length">
          <div
            text-20px
            p-10px
            flex
            text="#8c959f"
            :id="item.name"
            class="tracking-in-expand"
          >
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
  </div>
</template>

<style lang="less" scoped></style>
