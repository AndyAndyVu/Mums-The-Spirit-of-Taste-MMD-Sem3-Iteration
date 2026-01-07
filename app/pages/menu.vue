<script setup>
import { takeawayMenu } from '../data/menuItems.js';

const activeCategory = ref(null);
function setActive(id) {
activeCategory.value = id;
}
</script>

<template>
  <NavDesk />
  <main>
    <section>
      <div>
        <h1>Takeaway Menu</h1>
        <p>Er du på udkig efter lækker brunch, nem aftensmad eller bare har lyst til at forkæle dig selv. Så har vores
          store udvalg helt sikkert noget der passer til dig.</p>
        <p>Udforsk vores burgere, tapas, sandwhiches, bowls og meget mere. Perfekt til når du vil have noget der både er
          mættende og smagsfuld.</p>
        <p>Menuen er skabt til dig, der vil tage maden med på farten eller nyde et godt måltid derhjemme uden besvær.
        </p>
        <Btn label="Bestil her" to="https://takeaway.mumsshop.dk" />
      </div>
      <img src="https://placehold.co/600x500?text=Food" alt="Hero billede af takeaway mad" />
    </section>
    <div class="menuContainer">
      <aside>
        <a v-for="category in takeawayMenu" :key="category.id" :href="`#${category.id}`" class="categoryLink"
          :class="{ active: activeCategory === category.id }" @click="setActive(category.id)">
          <img :src="category.icon" alt="" />{{ category.title }}
        </a>
      </aside>
      <section class="menuCardsSection">
        <div class="controlButtons">
          <div class="filterButtons">
            <button>
              <p>Mad Type</p><span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
            <button>
              <p>Allegener</p><span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
            <button>
              <p>Diæt</p><span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
          </div>
          <button class="sortingButton">
            <p>Sortering</p><span class="material-symbols-outlined">keyboard_arrow_down</span>
          </button>
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
