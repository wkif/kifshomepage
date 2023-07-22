<script setup lang="ts">
import { isChrome } from '../utils/index'

let x = 0
let y = 0
let endRadius = 0
const isDark = ref(false)

function toggleTheme(event: MouseEvent) {
  x = event.clientX
  y = event.clientY
  endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  if (process.client) {
    isDark.value = !isDark.value
    changeTheme()
  }
}
function changeTheme() {
  const transition = document.startViewTransition(() => {
    const root = document.body
    // isDark.value = root.classList.contains('dark')
    root.classList.remove(isDark.value ? 'dark' : 'light')
    root.classList.add(isDark.value ? 'light' : 'dark')
  })
  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath
      },
      {
        duration: 500,
        easing: 'ease-in',
        pseudoElement: isDark.value ? '::view-transition-old(root)' : '::view-transition-new(root)'
      }
    )
  })
}
onMounted(() => {
  if (process.client && isChrome()) {
    // changeTheme()
    // 根据时间判断是否开启深色模式
    const hour = new Date().getHours()
    if (hour >= 18 || hour <= 6) {
      isDark.value = false
    } else {
      isDark.value = true
    }
    changeTheme()
  } else {
    const msg =
      '系统深色模式采用 View Transition API 实现，当前浏览器非Chrome，暂未适配，详情： https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition'
    alert(msg)
  }
})
</script>

<template>
  <div>
    <div
      v-show="!isDark"
      text="30px #dfc243"
      class="i-mdi-weather-night-partly-cloudy"
      @click="toggleTheme"
    ></div>
    <div
      v-show="isDark"
      text="30px #dfc243"
      class="i-mdi-weather-sunset"
      @click="toggleTheme"
    ></div>
  </div>
</template>

<style lang="less" scoped>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

/* 进入dark模式和退出dark模式时，两个图像的位置顺序正好相反 */
.dark::view-transition-old(root) {
  z-index: 1;
}
.dark::view-transition-new(root) {
  z-index: 999;
}

::view-transition-old(root) {
  z-index: 999;
}
::view-transition-new(root) {
  z-index: 1;
}
</style>