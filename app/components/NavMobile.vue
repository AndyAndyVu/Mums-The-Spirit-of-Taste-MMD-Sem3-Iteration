<script setup>
import { ref } from "vue";

const isOpen = ref(false);

// isOpen er en reaktiv variabel (ref), der styrer menuens tilstand.
// Den starter som false, hvilket betyder at menuen er lukket.

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Erklærer en funktion der hedder toggleMenu. Den skal kunne skifte mellem true og false altså lukke og åbne.

const closeMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <nav class="nav-mobile">
    <div class="nav-mobile-bar">
      <NuxtLink to="/">
        <img src="../assets/img/Mums-logo.svg" alt="MUMS logo" />
      </NuxtLink>
      <button
        class="burger-btn"
        @click="toggleMenu"
        aria-label="Åbn menu"
        :aria-expanded="isOpen"
      >
        <!-- aria-expanded angiver menuens tilstand for hjælpemidler og opdateres dynamisk via komponentens state. (godt til skærmlæsere)-->
        <span v-if="!isOpen">☰</span>
        <span v-else>X</span>
      </button>
    </div>

    <!-- bruger overlay til gøre baggrunden slørret når der klikkes -->
    <div class="overlay" v-show="isOpen" @click="closeMenu"></div>

    <aside class="mobile-drawer" :class="{ open: isOpen }">
      <ul>
        <li><NuxtLink to="/" @click="closeMenu">Forside</NuxtLink></li>
        <li><NuxtLink to="/menu" @click="closeMenu">Menu</NuxtLink></li>
        <li><NuxtLink to="/takeaway" @click="closeMenu">Takeaway</NuxtLink></li>
        <li><NuxtLink to="/catering" @click="closeMenu">Catering</NuxtLink></li>
        <li><NuxtLink to="/kontakt" @click="closeMenu">Kontakt</NuxtLink></li>
      </ul>
    </aside>
  </nav>
</template>

<style scoped>
/* Skjult på desktop */
.nav-mobile {
  display: none;
}

/* Mobil */
@media (max-width: 900px) {
  .nav-mobile {
    display: block;
  }

  .nav-mobile-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--moerke-dyb-groend);
    border-bottom: 1px solid white;
    position: relative;
    z-index: 20;
  }

  .burger-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--hvid-skrift);
  }

  .burger-btn span {
    font-size: 4rem;
  }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 10;
  }

  .mobile-drawer {
    position: fixed;
    right: 0;
    width: 90%;
    height: 100vh;
    background: var(--moerke-dyb-groend);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 999;
    padding: 2rem 1.5rem;
  }

  .mobile-drawer.open {
    transform: translateX(0);
  }

  .mobile-drawer ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mobile-drawer li {
    margin-bottom: 1.5rem;
  }

  .mobile-drawer a {
    text-decoration: none;
    font-size: 2rem;
    color: var(--hvid-skrift);
  }
}
</style>
