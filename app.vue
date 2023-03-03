<template>
  <div>
    <!-- 移除欢迎页面 -->
    <!-- <NuxtWelcome /> -->

    <!-- 路由出口 -->
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (s) => {
    return s ? `${s} - 天涯碧草画斜阳` : '天涯碧草画斜阳'
  }
})
</script>