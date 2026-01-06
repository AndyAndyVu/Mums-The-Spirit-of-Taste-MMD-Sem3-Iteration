<script setup>

</script>

<template>
  <NavDesk />
  <main>
    <section>
      <div>
        <h1>Takeaway Menu</h1>
        <p>Er du på udkig efter lækker brunch, nem aftensmad eller bare har lyst til at forkæle dig selv. Så har vores
          store udvalg helt sikkert noget der passer til dig.</p>
        <p>Udforsk vores burgere, tapas, sandwhiches, bowls og meget mere. Perfekt til når du vil have noget der både er
          mættende og smagsfuld.</p>
        <p>Menuen er skabt til dig, der vil tage maden med på farten eller nyde et godt måltid derhjemme uden besvær.
        </p>
        <Btn label="Bestil her" to="https://takeaway.mumsshop.dk" />
      </div>
      <img src="https://placehold.co/600x500?text=Food" alt="Hero billede af takeaway mad" />
    </section>
    <aside>
      <a href="">Burger</a>
      <a href="">Tapas</a>
      <a href="">Sandwhich</a>
      <a href="">Brunch</a>
      <a href="">Nem Aftensmad</a>
      <a href="">Bowls</a>
      <a href="">Boa Buns & Sides</a>
      <a href="">Børne Menu</a>
      <a href="">Vegansk</a>
      <a href="">Møde Tallerken</a>
      <a href="">Dessert</a>
    </aside>
    <div>
      <div>
        <button>Mad Type</button>
        <button>Allegener</button>
        <button>Diæt</button>
      </div>
      <button>Sortering</button>
    </div>
    <MenuCards />
  </main>
  <FooterDesk />
</template>

<style scoped>
  section {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 2rem;
  }
 
</style>
