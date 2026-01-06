<template>
  <NavDesk class="nav-desktop" />
  <NavMobile class="nav-mobile" />

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
    <section class="menu-wrapper">
      <article class="menu-box">
        <h1>Brunch Menu</h1>

        <ul>
          <li>Yoghurt med hjemmelavet sylt og müsli</li>
          <li>Røget skinke med pesto</li>
          <li>Tørsaltet bacon</li>
          <li>Scrambled æg</li>
          <li>Brunch pølser</li>
          <li>Mini croissant med hjemmelavet kyllingesalat</li>
          <li>2 slags ost med hjemmelavet sylt</li>
          <li>Brunch pandekage med sirup</li>
          <li>Dertil friskbagt brød og Unika smør</li>
        </ul>

        <h2>Pris pr. stk.</h2>
        <p>FRA kr. 139,-</p>

        <p>
          Indeholder følgende allergener:<br />
          GLUTEN, MÆLK, NØDDER, ÆG, SENNEP
        </p>
      </article>
    </section>
    <Pattern />
    <section class="bestil-container">
      <div>
        <h2>Bestil Selskabsmenu - Buffet</h2>
        <p>Klar til lækker mad og hyggligt selvskab</p>
        <Btn label="Bestil her" to="https://takeaway.mumsshop.dk/" />
      </div>
    </section>
  </main>
  <FooterDesk class="desk" />
  <FooterMobile class="mobil" />
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

.menu-wrapper {
  display: flex;
  justify-content: center;
}

.menu-box {
  background-color: var(--hvid-100);
  padding: 3rem 2rem;
  max-width: 420px;
  width: 100%;
}

.bestil-container {
  display: flex;
  flex-direction: column;
  text-align: center;
}

@media (max-width: 900px) {
  .catering-container {
    flex-direction: column;
  }
}
</style>
