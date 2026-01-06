<script setup>
import { menuItems } from '../data/menuItems.js';
</script>

<template>
    <div class="takeAwayContainer">
        <div class="takeAwayCard" v-for="menuItem in menuItems" :key="menuItem.id">
            <img :src="menuItem.image" :alt="menuItem.title">
            <div class="takeAwayCardInfo">
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
    display: flex;
    flex-direction: column;
    flex: 1 1 300px;
    margin: 1rem;
    width: 45ch;
    border: 1px solid black;

}

.takeAwayCardInfo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1 1 auto;
    padding: 1rem;
}

.takeAwayCardInfo>div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.takeAwayCardInfo>div:last-child {
    margin-top: auto;
}
</style>