<script setup>
</script>

<template>
<div class="takeAwayCard">
    <img 
    :src="menuItem.image.src" 
    :alt="menuItem.image.alt">
    <div>
        <h4>{{ menuItem.title }}</h4>
        <p>{{ menuItem.description }}</p>
        <h4>{{ menuItem.price }}</h4>
    </div>
    <div>
        <p>{{ menuItem.allergies }}</p>
    </div>
</div>
</template>

<style scoped>
</style>