<script setup>
  import '../assets/css/style.css'
</script>
<template>
  <ForsideTest />
  <main>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/kSO3dGm5nEM?si=TUQwZ6H5tXqhrsHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <section class="forsideIntro">
      <article class="forsideIntroText">
      <h1>MUMS - The spirit of taste</h1>
      <p>Velkommen til MUMS i Aalborg, et sted, hvor vi har æren af at præsentere takeaway i Aalborg med en unik smagsoplevelse og et glimt af gourmet mad i Aalborg.</p>
      <p>I to årtier har MUMS været et symbol på kvalitet, passion og respekt for smag. Vi sætter en ære i at bruge lokale råvarer, som vi omhyggeligt udvælger fra de bedste producenter i Nordjylland. Vi koger, sylter, braiserer og steger med kærlighed og giver vores retter et unikt MUMS-twist. Vi er stolte af at tilbyde mad ud af huset af høj kvalitet, hvor du kan opleve en fuldendt kombination af det visuelle, smagen og duften, der alle smelter sammen til "The spirit of taste."</p></article>
      <article class="aabningsTider">
        <h4>Åbningstider</h4>
        <div class="tider">
        <ul>
          <li>Mandag</li>
          <li>Tirsdag</li>
          <li>Onsdag</li>
          <li>Torsdag</li>
          <li>Fredag</li>
          <li>Lørdag</li>
          <li>Søndag</li>
        </ul>
        <ul>
          <li>10:00 - 18:00</li>
          <li>10:00 - 18:00</li>
          <li>10:00 - 18:00</li>
          <li>10:00 - 18:00</li>
          <li>10:00 - 18:00</li>
          <li>09:30 - 13:00</li>
          <li>Lukket</li>
        </ul></div>
      </article> 
    </section>
      <img src="../assets/pictures/patterenFirkant.svg" alt="ny section" class="pynt">
    <section class="maanedensRetForside">
      <div class="maanedensRetText">
      <h2 class="grontext">Månedensret</h2>
      <h2>Limited Edition! - JULE FLÆSKESTEGSBURGER</h2>
      <p><b>Vi tyvstarter allerede J-dag den 3. november med den store J-Burger-dag kl. 10:00 hos MUMS!</b></p>
      <p>Oplev vores jule Flæskestegsburger, lavet med saftig flæskesteg af dansk gris. I år har vi svøbt Julegrisen ind i tørsaltet bacon, fra Bødkeren i Nørresundby, toppet med flæskesvær fra Krastrupsøgaard.</p>
      <p>Med sprøde flæskesteg, hjemmelavet rødkål og agurkesalat – alt sammen pakket ind i en blød og luftig potato bun fra vores lokale bager her i Aalborg. En bolle smurt med vores hjemmelavet og cremet hvidløgs-mayo, og som prikken over i’et får du en spand legendarisk MUMS-sovs, til ære for julen, med oveni købet.</p>
      <p>Kan købes fra 3. november kl. 10:00 til 30. december kl. 18:00.</p>
      <p><b>VÆLG EN MENU</b></p>
      <p>Normal pris: 1 Burger og en spand sovs, 1 Pommes frites og 2 Dips kr. 154,- SPAR KR. 25,-</p>
      <p><b>KUN kr. 129,-</b></p>
      <button>Bestil Her</button>
      </div>
      <div class="maanedensRetBillede">
    <img src="../assets/pictures/nyhed.svg" alt="Nyhed" class="nyhed">
    <img src="../assets/pictures/Julebuger.png" alt="Billede af mums flæskestegsburger">
  </div>
    </section>
  </main>
</template>

<style scoped>
  iframe {
    width: 100%;
    height: 450px;
  }

  .forsideIntro{
    display: flex;
    justify-content: space-between;
    margin: 2rem;
  }

  .forsideIntroText{
    max-width: 80ch;
  }

  .aabningsTider{
    background-color: var(--blaa);
    display: flex;
    padding: 2rem;
    flex-direction: column;
    border-radius: 4px;
  }

  .tider{
  display: flex;
  justify-content: center;
  }

  .tider ul{
    list-style: none;
    padding: 1rem;
  }

  .pynt{
    width: 100%;
  }

  .maanedensRetForside{
    display: flex;
    justify-content: space-between;
  }

  .maanedensRetText{
    max-width: 75ch;
  }

  .maanedensRetBillede{
    position: relative;
    padding: var(--spacing-mdDesk);
  }

  .nyhed{
    position: absolute;
    left: 0px;
    top: 1rem;
  }

</style>
