<script setup>

</script>

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
    <img src="../assets/pictures/footerPhone.svg" alt="Telefon nummer">
    <p>98 12 50 17</p></div>
    <div class="emailFooter">
    <img src="../assets/pictures/footerMail.svg" alt="Email">
    <p>mums@mumsshop.dk</p></div>
    </article>
</section>
<section>
    <article class="footerNyhedsBrev">
    <p>Nyhedsbrev<br>Tilmeld dig MUMS-nyhedsbrevet!Vær den første til at modtage spændende nyheder og eksklusive tilbud direkte i din indbakke.</p>
    <button><a href="https://mumsshop.us17.list-manage.com/subscribe?u=0cc47569fa1fb7594afcb931b&id=9362ab740a">Tilmeld dig her</a></button>
</article>
<article class="footerSocials">
    <h4>Følge os</h4>
    <a href="https://www.facebook.com/mumsshop.dk/"><img src="../assets/pictures/faceLogo.svg" alt="facebook" loading="lazy"></a>
    <a href="https://www.instagram.com/mums.the.spirit.of.taste/"><img src="../assets/pictures/instaLogo.svg" alt="Instagram" loading="lazy"></a>
    <a href="https://www.youtube.com/watch?v=kSO3dGm5nEM"><img src="../assets/pictures/youLogo.svg" alt="YouTube" loading="lazy"></a>
</article>
</section>
<section class="footerLinks">
    <h4>Links</h4>
    <a href="https://issuu.com/gvdnet9/docs/menukort_allergener_oversigt_2025?fr=sNTg4YzY0Mjg2MjM"><p>Allegener</p></a>
    <a href="https://mumsshop.dk/sponsorater"><p>Sponsorater</p></a>
    <a href="../pages/omOs.vue"><p>Åbningstider</p></a>
    <a href="https://mumsshop.dk/kobsbetingelser"><p>Købsbetingelser</p></a>
    <a href="https://mumsshop.dk/persondatapolitik"><p>Privatliv og cookies</p></a>
    <a href="https://www.findsmiley.dk/567652"><img src="../assets/pictures/smileyRapport.png" alt="SmileyRappoert"></a>
</section>
<section class="footerBilleder">
    <img src="../assets/pictures/mumsFooterlogo.png" alt="mums logo">
    <img src="../assets/pictures/footerAwards.png" alt="Awards">
</section>
</footer>
</template>

<style scoped>
    footer{
        margin-top: var(--spacing-mdDesk);
        background-color: var(--moerke-dyb-groend);
        display: flex;
        justify-content: center;
        
    }

    footer p,footer h4, footer a{
        color: var(--hvid-skrift);
        padding: 0 0,3rem ;
    }

    .nummerFooter, .emailFooter{
    display: flex;
  }

  .footerNyhedsBrev{
    max-width: 55ch;
  }

  footer section{
    padding: var(--spacing-SmlDesk) var(--spacing-mdDesk);
  }

  .footerNyhedsBrev a{
    color: black;
    text-decoration: none;
    font-size: 15px;
  }

  .footerNyhedsBrev button{
    padding: var(--spacing-xlSmlDesk) ;
    box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.3);
  }

  footer img{
    padding: 0 var(--spacing-xlSmlDesk) ;
  }

  .footerBilleder img{
    padding: var(--spacing-mdDesk) 0;
  }
  

</style>