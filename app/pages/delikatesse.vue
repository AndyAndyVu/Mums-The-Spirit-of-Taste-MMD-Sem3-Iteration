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
    <section class="slide-show">Mangler slideshow..</section>
    <figure class="pattern">
      <img src="../assets/img/pattern.jpg" alt="" />
    </figure>
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
      <figure>
        <img
          src="../assets/img/tapas.jpg"
          alt="Nordisk tapas anretning fra MUMS"
        />
      </figure>
    </section>
  </main>
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

.pattern {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
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
  margin-top: 2rem;
}
.deli-box figure {
  margin: 0;
}
.deli-box figure img {
  width: 100%;
  height: 100%;
}
</style>
