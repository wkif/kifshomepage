<script setup lang="ts">
const getData = async () => {
    const { code, data } = await $fetch(`/api/getMessage`);

};
// await getData();
</script>

<template>
  <div p-4rem>kif</div>
</template>

<style lang="less" scoped></style>
