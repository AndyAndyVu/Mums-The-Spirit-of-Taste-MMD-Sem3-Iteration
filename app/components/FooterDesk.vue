<template>
  <footer>
    <section>
      <article class="footerInfo">
        <p>Mums v/Charlotte Blak Frost</p>
        <p>Gugvej 184</p>
        <p>9210 Aalborg SØ</p>
        <p>CVR: 30483308</p>
      </article>

      <article class="footerKontakt">
        <h4>Kontakt os</h4>

        <div class="nummerFooter">
          <img
            src="~/assets/pictures/footerPhone.svg"
            alt=""
            width="24"
            height="24"
            loading="lazy"
          />
          <a href="tel:+4598125017">98 12 50 17</a>
        </div>

        <div class="emailFooter">
          <img
            src="~/assets/pictures/footerMail.svg"
            alt=""
            width="24"
            height="24"
            loading="lazy"
          />
          <a href="mailto:mums@mumsshop.dk">mums@mumsshop.dk</a>
        </div>
      </article>
    </section>

    <section>
      <article class="footerNyhedsBrev">
        <p>
          Nyhedsbrev<br />
          Tilmeld dig MUMS-nyhedsbrevet! Vær den første til at modtage spændende
          nyheder og eksklusive tilbud direkte i din indbakke.
        </p>

        <!-- IKKE button + a -->
        <a
          class="footerBtn"
          href="https://mumsshop.us17.list-manage.com/subscribe?u=0cc47569fa1fb7594afcb931b&id=9362ab740a"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tilmeld dig her
        </a>
      </article>

      <article class="footerSocials">
        <h4>Følge os</h4>

        <a
          href="https://www.facebook.com/mumsshop.dk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="~/assets/pictures/faceLogo.svg"
            alt="Facebook"
            width="32"
            height="32"
            loading="lazy"
          />
        </a>

        <a
          href="https://www.instagram.com/mums.the.spirit.of.taste/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="~/assets/pictures/instaLogo.svg"
            alt="Instagram"
            width="32"
            height="32"
            loading="lazy"
          />
        </a>

        <a
          href="https://www.youtube.com/watch?v=kSO3dGm5nEM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="~/assets/pictures/youLogo.svg"
            alt="YouTube"
            width="32"
            height="32"
            loading="lazy"
          />
        </a>
      </article>
    </section>

    <section class="footerLinks">
      <h4>Links</h4>
      <a
        href="https://issuu.com/gvdnet9/docs/menukort_allergener_oversigt_2025"
        target="_blank"
        rel="noopener noreferrer"
        >Allergener</a
      >
      <a href="/sponsorater">Sponsorater</a>
      <a href="/omOs">Åbningstider</a>
      <a
        href="https://mumsshop.dk/kobsbetingelser"
        target="_blank"
        rel="noopener noreferrer"
        >Købsbetingelser</a
      >
      <a
        href="https://mumsshop.dk/persondatapolitik"
        target="_blank"
        rel="noopener noreferrer"
        >Privatliv og cookies</a
      >
    </section>

    <section class="footerBilleder">
      <img
        src="~/assets/pictures/mumsFooterlogo.png"
        alt="MUMS logo"
        width="140"
        height="70"
        loading="lazy"
      />
      <img
        src="~/assets/pictures/footerAwards.png"
        alt="MUMS awards"
        width="140"
        height="70"
        loading="lazy"
      />
    </section>
  </footer>
</template>

<style sctoped>
footer {
  margin-top: var(--spacing-mdDesk);
  background-color: var(--moerke-dyb-groend);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

footer section {
  padding: var(--spacing-SmlDesk) var(--spacing-mdDesk);
}

footer p,
footer h4,
footer a {
  color: var(--hvid-skrift);
}

.nummerFooter,
.emailFooter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footerNyhedsBrev {
  max-width: 55ch;
}

.footerBtn {
  display: inline-block;
  background-color: var(--hvid-skrift);
  color: black;
  padding: var(--spacing-xlSmlDesk);
  margin-top: 1rem;
  text-decoration: none;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
}

footer img {
  padding: 0 var(--spacing-xlSmlDesk);
}

.footerBilleder img {
  padding: var(--spacing-mdDesk) 0;
}

@media (max-width: 900px) {
  footer {
    flex-direction: column;
  }
}
</style>
