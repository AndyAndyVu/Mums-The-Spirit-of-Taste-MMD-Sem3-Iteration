<template>
  <header>
    <nav>
      <div class="navigation">
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
            <Btn label="Takeaway" to="/menu" />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--moerke-dyb-groend);
}

.navigation img {
  margin-left: var(--spacing-mdDesk);
}

nav ul {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}

nav a {
  color: var(--hvid-skrift);
  text-decoration: none;
}
</style>
