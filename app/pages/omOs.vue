<script setup>
  import FooterDesk from '~/components/FooterDesk.vue';
import '../assets/css/style.css'
</script>

<template>
<main>
<section class="OmOsHistorie OmOsIntro">
<div class="OmOsHistorieTekst OmOsTekst">
<h1>Om os</h1>
<p>August måned 2007 åbnede vi dørene for første gang til MUMS The Spirit of taste – en livsdrøm var skabt.</p><p>
MUMS Gourmet butik har mange år på bagen som etableret specialvarebutik i Aalborg, det har altid været vores drøm at udvide med en Deli afdeling med kvalitets take away. Derfor valgte vi i 2015 at flytte i nye lokaler på Gugvej for at give plads til at lave take away.
</p><p>
Vores kærlighed til god mad, god smag, originalitet og gamle traditioner fra vores barndomshjem og ikke mindst vores mormors tid, tilberedt med et morderne twist, er essensen.
Det skal være en fuldendt oplevelse at handle i MUMS, det er vores ønske at det visuelle, smagen og duften smelter sammen til The spirit of taste
Vores ambition er at levere en smagsoplevelse udover det sædvanlige, med respekt for gode og lokale råvarer. Vi og vores team af food designere sætter en ære i at lave velsmagende mad.
</p><p>
Vi henter vores inspiration i den storslåede natur omkring Aalborg og vil gerne anvende så mange af dens råvarer som muligt i vores hjemmelavede produkter og take away mad.</p></div>
<img src="../assets/pictures/omOsHistorie.png" alt="billede af mums ejer"/>
</section>
<section class="OmOsLokalt OmOsIntro">
    <img src="../assets/pictures/omOsShop.png" alt="billede ud foran mums Butik"/>
    <div class="OmOsLokaltTekst OmOsTekst">
        <h2>Lokale producenter</h2>
        <p>Vi arbejder med de bedste lokale producenter og sætter en ære i dette samarbejde. Det er for os vigtigt, at kunne tilbyde et sortiment hvor dygtige producenters højkvalitetsprodukter indgår. Det glæder os, at flere finder det interessant at arbejde målrettet med at skabe unikke fødevarer produkter i Nordjylland. Vi har et klima, der byder de optimale betingelser for at skabe gode fødevarer, hvor smagen er i højsæde. Mange af produkterne er efter vores mening uden tvivl nogle af verdens bedste, hvilket vi sætter pris på og hylder i vores retter.</p>
        <p>Vores team af medarbejdere arbejder hver dag på at sikre en høj kvalitet, passion for den gode smag og yde en høj service med udgangspunkt i vores vision.</p>
        <p>Hos MUMS lader vi os inspirere af naturen omkring Aalborg, og vi arbejder med gode, gerne lokale råvarer, hvor smag, duft og det visuelle går op i en højere enhed.</p>
    </div>
</section>
<img src="../assets/pictures/patterenKlover.svg" class="pynt">
<section class="omOsInformation">
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
      <article>
        <div class="OmOspriser">
            <h3>Vinder af</h3>
            <div class="priser">
                <img src="../assets/pictures/vinder2023.png" alt="Vinder af danmmarks bedste buger 2023">
                <img src="../assets/pictures/vinderBuger2024.png" alt="Vinder af byens bedste buger 2024">
                <img src="../assets/pictures/vinder2024.png" alt="Vinder af danmmarks bedste buger 2024">
            </div>
        </div>
        <div class="kontakt">
    <div class="nummer">
    <img src="../assets/pictures/Phoneicon.svg" alt="Telefon nummer">
    <h4>98 12 50 17</h4></div>
    <div class="email">
    <img src="../assets/pictures/Mailicon.svg" alt="Email">
    <h4>mums@mumsshop.dk</h4></div>
  </div>
      </article>
</section>
<section>
    <h3>Adresse</h3>
    <div class="mumsAdresse">
        <img src="../assets/pictures/location.svg" alt="location"/>
        <p>Gugvej 184, 9210 Aalborg SØ</p>
    </div>
    <p>!Kort skal indsættes!</p>
</section>
<section class="omOsSponsor">
    <h3>Vi Støtter det lokale</h3>
    <sponsor/>
</section>
</main>
<FooterDesk/>
</template>

<style scoped>
.OmOsIntro{
    display: flex;
}

.OmOsIntro img{
    width: 550px;
    height: auto;
}

.OmOsTekst{
    width: 70ch;
}

.OmOsLokaltTekst{
    padding-left: var( --spacing-SmlDesk);
}

.OmOsLokalt{
    padding-top: var( --spacing-SmlDesk);
}

.omOsInformation{
    display: flex;
    justify-content: space-between;
}
.nummer , .email, .mumsAdresse{
    display: flex;
}

.omOsSponsor{
    background-image: url("../assets/pictures/mumsM.png") ;
    background-repeat: repeat;
    background-size: 90px;
    background-blend-mode: overlay;
    background-color: var(--blaa);
}
</style>
