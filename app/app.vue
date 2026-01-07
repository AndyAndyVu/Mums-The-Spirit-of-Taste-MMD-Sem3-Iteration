<script setup>
  // CDN for LIST.JS
useHead({
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js',
      defer: true,
    },
  ],
})
</script>
<template>
  <!-- GOOGLE ICONS -->
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <!--  -->
  <div>
    <NuxtPage />
  </div>
</template>

<style></style>
<!-- 
TEST TEST TEST 2nd Commit
| Folder         | Nuxt does               |
| -------------- | ----------------------- |
| `pages/`       | Auto-creates routes     |
| `components/`  | Auto-imports components |
| `layouts/`     | Makes layouts available |
| `assets/`      | Processes CSS & images  |
-->
