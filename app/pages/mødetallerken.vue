<template>
  <NavDesk />
  <main>
    <h1>Mødetallerken</h1>
    <section class="catering-container">
      <div class="catering-tallerken">
        <p>
          Med en MØDETALLERKEN fra MUMS får du mulighed for at sætte ekstra smag
          på jeres møde.
        </p>
        <p>
          En mødetallerken leveres anrettet på flot engangsservice lige til at
          servere, der medfølger friskbagt brød og Unika smør – du skal kun
          supplere med service og drikkevarer, så er frokosten klar.
        </p>
        <p>Mødetallerken skal bestilles dagen før, inden kl. 17:30</p>
      </div>
      <figure>
        <img
          src="../assets/img/tallerkener- MUMS.svg"
          alt="Lækker julemenu 2025 - MUMS"
        />
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

.catering-tallerken {
  max-width: 75ch;
}

figure img {
  width: 100%;
  height: auto;
}
</style>
