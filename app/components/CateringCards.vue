<script setup>

</script>

<template>
<section class="caCards">
<article class="caCard">
    <img src="../assets/pictures/cateTapas.png" alt="billede af tapas menu, med røget hjortekød, røget laks, Porre/løgtærte, rejer på madpandekage og Pork Belly med chutney">
    <div class="caCardText">
    <h3>Tapas</h3>
    <p>Vi ønsker, med vores nordiske tapas koncept, at giver dig mulighed for at sammensætte din helt egen menu af fantistiske små retter.</p></div>
</article>
<article class="caCard">
    <img src="../assets/pictures/cateMad.png" alt="billede af Mad ud af huset menu, med kød, salt, kartoffler, sauce, Bowls og tapas">
    <div class="caCardText">
    <h3>Mad ud af huset</h3>
    <p>Holder I festen hjemme og vil du gerne slippe for at knokle i køkkenet? Så lad MUMS levere en kulinarisk selskabs buffet, med alt hvad dertil hører af lækkerier.</p></div>
</article>
<article class="caCard">
    <img src="../assets/pictures/cateRecep.png" alt="billede af Receptions-menu, med sliders, røget laks, Håndpillede rejer, Rørt oksetatar og Brownie">
    <div class="caCardText">
    <h3>Receptions-menu</h3>
    <p>Vores fantastiske menuer er skræddersyet til enhver fest og garanterer at tilfredsstille enhver smag og appetit. Så hvorfor bruge tid på at bekymre dig om maden, når du kan stole på os til at levere en mindeværdig madoplevelse.</p></div>
</article>
<article class="caCard">
    <img src="../assets/pictures/cateMode.png" alt="billede af møde tallerken, med porre/løgtærte ,Røget okseinderlår, Slider, Røget skinke og Dessertkage">
    <div class="caCardText">
    <h3>Møde tallerken</h3>
    <p>En mødetallerken leveres anrettet på flot engangsservice lige til at servere, der medfølger friskbagt brød og Unika smør – du skal kun supplere med service og drikkevarer, så er frokosten klar.</p></div>
</article>
<article class="caCard">
    <img src="../assets/pictures/cateJul.png" alt="billede af jule menu, med fiskefille, jule-sliders, frikadeller,kyllingesalat og Ris a la mande">
    <div class="caCardText">
    <h3>Jule-menu</h3>
    <p>Vores jule- og nytårsmenu er igen i år skabt med respekt for gode, lokale råvarer– leveret af nogle af de bedste producenter i Nordjylland og resten af Danmark.</p></div>
</article>
<article class="caCard">
    <img src="../assets/pictures/cateBrunch.png" alt="billede af brunch menu, med bacon, æg, lækkeret brød og musli">
    <div class="caCardText">
    <h3>Brunch</h3>
    <p>Vores brunch er bygget op af gode, lokale råvarer, og vores fooddesignere sætter en ære i at kreere den bedst mulige mad inspireret af den smukke, danske natur, der omgiver vores dejlige Aalborg.</p></div>
</article>
</section>
</template>

<style scoped>

.caCards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: var(--spacing-mdDesk);
}

.caCard{
    background-color: var(--lys-dyb-groend);
    max-width: 360px;
    margin-bottom: var(--spacing-SmlDesk);
    border-radius: 10px;
    box-shadow: 2px 3px 2px 0 rgba(0, 0, 0, 0.3);
}

.caCard img{
    max-width: 360px;
}

.caCardText{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 var(--spacing-xlSmlDesk);
    color: var(--hvid-skrift);
}

.caCardText p{
    max-width: 30ch;
}

</style>