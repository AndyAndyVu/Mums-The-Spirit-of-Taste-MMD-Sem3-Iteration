<script setup>
import { takeawayMenu } from '../data/menuItems.js';

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
                <a v-for="category in takeawayMenu" :key="category.id" :href="`#${category.id}`" class="categoryLink"
                    :class="{ active: activeCategory === category.id }">
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
                                <ul>
                                    <a href="">
                                        <li>Burger</li>
                                    </a>
                                    <a href="">
                                        <li>Tapas</li>
                                    </a>
                                    <a href="">
                                        <li>Sandwich</li>
                                    </a>
                                    <a href="">
                                        <li>Brunch</li>
                                    </a>
                                    <a href="">
                                        <li>Nem Aftensmad</li>
                                    </a>
                                    <a href="">
                                        <li>Bowls</li>
                                    </a>
                                    <a href="">
                                        <li>Bao Buns & Sides</li>
                                    </a>
                                    <a href="">
                                        <li>Børne Menu</li>
                                    </a>
                                    <a href="">
                                        <li>Vegansk</li>
                                    </a>
                                    <a href="">
                                        <li>Møde Tallerken</li>
                                    </a>
                                    <a href="">
                                        <li>Dessert</li>
                                    </a>
                                </ul>
                            </div>
                        </div>

                        <div class="allergenerButton">
                            <button @click="toggleControls('allergener')">
                                <p>Allegener</p><span class="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>
                            <div v-if="openControls === 'allergener'" class="filterPanel">
                                <ul>
                                    <a href="">
                                        <li>Gluten</li>
                                    </a>
                                    <a href="">
                                        <li>Laktose</li>
                                    </a>
                                    <a href="">
                                        <li>Æg</li>
                                    </a>
                                    <a href="">
                                        <li>Sennep</li>
                                    </a>
                                    <a href="">
                                        <li>Selleri</li>
                                    </a>
                                    <a href="">
                                        <li>Nødder</li>
                                    </a>
                                    <a href="">
                                        <li>Krebsdyr</li>
                                    </a>
                                    <a href="">
                                        <li>Soja</li>
                                    </a>
                                </ul>
                            </div>
                        </div>

                        <div class="dietButton">
                            <button @click="toggleControls('diet')">
                                <p>Diæt</p><span class="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>
                            <div v-if="openControls === 'diet'" class="filterPanel">
                                <ul>
                                    <a href="">
                                        <li>Vegansk</li>
                                    </a>
                                    <a href="">
                                        <li>Fisk</li>
                                    </a>
                                    <a href="">
                                        <li>Kød</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="sortingButton">
                        <button @click="toggleControls('sorting')">
                            <p>Sortering</p><span class="material-symbols-outlined">keyboard_arrow_down</span>
                        </button>
                        <div v-if="openControls === 'sorting'" class="filterPanel">
                            <ul>
                                <a href="">
                                    <li>Pris: Lav til Høj</li>
                                </a>
                                <a href="">
                                    <li>Pris: Høj til Lav</li>
                                </a>
                                <a href="">
                                    <li>A-Z</li>
                                </a>
                                <a href="">
                                    <li>Z-A</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <MenuCards @sectionVisible="setActive" />
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

    ul {
        display: grid;
        gap: 1rem;
        list-style-type: none;

        a {
            text-decoration: none;
            color: black;
        }

        a:hover {
            text-decoration: underline;
        }
    }
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

.filterButtons ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
