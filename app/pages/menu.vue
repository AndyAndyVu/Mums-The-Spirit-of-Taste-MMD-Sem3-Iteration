<script setup>
import { takeawayMenu } from '../data/menuItems.js';
import { allTakeAwayItems } from "../composable/takeAwayFlatMap.js";

const baseItems = ref(allTakeAwayItems);


// Variabel til aktiv kategori i menuen & funktion til at sætte aktiv kategori
const activeCategory = ref(null);
function setActive(id) {
    activeCategory.value = id;
}

// Variabel og funktion til at håndtere dropdown Filter/Sorterings knapper
const openControls = ref(null);
function toggleControls(name) {
    openControls.value = openControls.value === name ? null : name;
}

// filter & sorting - Initialize as empty arrays
const activeFoodTypes = ref([]);
const excludedAllergies = ref([]);
const activeDietTags = ref([]);
const sortedItems = ref([]);

const visibleItems = computed(() => {
    let items = baseItems.value;

    // 1) Food type filter
    if (activeFoodTypes.value.length > 0) {
        items = items.filter((i) => activeFoodTypes.value.includes(i.categoryId));
    }

    // 2) Exclude allergens
    if (excludedAllergies.value.length > 0) {
        items = items.filter((i) => {
            const allergies = i.allergies ?? [];
            return excludedAllergies.value.every((a) => !allergies.includes(a));
        });
    }

    // 3) Diet tags filter
    if (activeDietTags.value.length > 0) {
        items = items.filter((i) => {
            const dietTags = i.dietTags ?? [];
            return activeDietTags.value.every((tag) => dietTags.includes(tag));
        });
    }
    return items;
});

const visibleCategories = computed(() => {
    const grouped = {};

    visibleItems.value.forEach(item => {
        if (!grouped[item.categoryId]) {
            grouped[item.categoryId] = [];
        }
        grouped[item.categoryId].push(item);
    });

    return takeawayMenu
        .map(category => ({
            ...category,
            items: grouped[category.id] ?? []
        }))
        .filter(category => category.items.length > 0);
});

// Genbrugbar filter & sort funktionalitet
function toggleArray(arrayRef, value) {
    const currentArray = arrayRef.value || [];

    if (currentArray.includes(value)) {
        arrayRef.value = currentArray.filter((v) => v !== value);
    } else {
        arrayRef.value = [...currentArray, value];
    }

    console.log("Active Food Types:", activeFoodTypes.value);
    console.log("clicked:", value);
    console.log("unique ids:", [...new Set(baseItems.value.map(i => i.categoryId))]);
}

function toggleFoodType(id) {
    toggleArray(activeFoodTypes, id);
}

function toggleAllergy(a) {
    toggleArray(excludedAllergies, a);
}

function toggleDiet(tag) {
    toggleArray(activeDietTags, tag);
}

</script>

<template>
    <NavDesk />
    <main>
        <section>
            <div class="menuIntro">
                <h1>Takeaway Menu</h1>
                <p>Er du på udkig efter lækker brunch, nem aftensmad eller bare har lyst til at forkæle dig selv. Så har
                    vores
                    store udvalg helt sikkert noget der passer til dig.</p>
                <p>Udforsk vores burgere, tapas, sandwhiches, bowls og meget mere. Perfekt til når du vil have noget der
                    både er
                    mættende og smagsfuld.</p>
                <p>Menuen er skabt til dig, der vil tage maden med på farten eller nyde et godt måltid derhjemme uden
                    besvær.
                </p>
                <Btn class="menuButton" label="Bestil her" to="https://takeaway.mumsshop.dk" />
            </div>
            <img src="https://placehold.co/600x500?text=Food" alt="Hero billede af takeaway mad" />
        </section>
        <div class="menuContainer">
            <aside>
                <a v-for="category in visibleCategories" :key="category.id" :href="`#${category.id}`"
                    class="categoryLink" :class="{ active: activeCategory === category.id }">
                    <img :src="category.icon" alt="" />{{ category.title }}
                </a>
            </aside>
            <section class="menuCardsSection">
                <div class="controlButtons">
                    <div class="filterButtons">
                        <div class="madTypeButton">
                            <button @click="toggleControls('madType')">
                                <p>Mad Type</p><span class="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>
                            <div v-if="openControls === 'madType'" class="filterPanel">
                                <div class="foodTypeContainer">
                                    <button @click="toggleFoodType('burger')">
                                        Burger
                                    </button>
                                    <button @click="toggleFoodType('tapas')">
                                        Tapas
                                    </button>
                                    <button @click="toggleFoodType('sandwich')">
                                        Sandwich
                                    </button>
                                    <button @click="toggleFoodType('brunch')">
                                        Brunch
                                    </button>
                                    <button @click="toggleFoodType('nem-aftensmad')">
                                        Nem Aftensmad
                                    </button>
                                    <button @click="toggleFoodType('bowls')">
                                        Bowls
                                    </button>
                                    <button @click="toggleFoodType('bao-buns-sides')">
                                        Bao Buns & Sides
                                    </button>
                                    <button @click="toggleFoodType('boerne-menu')">
                                        Børne Menu
                                    </button>
                                    <button @click="toggleFoodType('vegansk')">
                                        Vegansk
                                    </button>
                                    <button @click="toggleFoodType('moede-tallerken')">
                                        Møde Tallerken
                                    </button>
                                    <button @click="toggleFoodType('dessert')">
                                        Dessert
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="allergenerButton">
                            <button @click="toggleControls('allergener')">
                                <p>Allegener</p><span class="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>
                            <div v-if="openControls === 'allergener'" class="filterPanel">
                                <div class="allergyContainer">
                                    <button @click="toggleAllergy('gluten')">
                                        Gluten
                                    </button>
                                    <button @click="toggleAllergy('mælk')">
                                        Laktose
                                    </button>
                                    <button @click="toggleAllergy('æg')">
                                        Æg
                                    </button>
                                    <button @click="toggleAllergy('sennep')">
                                        Sennep
                                    </button>
                                    <button @click="toggleAllergy('selleri')">
                                        Selleri
                                    </button>
                                    <button @click="toggleAllergy('nødder')">
                                        Nødder
                                    </button>
                                    <button @click="toggleAllergy('krebsdyr')">
                                        Krebsdyr
                                    </button>
                                    <button @click="toggleAllergy('soja')">
                                        Soja
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div class="dietButton">
                            <button @click="toggleControls('diet')">
                                <p>Diæt</p><span class="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>
                            <div v-if="openControls === 'diet'" class="filterPanel">
                                <div class="dietContainer">
                                    <button @click="toggleDiet('vegansk')">
                                        Vegansk
                                    </button>
                                    <button @click="toggleDiet('fisk')">
                                        Fisk
                                    </button>
                                    <button @click="toggleDiet('kød')">
                                        Kød
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sortingButton">
                        <button @click="toggleControls('sorting')">
                            <p>Sortering</p><span class="material-symbols-outlined">keyboard_arrow_down</span>
                        </button>
                        <div v-if="openControls === 'sorting'" class="filterPanel">
                            <div class="sortingContainer">
                                <button>
                                    Pris: Lav til Høj
                                </button>
                                <button>
                                    Pris: Høj til Lav
                                </button>
                                <button>
                                    A-Z
                                </button>
                                <button>
                                    Z-A
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuCards :categories="visibleCategories" @sectionVisible="setActive" />
            </section>
        </div>
    </main>
    <FooterDesk />
</template>

<style scoped>
section {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 2rem;
}

.menuIntro {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.menuIntro btn {
    width: fit-content
}

.menuButton {
    width: fit-content;
}

.menuContainer {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

aside {
    position: sticky;
    top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: max-content;
    height: fit-content;

    padding: 1rem 2rem;
    background-color: var(--blaa);
    border-radius: 6px;
}

aside a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: black;
    font-weight: bold;
    white-space: nowrap;
}

.madTypeButton,
.allergenerButton,
.dietButton,
.sortingButton {
    position: relative;
    list-style-type: none;

}

.filterPanel {
    position: absolute;
    top: anchor(bottom);
    left: anchor(left);

    padding: 1rem;
    background-color: var(--lys-blaa);
    border-radius: 6px;
    z-index: 10;
    white-space: nowrap;
    border: 1px solid black;
    margin-top: 0.5rem;
}
.foodTypeContainer,
.allergyContainer{
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 1rem;
}
.dietContainer{
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 1rem;
}


.menuCardsSection {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    margin-left: 1rem;
}

.controlButtons {
    display: flex;
    justify-content: space-between;
}

.filterButtons {
    display: flex;
    gap: 1rem;
}

button {
    display: flex;
    padding: 1rem;
    background-color: var(--lys-blaa);
    border-radius: 6px;
    cursor: pointer;
    border: none;
}


.categoryLink {
    position: relative;
}

.categoryLink::after {
    position: absolute;
    content: "";
    top: 120%;
    height: 2px;
    width: 100%;
    background: black;
    transform: scaleX(0);
    transition: transform 300ms ease;
}

.categoryLink.active::after {
    transform: scaleX(1);
}
</style>
