<template>
  <NuxtLink :to="to" class="knap">
    {{ label }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  label: String,
  to: String,
});
</script>

<!-- defineProps anvendes for at gøre knappen genbrugelig.
label bestemmer teksten i knappen,
to angiver hvilken side knappen linker til. -->

<style scoped>
.knap {
  display: inline-block;
  padding: 0.5rem 0.5rem;
  border-radius: 6px;
  background-color: var(--moerke-groen);
  font-size: var(--btn-desktop);
  margin-right: var(--spacing-mdDesk);
}
</style>
