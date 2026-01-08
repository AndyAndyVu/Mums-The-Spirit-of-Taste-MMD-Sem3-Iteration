<script setup>
const props = defineProps({
    categories: {
        type: Array,
        required: true
    }
});

// Tillader interaktion med parent page
const emit = defineEmits(["sectionVisible"]);
let observeMenuSection

onMounted(() => {
    const sections = document.querySelectorAll(".observeSection");
    // Observer
    observeMenuSection = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // Ved synlighed af sektion emittes til parent page
                if (entry.isIntersecting) {
                    emit("sectionVisible", entry.target.id);
                }
            });
        },
        {
            // Position af hvor sektionen betragtes som synlig
            rootMargin: "-50% 0px -50% 0px",
        }
    );
    // Observer alle sektioner
    sections.forEach((section) => observeMenuSection.observe(section));
    // Disconnect observed ved unmount
    onBeforeUnmount(() => observeMenuSection?.disconnect());

});


</script>

<template>
    <div class="menuSections">
        <section v-for="category in categories" :key="category.id" :id="category.id" class="observeSection">
                <div class="categoryHeader">
                    <h2>{{ category.title }}</h2>
                    <p>{{ category.description }}</p>
                </div>

                <div class="takeAwayContainer">
                    <div class="takeAwayCard" v-for="item in category.items" :key="item.id">
                        <img :src="item.image" :alt="item.title" />

                        <div class="takeAwayCardInfo">
                            <div>
                                <h4>{{ item.title }}</h4>
                                <p>{{ item.description }}</p>
                                <h4>{{ item.price }},-</h4>
                            </div>

                            <p v-if="item.allergies?.length">
                                {{ item.allergies.join(', ') }}
                            </p>
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

.categoryHeader {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 2rem 0 1rem 0;
}

.takeAwayContainer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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

.takeAwayCardInfo>p {
    margin-top: auto;
}
</style>