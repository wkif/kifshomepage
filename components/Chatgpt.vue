<script setup lang="ts">
const show = ref(false);
</script>

<template>
  <div fixed right-100px bottom-300px flex items-end>
    <div
      v-show="show"
      min-h-40vh
      w-30vw
      rounded-10px
      p-10px
      class="text-gray-800 dark:bg-#32383f bg-#eaeef2 dark:text-gray-100 shadow swing-in-top-fwd"
    >
      <iframe
        style="width: 100%; height: 50vh"
        scrolling="auto"
        frameborder="0"
        id="iframe"
        ref="iframeRef"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        src="https://chat-gpt-next-web-kif.vercel.app/"
      ></iframe>
    </div>
    <div
      class="i-mdi-scoreboard-outline"
      border-radius-50%
      text-2rem
      box-shadow="0 0 10px #000"
      cursor-pointer
      @click="show = !show"
    ></div>
  </div>
</template>

<style lang="less" scoped></style>
