<template>
  <NavDesk class="nav-desktop" />
  <NavMobile class="nav-mobile" />
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
          servere, der medfølger friskbagt brød og Unika smør - du skal kun
          supplere med service og drikkevarer, så er frokosten klar.
        </p>
        <p>Mødetallerken skal bestilles dagen før, inden kl. 17:30</p>
      </div>
      <figure>
        <img
          src="../assets/img/tallerkener-MUMS.svg"
          alt="Lækker tallerkner 2025 - MUMS"
        />
      </figure>
    </section>
    <Pattern />
    <section class="menu-wrapper">
      <article class="menu-box">
        <h2>I MØDETALLERKEN</h2>

        <ul>
          <li>MUMS porre/løgtærte pyntet med mayo og salat</li>
          <li>
            Røget okseinderlår, langtidsstegt fra Krastrupsgaard med bruschetta
            mayo og grillet oliven
          </li>
          <li>
            Slider med grillet kyllingeinderfilet, spicy mayo, syltet rød peber
            og street food dressing
          </li>
          <li>
            Røget skinke fra Krastrupsgaard med hjemmelavet æggestand, mayo,
            soltørret tomat og grønt
          </li>
          <li>Filet Royal af tender pork med trøffelmayo og syltet løg</li>
          <li>Dessertkage med hvid og mørk chokolademousse</li>
          <li>Brød og Unika smør</li>
          <li>3 valgfri tapas</li>
        </ul>

        <h3>Pris pr. stk.</h3>
        <p class="price">FRA kr. 199,-</p>

        <p class="allergy">
          Indeholder følgende allergener:<br />
          GLUTEN, MÆLK, ÆG, SENNEP, SELLERI
        </p>
      </article>
    </section>
    <Pattern />
    <section class="bestil-container">
      <div>
        <h2>Bestil Mødetallerken</h2>
        <p>Klar til lækker mad og hyggligt selvskab</p>
        <Btn label="Bestil her" to="#" />
      </div>
    </section>
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

.menu-wrapper {
  display: flex;
  justify-content: center;
}

.menu-box {
  background-color: var(--hvid-100);
  padding: 2.5rem 2rem;
  text-align: center;
  max-width: 420px;
  width: 100%;
}

.menu-box h2 {
  margin-bottom: 1.5rem;
}

.menu-box ul {
  list-style: disc;
  padding-left: 1.2rem;
  text-align: left;
  margin-bottom: 2rem;
}

.menu-box li {
  margin-bottom: 0.75rem;
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
