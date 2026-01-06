<template>
  <NavDesk class="nav-desktop" />
  <NavMobile class="nav-mobile" />
  <main>
    <section class="cateringIntro">
      <div class="cateringIntroText">
        <h1>Catering Menu</h1>
        <p>
          Vores catering er lavet fra bunden med kærlighed til smag, håndværk og
          gode råvarer.Til både hverdag og fest og lige nu også lækker
          julecatering.
        </p>

        <Btn label="Bestil Catering her" to="https://takeaway.mumsshop.dk/" />
      </div>
      <img
        src="../assets/pictures/cateringIntro.png"
        alt="billede af en af mums lækkre catering menuer "
      />
    </section>
    <CateringCards />
  </main>
  <FooterDesk class="desk" />
  <FooterMobile class="mobil" />
</template>

<style scoped>
.cateringIntro {
  display: flex;
  justify-content: space-between;
}

.cateringIntroText {
  max-width: 65ch;
}

.cateringIntro img {
  width: 550px;
}

@media screen and (max-width: 900px) {
  .cateringIntro {
    flex-direction: column;
  }

  .cateringIntro img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  .mobil {
    display: block;
  }

  .desk {
    display: none;
  }
}
</style>
