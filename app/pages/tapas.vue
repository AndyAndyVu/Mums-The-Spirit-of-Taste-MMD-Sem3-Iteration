<template>
  <NavDesk />
  <main>
    <h1>Tapas Menu</h1>
    <section class="catering-container">
      <div class="catering-tapas">
        <p>
          Vi ønsker, med vores nordiske tapas koncept, at give vores kunder
          mulighed for at sammensætte deres helt egen menu. Menuen åbner
          mulighed for et utal af kombinationer, om der skal serveres til
          hverdag, fest eller i gode venners lag.
        </p>
      </div>
      <figure>
        <img
          src="../assets/img/tapas-MUMS.svg"
          alt="lækker tapas menu - MUMS"
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

.catering-tapas {
  max-width: 75ch;
}

figure img {
  width: 100%;
  height: auto;
}
</style>
