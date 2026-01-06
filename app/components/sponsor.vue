<script setup>

</script>

<template>
<section class="alleSponsor">
<div class="sponsor">
    <img src="../assets/pictures/gugBoldKlub.png">
    <p>Gug boldklub</p>
</div>
<div class="sponsor">
    <img src="../assets/pictures/visseIf.png">
    <p>Visse if</p>
</div>
<div class="sponsor">
    <img src="../assets/pictures/golfKlub.png">
    <p>Ørnehøj golfklub</p>
</div>
<div class="sponsor">
    <p>Gugboldklubs venner</p>
</div>
<div class="sponsor">
    <p>Gug skole</p>
</div>
<div class="sponsor">
    <p>Lions Club Aalborg</p>
</div>
<div class="sponsor">
    <p>Gug plejehjem</p>
</div>
<div class="sponsor">
    <img src="../assets/pictures/gugSpejdere.png">
    <p>Gug spejdere</p>
</div>
<div class="sponsor">
    <p>Borgerforeningen i Visse</p>
</div>
<div class="sponsor">
    <p>Beatesmindevej plejehjem</p>
</div>
</section>
</template>

<style>

.alleSponsor{
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto auto;
    justify-content: space-around;
}

.sponsor{
    display: flex;
}
.sponsor img{
    padding-right: 0.5rem;
}

@media screen and (max-width: 730px){

    .alleSponsor{
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto auto;}
}
</style>