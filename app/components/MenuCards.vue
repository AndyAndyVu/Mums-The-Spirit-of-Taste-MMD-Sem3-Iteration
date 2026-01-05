<script setup>
import { menuItems } from '../data/menuItems.js';
</script>

<template>
    <div class="takeAwayContainer">
    <div class="takeAwayCard" v-for="menuItem in menuItems" :key="menuItem.id">
        <img :src="menuItem.image" :alt="menuItem.title">
        <div>
            <h4>{{ menuItem.title }}</h4>
            <p>{{ menuItem.description }}</p>
            <h4>{{ menuItem.price }}</h4>
        </div>
        <div>
            <p>{{ menuItem.allergies }}</p>
        </div>
    </div>
    </div>
</template>

<style scoped>
img {
    width: 100%;
    height: auto;
}
.takeAwayContainer {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    
}
.takeAwayCard {
    margin: 1rem;
    padding: 1rem;
    width: 40ch;
    border: 1px solid black;
}
</style>