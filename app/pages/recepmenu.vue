<template>
  <NavDesk />
  <main>
    <h1>Receptions Menu</h1>
    <section class="catering-container">
      <div class="catering-reception">
        <p>
          Lad os tage os af madlavningen, mens du fokuserer på at have det sjovt
          og nyde tiden sammen med dine gæster!
        </p>
        <p>
          Vores fantastiske menuer er skræddersyet til enhver fest og garanterer
          at tilfredsstille enhver smag og appetit. Så hvorfor bruge tid på at
          bekymre dig om maden, når du kan stole på os til at levere en
          mindeværdig madoplevelse, som vil imponere alle dine gæster? Kontakt
          os nu for at planlægge din drømmereception!
        </p>
      </div>
      <figure>
        <img src="../assets/img/recep-mums.png" alt="Receptionsmenu - MUMS" />
      </figure>
    </section>
    <Pattern />
  </main>
  <FooterDesk />
</template>

<style scoped>
.catering-container {
  display: flex;
}

.catering-reception {
  max-width: 75ch;
}

figure img {
  width: 100%;
  height: auto;
}
</style>
