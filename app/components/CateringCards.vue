<script setup></script>

<script setup></script>

<template>
  <section class="caCards">
    <NuxtLink to="/tapas" class="caCardLink">
      <article class="caCard">
        <img src="../assets/pictures/cateTapas.png" alt="Tapas menu" />
        <div class="caCardText">
          <h3>Tapas</h3>
          <p>
            Vi ønsker, med vores nordiske tapas koncept, at giver dig mulighed
            for at sammensætte din helt egen menu af fantastiske små retter.
          </p>
        </div>
      </article>
    </NuxtLink>

    <NuxtLink to="/selvskab" class="caCardLink">
      <article class="caCard">
        <img src="../assets/pictures/cateMad.png" alt="Mad ud af huset" />
        <div class="caCardText">
          <h3>Mad ud af huset</h3>
          <p>
            Holder I festen hjemme og vil du gerne slippe for at knokle i
            køkkenet? Så lad MUMS levere en kulinarisk selskabs buffet.
          </p>
        </div>
      </article>
    </NuxtLink>

    <NuxtLink to="/recepmenu" class="caCardLink">
      <article class="caCard">
        <img src="../assets/pictures/cateRecep.png" alt="Receptions-menu" />
        <div class="caCardText">
          <h3>Receptions-menu</h3>
          <p>
            Vores fantastiske menuer er skræddersyet til enhver fest og
            garanterer at tilfredsstille enhver smag.
          </p>
        </div>
      </article>
    </NuxtLink>

    <NuxtLink to="/modetallerken" class="caCardLink">
      <article class="caCard">
        <img src="../assets/pictures/cateMode.png" alt="Mødetallerken" />
        <div class="caCardText">
          <h3>Møde tallerken</h3>
          <p>
            En mødetallerken leveres anrettet på flot engangsservice lige til at
            servere.
          </p>
        </div>
      </article>
    </NuxtLink>

    <NuxtLink to="/julemenu" class="caCardLink">
      <article class="caCard">
        <img src="../assets/pictures/cateJul.png" alt="Julemenu" />
        <div class="caCardText">
          <h3>Jule-menu</h3>
          <p>
            Vores jule- og nytårsmenu er igen i år skabt med respekt for gode,
            lokale råvarer.
          </p>
        </div>
      </article>
    </NuxtLink>

    <NuxtLink to="/brunch" class="caCardLink">
      <article class="caCard">
        <img src="../assets/pictures/cateBrunch.png" alt="Brunch" />
        <div class="caCardText">
          <h3>Brunch</h3>
          <p>
            Vores brunch er bygget op af gode, lokale råvarer og smukke
            smagsoplevelser.
          </p>
        </div>
      </article>
    </NuxtLink>
  </section>
</template>

<style scoped>
.caCards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: var(--spacing-mdDesk);
  gap: 2rem;
}

.caCard {
  background-color: var(--lys-dyb-groend);
  width: 100%;
  margin-bottom: var(--spacing-SmlDesk);
  border-radius: 10px;
  box-shadow: 2px 3px 2px 0 rgba(0, 0, 0, 0.3);
}

.caCard img {
  width: 100%;
  height: auto;
}

.caCardText {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 var(--spacing-xlSmlDesk);
  color: var(--hvid-skrift);
}

.caCardText p {
  max-width: 30ch;
}

.caCardLink {
  text-decoration: none;
  color: inherit;
}

@media screen and (max-width: 900px) {
  .caCards {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}
</style>
