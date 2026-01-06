<template>
  <NavDesk class="nav-desktop" />
  <NavMobile class="nav-mobile" />
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
    <section class="price-grid">
      <article class="price-card">
        <h3>3 Retter</h3>
        <p>kr. 89,-</p>
      </article>

      <article class="price-card">
        <h3>4 Retter</h3>
        <p>kr. 115,-</p>
      </article>

      <article class="price-card">
        <h3>5 Retter</h3>
        <p>kr. 140,-</p>
      </article>
    </section>

    <section class="menu-grid">
      <article class="menu-card">
        <h3>Håndpillede rejer fra Grønland</h3>
        <p>
          Håndpillede rejer fra Grønland med dild mayo, citron støv og frisk
          dild i tærteform.
        </p>
        <p class="allergen">
          Indeholder følgende allergener: KREBSDYR, ÆG, SENNEP
        </p>
      </article>

      <article class="menu-card">
        <h3>Koldrøget laks</h3>
        <p>
          Lokalt koldrøget laks, råsyltet perleløg og dild mayo serveret i
          butterdejsform. Grand cru laks fra Polar Sea Food i Vodskov. Koldrøget
          over bøgeflis, hjemmesyltet perleløg og dild mayo.
        </p>
        <p class="allergen">
          Indeholder følgende allergener: GLUTEN, FISK, ÆG, SENNEP
        </p>
      </article>

      <article class="menu-card">
        <h3>Skinkeinderlår</h3>
        <p>
          Skinkeinderlår fra Krastrupsgård med hjemmelavet æggestand, mayo og
          frisk purløg, serveret på brød.
        </p>
        <p class="allergen">
          Indeholder følgende allergener: GLUTEN, MÆLK, ÆG, SENNEP
        </p>
      </article>

      <article class="menu-card">
        <h3>Rørt oksetatar af røget okseinderlår</h3>
        <p>
          Rørt oksetatar af røget okseinderlår fra Krastrupsgård og kapers, med
          bruschetta creme serveret i smørbagt tærteform.
        </p>
        <p class="allergen">
          Indeholder følgende allergener: GLUTEN, MÆLK, ÆG, SENNEP
        </p>
      </article>

      <article class="menu-card">
        <h3>Slider med Pulled Pork</h3>
        <p>
          Slider med hjemmelavet Pulled Pork BBQ sauce, sennepsmayo og
          hjemmesyltet agurk.
        </p>
        <p class="allergen">
          Indeholder følgende allergener: GLUTEN, ÆG, SENNEP
        </p>
      </article>

      <article class="menu-card">
        <h3>Slider med kyllingeinderfilet</h3>
        <p>
          Slider med grillet kyllingeinderfilet, syltet rød peber, spicy mayo og
          street food dressing.
        </p>
        <p class="allergen">
          Indeholder følgende allergener: GLUTEN, ÆG, SENNEP, SELLERI
        </p>
      </article>

      <article class="menu-card">
        <h3>Slider med Avocado</h3>
        <p>
          Slider med avocado, syltet peber, spicy mayo, salsa og smoky grill
          dressing.
        </p>
        <p class="allergen">Indeholder følgende allergener: GLUTEN, SENNEP</p>
      </article>

      <article class="menu-card">
        <h3>Ost på brød</h3>
        <p>Ost på brød med hjemmelavet æble-/fennikelmarmelade.</p>
        <p class="allergen">Indeholder følgende allergener: GLUTEN, MÆLK, ÆG</p>
      </article>

      <article class="menu-card">
        <h3>Brownie med hindbærcreme</h3>
        <p>Brownie med fløde hindbærcreme og et drys af frysetørret hindbær.</p>
        <p class="allergen">Indeholder følgende allergener: MÆLK, GLUTEN, ÆG</p>
      </article>
    </section>
    <Pattern />
    <section class="bestil-container">
      <div>
        <h2>Bestil Receptions-Menu</h2>
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

.catering-reception {
  max-width: 75ch;
}

figure img {
  width: 100%;
  height: auto;
}

.price-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.price-card {
  background-color: var(--hvid-100);
  padding: 2rem;
  text-align: center;
}

.menu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.menu-card {
  background-color: var(--dyb-groend);
  color: var(--hvid-skrift);
  padding: 1.5rem;
}
.allergen {
  margin-top: 3rem;
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
  footer {
    display: none;
  }
  .price-grid {
    grid-template-columns: 1fr;
  }

  .menu-grid {
    grid-template-columns: 1fr;
  }
}
</style>
