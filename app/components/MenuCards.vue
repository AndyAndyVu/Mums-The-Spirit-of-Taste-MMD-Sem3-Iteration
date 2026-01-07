<script setup>
import { takeawayMenu } from '../data/menuItems.js';
</script>

<template>
    <div class="menuSections">
        <section v-for="category in takeawayMenu" :key="category.id" v-if="category.items.length"
            class="categorySection" :id="category.id">
            <header class="categoryHeader">
                <h2>{{ category.title }}</h2>
                <p>{{ category.description }}</p>
            </header>

            <div class="takeAwayContainer">
                <div class="takeAwayCard" v-for="item in category.items" :key="item.id">
                    <img :src="item.image" :alt="item.title" />
                    <div class="takeAwayCardInfo">
                        <div>
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.description }}</p>
                            <h4>{{ item.price }}</h4>
                        </div>
                        <div>
                            <p>{{ item.allergies.join(', ') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
img {
    width: 100%;
    height: auto;
}

.takeAwayContainer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
}

.takeAwayCard {
    display: flex;
    flex-direction: column;
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