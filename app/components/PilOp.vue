<script setup>
onMounted(() => {
  const pilOp = document.querySelector(".pilOp")
window.onscroll = function() {visKnap()};

function visKnap(){
if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    pilOp.style.display = "block";} 
    else
    {pilOp.style.display = "none"; } 
}

pilOp.addEventListener("click", function() {
  window.scrollTo({ 
    top: 0,
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