<script setup>
import { ref, computed } from "vue";

// ref,  Vi skriver ref fordi værdi af billeder kan ændre sig "live" derfor skal vue reagere på det.
// Vi bruger computed for at undgå gentagelser i koden og fordi den automatisk genberegner værdien, når currentIndex ændrer sig.

// Array af billeder
const images = [
  new URL("../assets/img/Drinks-MUMS.png", import.meta.url).href,
  new URL("../assets/img/valentinesMUMS.svg", import.meta.url).href,
  new URL("../assets/img/Delikatesse.jpg", import.meta.url).href,
  new URL("../assets/img/valentinesMUMS.svg", import.meta.url).href,
];

// Aktuel index af slideshow
const currentIndex = ref(0);

// Viser 2 billeder ad gangen basseret på currentIndex
const visBilleder = computed(() => {
  return images.slice(currentIndex.value, currentIndex.value + 2);
});

// slideshow frem +2 ad gangen
const nextSlide = () => {
  currentIndex.value =
    currentIndex.value + 2 >= images.length ? 0 : currentIndex.value + 2;
};

// slideshow tilbage +2 tilbage
const prevSlide = () => {
  currentIndex.value =
    currentIndex.value - 2 < 0 ? images.length - 2 : currentIndex.value - 2;
};

useHead({
  title: "MUMS - Delikatessebutik i Aalborg",
  meta: [
    {
      name: "description",
      content:
        "MUMS delikatessebutik i Aalborg tilbyder udvalgte specialiteter, gourmetprodukter og kvalitetsfødevarer med fokus på smag og håndværk.",
    },
  ],
});
``;
</script>

<template>
  <NavDesk class="nav-desktop" />
  <NavMobile class="nav-mobile" />
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
          width="800"
          height="533"
          fetchpriority="high"
        />
      </figure>
    </section>
    <section>
      <!-- Eventlistener der lytter til når der bliver clicked skal den gå tilbage funktionen vi lavede tidligere samme med frem. -->
      <div class="slider">
        <button class="arrow left" @click="prevSlide">
          <img
            src="../assets/img/pilV.svg"
            alt="Forrige billeder"
            loading="lazy"
            decoding="async"
          />
        </button>

        <div class="slides">
          <img
            v-for="(image, index) in visBilleder"
            :key="index"
            :src="image"
            alt="Delikatesse produkt"
            loading="lazy"
            decoding="async"
          />
        </div>

        <button class="arrow right" @click="nextSlide">
          <img
            src="../assets/img/pilH.svg"
            alt="Næste billeder"
            loading="lazy"
            decoding="async"
          />
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
        <img
          src="../assets/img/gave-kurv.jpg"
          alt="Gavekurv fra MUMS"
          loading="lazy"
          width="800"
          height="533"
        />
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
        <Btn class="btn" label="Tapas Menu" to="tapas" />
      </article>
      <figure>
        <img
          src="../assets/img/tapas.jpg"
          alt="Nordisk tapas anretning fra MUMS"
        />
      </figure>
    </section>
  </main>
  <FooterDesk class="desk" />
  <FooterMobile class="mobil" />
</template>

<style scoped>
.deli-box {
  display: flex;
  justify-content: space-between;
  margin: 2rem;
}

.deli-box img {
  width: 100%;
  height: 100%;
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

@media (max-width: 900px) {
  .mobil {
    display: block;
  }

  .desk {
    display: none;
  }

  .deli-box {
    flex-direction: column;
    gap: 1.5rem;
  }

  .slides {
    grid-template-columns: 1fr;
  }

  .tapas {
    border-radius: none;
  }
}
</style>
