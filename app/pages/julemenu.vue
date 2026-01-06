<template>
  <NavDesk class="nav-desktop" />
  <NavMobile class="nav-mobile" />
  <main>
    <h1>Julemenu 2025</h1>
    <section class="catering-container">
      <div class="catering-julemenu">
        <p>
          Glæd dig til at smage på vores menu med hjemmelavede retter og lokale
          produkter. Vores jule og nytårsmenu er igen i år skabt med respekt for
          gode, lokale råvarer leveret af nogle af de bedste producenter i
          Nordjylland og resten af Danmark.
        </p>
        <p>
          Vi er dybt taknemmelige for den støtte, I som kunder har vist os
          gennem årene. I år fejrer vi 10-års jubilæumher på Gugvej, og MUMS har
          været en del af lokalsamfundet siden 2007, hvor vi åbnede butikken.
        </p>
        <p>
          Igen i år er vi stolte af at have vundet titlen som "Byens Bedste Take
          Away" ved Aalborg Awards 2025. En stor tak til jer, der har stemt på
          os! Vores motto er: "Vi elsker lokale råvarer", og vores mission er at
          skabe "The Spirit of Taste" - og dermed bidrage til at give jer en
          uforglemmelig smagsoplevelse.
        </p>
        <p>
          Med vores jule- og nytårsmenu har vi gjort os umage for at levere
          smagfulde, lokale oplevelser – fra MUMS, din lokale gourmetbutik.
        </p>
        <p>Velbekomme og Glædelig Jul MUMS teamet</p>
      </div>
      <figure>
        <img
          src="../assets/img/julemenu-MUMS.svg"
          alt="Lækker julemenu 2025 - MUMS"
        />
      </figure>
    </section>
    <Pattern />
    <section class="tapas-wrapper">
      <!-- 6 RETTERS -->
      <article class="tapas-card">
        <h3>Juletapas</h3>
        <h3>6 retters menu</h3>

        <p>Menuen indeholder følgende:</p>

        <ul class="menu-items">
          <li>
            <p>Håndpillede rejer fra Grønland</p>
            <p>
              på madpandekage med urtemayo, revet citronskal og friske urter
            </p>
          </li>

          <li>
            <p>Hjemmelavet kyllingesalat</p>
            <p>grønne asparges og bacon</p>
          </li>

          <li>
            <p>Ålerøget juleskinke fra Bødkeren i Nørresundby</p>
            <p>med glaseret gulerødder fra Tranum Naturbrug</p>
          </li>

          <li>
            <p>Frikadeller fra Slagteren i Nr. Onsild</p>
            <p>med hjemmelavet rødkål (Kan varmes)</p>
          </li>

          <li>
            <p>Slider med dansk flæskesteg</p>
            <p>
              hjemmelavet rødkål, syltet agurker og flæskesvær fra Krustrupsgård
            </p>
          </li>

          <li>
            <p>Ris a la mande</p>
            <p>med hjemmelavet kirsebærsauce</p>
          </li>
        </ul>

        <h4>Pris pr. kuvert</h4>
        <h4>kr. 189,-</h4>

        <p>
          Friskbagt tapasbrød medfølger Rugbrød og Unika smør kan tilkøbes for
          kr. 20,-
        </p>
      </article>

      <article class="tapas-card">
        <h3>Juletapas</h3>
        <h3>10 retters menu</h3>

        <ul class="menu-items">
          <li>
            <p>Håndpillede rejer fra Grønland</p>
            <p>
              på madpandekage med urtemayo, revet citronskal og friske urter
            </p>
          </li>

          <li>
            <p>Paneret Dansk Rødspættefilet</p>
            <p>med hjemmerørt remoulade og frisk citron (Kan varmes)</p>
          </li>

          <li>
            <p>Hjemmelavet kyllingesalat</p>
            <p>grønne asparges og bacon</p>
          </li>

          <li>
            <p>Røget andebryst fra Bødkeren i Nørresundby</p>
            <p>med slaw af danske æbler, radise, ribs og peberrod</p>
          </li>

          <li>
            <p>Julekalvesylte af Dansk Gastro Kalv</p>
            <p>bønnesalat og sennepscreme</p>
          </li>

          <li>
            <p>Ålerøget juleskinke</p>
            <p>med glaseret gulerødder fra Tranum Naturbrug</p>
          </li>

          <li>
            <p>Frikadeller fra Slagteren i Nr. Onsild</p>
            <p>med hjemmelavet rødkål (Kan varmes)</p>
          </li>

          <li>
            <p>Slider med dansk flæskesteg</p>
            <p>
              hjemmelavet rødkål, syltet agurker og flæskesvær fra Krustrupsgård
            </p>
          </li>

          <li>
            <p>Osteanretning</p>
            <p>3 slags danske oste og MUMS hjemmelavet julemarmelade</p>
          </li>

          <li>
            <p>Ris a la mande</p>
            <p>med hjemmelavet kirsebærsauce</p>
          </li>
        </ul>

        <h4>Pris pr. kuvert</h4>
        <h4>kr. 289,-</h4>

        <p>
          Friskbagt tapasbrød medfølger Rugbrød og Unika smør kan tilkøbes for
          kr. 20,-
        </p>
      </article>
    </section>
    <Pattern />
    <section class="bestil-container">
      <div>
        <h2>Bestil Julemenu 2025</h2>
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

.catering-julemenu {
  max-width: 75ch;
}

figure img {
  width: 100%;
  height: auto;
}

.tapas-wrapper {
  display: flex;
  justify-content: center;
  gap: 4rem;
}

.tapas-card {
  background-color: #eef3f4;
  padding: 2rem 2rem;
  text-align: center;
  width: 100%;
}

.menu-items {
  list-style: none;
  padding: 0;
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

  .tapas-wrapper {
    flex-direction: column;
    gap: 2rem;
  }

  .tapas-card {
    width: 100%;
  }

  footer {
    display: none;
  }
}
</style>
