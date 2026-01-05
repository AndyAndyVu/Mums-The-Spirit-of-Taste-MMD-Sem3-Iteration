<script setup>
import { ref, computed } from "vue";

// ref,  Vi skriver ref fordi værdi af billeder kan ændre sig "live" derfor skal vue reagere på det.
// Vi bruger computed for at undgå gentagelser i koden og fordi den automatisk genberegner værdien, når currentIndex ændrer sig.

// Array af billeder
const images = [
  new URL("../assets/img/Drinks-MUMS.png", import.meta.url).href,
  new URL("../assets/img/valentinesMUMS.svg", import.meta.url).href,
  new URL("../assets/img/Placeholder.jpg", import.meta.url).href,
  new URL("../assets/img/Placeholder.jpg", import.meta.url).href,
];

// Aktuel index af slideshow
const currentIndex = ref(0);

// Viser 2 billeder ad gangen basseret på currentIndex
const visBilleder = computed(() => {
  return images.slice(currentIndex.value, currentIndex.value + 2);
});

// slideshow frem
const nextSlide = () => {
  currentIndex.value =
    currentIndex.value + 2 >= images.length ? 0 : currentIndex.value + 2;
};

// slideshow tilbage
const prevSlide = () => {
  currentIndex.value =
    currentIndex.value - 2 < 0 ? images.length - 2 : currentIndex.value - 2;
};
</script>

<template>
  <NavDesk />
  <main>
    <section class="deli-box">
      <header class="deli-text">
        <h1>Delikatesse</h1>
        <p>
          Glæd familie, venner, medarebjdere og forretningsforbindelser med en
          gave der smager af MUMS.
        </p>
        <p>
          Vi har udvalgte vine, oste, chokolade og andre lækkerier. Så kom ned i
          butikken og gå på opdagelse, lad dig inspirere og få personlig
          vejledning.
        </p>
        <p>
          Hos os er gavepakker en oplevelse, sammensat med omhu, kvalitet og
          kærlighed. Vi har samlet de bedste danske og udenlandske producenter
          og er glade for også at kunne præsentere flere hjemmelavede produkter.
          Vi har sammensat et udvalg af gaver som alle pakkes eksklusivt og flot
          ind. Ønsker du selv at samemsætte din gave kan det også lade sig
          gøres.
        </p>
      </header>
      <figure>
        <img
          src="../assets/img/Delikatesse.jpg"
          alt="Salg af varer i MUMS butikken"
        />
      </figure>
    </section>
    <section>
      <div class="slider">
        <button class="arrow left" @click="prevSlide">
          <img src="../assets/img/pilV.svg" alt="Forrige billeder" />
        </button>

        <div class="slides">
          <img
            v-for="(image, index) in visBilleder"
            :key="index"
            :src="image"
            alt="Delikatesse produkt"
          />
        </div>

        <button class="arrow right" @click="nextSlide">
          <img src="../assets/img/pilH.svg" alt="Næste billeder" />
        </button>
      </div>
    </section>
    <Pattern />
    <section class="deli-box">
      <article class="deli-text">
        <h2>Gave kurve</h2>
        <p>
          Forkæl dig selv eller en, du holder af, med en af Mums' smukke
          gavekurve. De er fyldt med alt det bedste til en perfekt
          smagsoplevelse små lækkerier, der varmer hjertet og spreder glæde.
        </p>
        <p>
          Vi har samlet de bedste danske og udenlandske producenter og er glade
          for også at kunne præsentere flere hjemmelavede produkter. Kurven ers
          ammensat et udvalg af gaver som alle pakkes eksklusivt og flot ind.
        </p>
        <Btn class="btn" label="Bestil dem her" to="#" />
      </article>
      <figure>
        <img src="../assets/img/gave-kurv.jpg" alt="gavekurv fra MUMS" />
      </figure>
    </section>
    <section class="deli-box tapas">
      <article class="deli-text tapas tapas-text">
        <h2>Tapas</h2>
        <p>
          Vi ønsker, med vores nordiske tapas koncept, at give vores kunder
          mulighed for at sammensætte deres helt egen menu. Menuen åbner
          mulighed for et utal af kombinationer, om der skal serveres til
          hverdag, fest eller i gode venners lag.
        </p>
        <Btn class="btn" label="Tapas Menu" to="menu" />
      </article>
    </section>
  </main>
  <FooterDesk />
</template>

<style scoped>
.deli-box {
  display: flex;
  justify-content: space-between;
  margin: 2rem;
}

.deli-box img {
  width: 100%;
  height: auto;
}

.deli-text {
  max-width: 85ch;
}

figure {
  margin: 0;
}
figure img {
  width: 100%;
  height: 100%;
}
.tapas {
  background-color: var(--lys-blaa);
  border-radius: 10px;
}

.tapas-text {
  padding-top: 3rem;
  padding-left: 3rem;
}

.tapas img {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.btn {
  margin-top: 1rem;
}

.slider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
}

.slides {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
}

.slides img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.arrow {
  background: none;
  border: none;
  cursor: pointer;
}

.arrow img {
  width: 5rem;
}
</style>
