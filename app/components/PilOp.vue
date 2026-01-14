<script setup>
import { onMounted } from "vue"

onMounted(() => {
  const pilOp = document.querySelector(".pilOp")

window.onscroll = function() {visKnap()};

function visKnap(){
if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550){
    pilOp.style.display = "block";} //viser knappen
    else
    {pilOp.style.display = "none"; }//vis ikke der bliver scrollede 550px skal knappen ikke vises   
}

//topknapen får nu en eventlistner hvor vis den bliver trygede går den til toppen. hjælp fundet https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
pilOp.addEventListener("click", function() {//laver en function til topknap når den bliver cliked
  window.scrollTo({ //dette scroller paa siden
    top: 0, //her scroller den helt til toppen
    behavior: "smooth"
  });
})
});


</script>

<template>
<div>
<button class="pilOp"><img src="../assets/pictures/MumsPilOp.svg"></button>
</div>
</template>

<style scoped>

.pilOp{
    background-color: rgba(255, 255, 255, 0);
    border: none;
    display: none;
    position: fixed;
    bottom: 0.5rem;
    right: 1rem;
    cursor: pointer;
}

.pilOp img{
    height: 90px;
}
</style>