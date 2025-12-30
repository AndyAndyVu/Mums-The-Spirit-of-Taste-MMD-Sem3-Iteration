<script setup>
import '../assets/css/style.css'
</script>

<template>
<div class="reviewCard">
<h4>Lars IA</h4>
<div class="stars">
    <img src="../assets/pictures/star.svg">
    <img src="../assets/pictures/star.svg">
    <img src="../assets/pictures/star.svg">
    <img src="../assets/pictures/star.svg">
</div>
<p>
    Vi bestilte x flere med deres flæskesteg burger og maden smagte godt😋👌 flæskesvær var sprødt og perfekt. Man kan bestille på deres hjemmeside hjemfra eller på caféen. Den har også masse parkeringsplads omkring stedet. Vi havde valgt at bestille hjemfra og betalte online for at undgå ventetid☺️
</p>
</div>
</template>

<style scoped>
    .reviewCard{
        background-color: var(--hvid-100);
        max-width: 15rem;
        padding: var(--spacing-xlSmlDesk);
        box-shadow: 4px 5px 2px 0 rgba(0, 0, 0, 0.3);
    }
    .reviewCard h4, .reviewCard p{
        margin:var(--spacing-xlSmlDesk) 0;
    }
    .stars img{
        width: 25px;
    }

</style>