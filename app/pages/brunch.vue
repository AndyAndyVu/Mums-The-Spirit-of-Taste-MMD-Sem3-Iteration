<template>
  <NavDesk />
  <main>
    <h1>Brunch</h1>
    <section class="catering-container">
      <div class="catering-brunch">
        <p>
          Hvem kan sige nej til god, nordisk gourmetmad taget med fra
          barndomskøkkenet og mors kyndige hænder? Ikke os! Vores brunch er
          bygget op af gode, lokale råvarer, og vores fooddesignere sætter en
          ære i at kreere den bedst mulige mad inspireret af den smukke, danske
          natur, der omgiver vores dejlige Aalborg.
        </p>
        <p>
          Sæt tempoet ned, tag en dyb indånding og lad os sørge for dig: Hvad
          end du er til hjemmelavet jordbærsyltetøj eller leverpostej,
          anstrenger vi os for at leve op til dine standarder. Med brunch-buffet
          skal du ikke vente på maden, men du behøver heller ikke skynde dig!
        </p>
        <p>
          Vi er stolte over at kunne præsentere et morgenbord, der ikke bare er
          nemt, flot og rustikt, men også støtter leverandører fra nærområdet og
          holder gamle traditioner i hævd.
        </p>
        <p>Der kan tilkøbes varm leverpostej til brunchen.</p>
        <p>Brunch skal bestilles senest dagen før afh. inden kl. 12:00</p>
      </div>
      <figure>
        <img src="../assets/img/brunch-MUMS.svg" alt="Lækker brunch fra MUMS" />
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

.catering-brunch {
  max-width: 75ch;
}

figure img {
  width: 100%;
  height: auto;
}
</style>
