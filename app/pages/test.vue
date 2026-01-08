<script setup>
import {allTakeAwayItems} from "../composable/takeAwayFlatMap.js";

// kører med det samme når siden loader
console.log("All items:", allTakeAwayItems);
console.table(allTakeAwayItems);
</script>

<template>
    <div>
        <h1>Test output – se console</h1>
    </div>
</template>

<style scoped></style>
