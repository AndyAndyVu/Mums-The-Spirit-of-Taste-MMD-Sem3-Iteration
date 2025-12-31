<template>
  <header>
    <nav>
      <div>
        <NuxtLink to="/" aria-label="Gå til forsiden">
          <img
            src="../assets/img/Mums-logo.svg"
            alt="MUMS - The Spirit of Taste"
          />
        </NuxtLink>
        <ul>
          <li>
            <NuxtLink to="/menu">Menu</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/catering">Catering</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/delikatesse">Delikatesse</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/omOs">Om os</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/menu"> Takeaway </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav {
  background-color: var(--moerke-dyb-groend);
}
</style>
