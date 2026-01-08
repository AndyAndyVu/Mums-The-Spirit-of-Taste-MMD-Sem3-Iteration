import BurgerIcon from "../assets/icons/takeawayIcons/BurgerIcon.svg";
import TapasIcon from "../assets/icons/takeawayIcons/TapasIcon.svg";
import SandwichIcon from "../assets/icons/takeawayIcons/SandwichIcon.svg";
import BrunchIcon from "../assets/icons/takeawayIcons/BrunchIcon.svg";
import NemAftensmadIcon from "../assets/icons/takeawayIcons/NemAftensmadIcon.svg";
import BowlsIcon from "../assets/icons/takeawayIcons/BowlsIcon.svg";
import BaoBunsSidesIcon from "../assets/icons/takeawayIcons/BaoBunsSidesIcon.svg";
import BoerneMenuIcon from "../assets/icons/takeawayIcons/BørneMenuIcon.svg";
import VeganskIcon from "../assets/icons/takeawayIcons/VeganskIcon.svg";
import MoedeTallerkenIcon from "../assets/icons/takeawayIcons/MødeTallerkenIcon.svg";
import DessertIcon from "../assets/icons/takeawayIcons/DessertIcon.svg";

// Burger IMAGES
import JubilæumsBurgerImage from "../assets/img/takeAwayMenu/burger/JubilæumsBurger.webp";
import BøfSandwichImage from "../assets/img/takeAwayMenu/burger/Bøfsandwich.webp";
import KyllingeBurgerImage from "../assets/img/takeAwayMenu/burger/KyllingeBurger.webp";
import FlæskestegsBurgerImage from "../assets/img/takeAwayMenu/burger/FlæskestegsBurger.webp";
import VegetarBurgerImage from "../assets/img/takeAwayMenu/burger/VegetarBurger.webp";
import JuniorBurgerImage from "../assets/img/takeAwayMenu/burger/JuniorBurger.webp";
import MumsBurgerImage from "../assets/img/takeAwayMenu/burger/MumsBurger.webp";
import VesterhavsBurgerImage from "../assets/img/takeAwayMenu/burger/VesterhavsBurger.webp";

// GENERERET MED AI ASSISTANCE
export const takeawayMenu = [
  {
    id: "burger",
    title: "Burger",
    icon: BurgerIcon,
    description:
      "Hos Mums i Aalborg laver vi saftige burgere med fokus på kvalitet og gode råvarer. Vælg mellem dansk oksekød, gris, kylling eller vegetariske bøffer – altid med lækkert fyld og hjemmerørt mayo. Perfekt til en god burgeroplevelse derhjemme.",
    items: [
      {
        id: 1,
        title: "MUMS Burger",
        description:
          "En bøf af dansk oksekød, hvidløgs mayo, tomat relish, rødløg, tørsaltet bacon, cheddar ost og salat.",
        price: 109,
        allergies: ["gluten", "mælk", "æg", "sennep", "selleri"],
        image: MumsBurgerImage,
      },
      {
        id: 2,
        title: "Vesterhav Burger",
        description:
          "Dansk oksebøf af 100% dansk oksekød, Thise Vesterhav ost, tynde slices af danske rødløg, hjemmelavet agurkesalat og hjemmerørt hvidløg- og chili mayo.",
        price: 109,
        allergies: ["gluten", "mælk", "æg", "sennep", "selleri"],
        image: VesterhavsBurgerImage,
      },
      {
        id: 3,
        title: "Jubilæums Burger",
        description:
          "Juicy burger med bøf af dansk oksekød, spicy chili cheese tops, hvidløgs- og chili mayo, hjemmesyltet rødløg, tomat relish, cheddar ost og salat.",
        price: 109,
        allergies: ["gluten", "mælk", "æg", "sennep", "selleri"],
        image: JubilæumsBurgerImage,
      },
      {
        id: 4,
        title: "Den Nordjyske Bøf Sandwich",
        description:
          "En bøf af dansk oksekød, remoulade, tomat relish, syltede agurker, rødbeder, 3 slags løg (rå, friteret og hjemmesyltet) – leveres med brun sovs.",
        price: 109,
        allergies: ["gluten", "mælk", "æg", "sennep", "selleri"],
        image: BøfSandwichImage,
      },
      {
        id: 5,
        title: "Kyllinge Burger",
        description:
          "Grov paneret brystfilet lavet af 100% dansk velfærdskylling fra Happy Chicken, tørsaltet bacon, chili mayo, syltede agurker, tomat relish og MUMS hjemmelavet dressing.",
        price: 109,
        allergies: ["gluten", "mælk", "æg", "sennep", "selleri"],
        image: KyllingeBurgerImage,
      },
      {
        id: 6,
        title: "Flæskestegs Burger",
        description:
          "Saftig grisekam, hjemmelavet rødkål, agurkesalat, hvidløgsmayo og sprøde svær.",
        price: 109,
        allergies: ["gluten", "mælk", "æg", "sennep", "selleri"],
        image: FlæskestegsBurgerImage,
      },
      {
        id: 7,
        title: "Vegetar Burger",
        description:
          "Vegetar bøf, hvidløgs mayo, tomat relish, rødløg, cheddar ost og salat.",
        price: 109,
        allergies: ["gluten", "mælk", "æg", "soja", "sennep", "selleri"],
        image: VegetarBurgerImage,
      },
      {
        id: 8,
        title: "Junior Burger",
        description:
          "En bøf af 100% dansk oksekød med hvidløgs mayo, ketchup, bacon, cheddar ost og salat.",
        price: 59,
        allergies: ["gluten", "mælk", "æg", "sennep", "selleri"],
        image: JuniorBurgerImage,
      },
    ],
  },

  {
    id: "tapas",
    title: "Tapas",
    icon: TapasIcon,
    description:
      "Nordisk tapas med fokus på lokale råvarer og gode smagsoplevelser. Sammensæt din egen menu og nyd en moderne fortolkning af klassiske retter, der passer perfekt til både hverdag, fest og hyggelige stunder med venner og familie.",
    items: [
      {
        id: 101,
        title: "MUMS Mega Kartoffelchips",
        description: "MUMS hjemmelavet kartoffelchips med Mariager sydesalt.",
        price: 35,
        allergies: [],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 102,
        title: "Sprøde Flæskesvær",
        description:
          "Hjemmelavede flæskesvær fra KrastrupSøgaard – sprøde, saltede og dejligt knasende. En snack i verdensklasse.",
        price: 35,
        allergies: [],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 103,
        title: "Oliven Mix med Rosmarin",
        description:
          "Kombination af grønne og sorte oliven i olie. Friske, sunde og skønne – en hygge-snack der er god for hjertet.",
        price: 35,
        allergies: [],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 104,
        title: "MUMS Egen Nøddeblanding",
        description:
          "Dejlig nøddeblanding med Valencia mandler, peanuts og cashewnødder.",
        price: 35,
        allergies: ["nødder", "jordnødder"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 105,
        title: "Røget Laks",
        description:
          "Grand cru laks fra Polar Sea Food i Vodskov. Koldrøget over bøgeflis, hjemmesyltet perleløg og dild mayo.",
        price: 35,
        allergies: ["æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 106,
        title: "Urtehaven",
        description:
          "Urtehaven tærteform med bund af hjemmerørt humus, ristede sesam, peanuts og grønne asparges.",
        price: 35,
        allergies: ["gluten", "peanuts"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 107,
        title: "Kyllingesalat",
        description: "Hjemmelavet kyllingesalat, grønne asparges og bacon.",
        price: 35,
        allergies: ["æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 108,
        title: "Rejer på Madpandekage",
        description:
          "Håndpillede rejer fra Grønland på madpandekage, hjemmelavet dild mayo, citron støv og frisk dild.",
        price: 35,
        allergies: ["krebsdyr", "gluten", "mælk", "æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 109,
        title: "Porre/Løgtærte",
        description:
          "Porre/løgtærte bagt med revet ost, pyntet med mayo og frisk salat.",
        price: 35,
        allergies: ["gluten", "mælk", "æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 110,
        title: "Pulled Beef",
        description:
          "Hjemmelavet pulled beef af Dansk Gastro Kalv med teriyaki sauce, salsamix og chili mayo, serveret på flatbrød.",
        price: 35,
        allergies: ["gluten", "mælk", "soja", "æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 111,
        title: "Danske Velfærdskylling",
        description:
          "Paneret brystfilet af dansk velfærdskylling med rosmarin og citron, street food dressing, purløg og ristet sesam, på nordisk flatbrød.",
        price: 35,
        allergies: ["gluten", "mælk", "æg", "soja", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 112,
        title: "Røget Okseinderlår",
        description:
          "Røget okseinderlår, langtidstørret fra KrastrupSøgaard med bruschetta mayo og oliven.",
        price: 35,
        allergies: ["mælk", "æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 113,
        title: "Røget Hjortekød",
        description:
          "Røget hjorteinderlår fra KrastrupSøgaard med peberrodscreme og ribs – en unik smagsoplevelse.",
        price: 35,
        allergies: ["mælk"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 114,
        title: "Røget Skinke",
        description:
          "Røget Grand Cru skinke fra KrastrupSøgaard med hjemmelavet æggestand, mayo, soltørret tomat og frisk purløg.",
        price: 35,
        allergies: ["mælk", "æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 115,
        title: "Roastbeef",
        description:
          "Klassisk roastbeef med grov remoulade, bløde løg og agurkesalat.",
        price: 35,
        allergies: ["gluten", "æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 116,
        title: "Kyllingefilet",
        description:
          "Kyllingeinderfilet med mayo og grillede peberfrugter – fin og raffineret i smagen.",
        price: 35,
        allergies: ["æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 117,
        title: "Filet Royal",
        description:
          "Filet Royal af Dansk tender pork med syltet rødløg og trøffel mayo.",
        price: 35,
        allergies: ["æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 118,
        title: "Vitello Tonnato",
        description:
          "Vitello Tonnato lavet på kalveribeye fra Dansk Gastro Kalv, med klassisk tuncreme og kapers.",
        price: 35,
        allergies: ["æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 119,
        title: "Slider Pulled Pork",
        description:
          "Slider med hjemmelavet pulled pork af Dansk Bertels gris med BBQ sauce, sennepsmayo og hjemmesyltet agurk.",
        price: 35,
        allergies: ["gluten", "æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 120,
        title: "Slider Kyllingeinderfilet",
        description:
          "Slider med grillet kyllingeinderfilet, spicy mayo, syltet rød peber og street food dressing.",
        price: 35,
        allergies: ["gluten", "æg", "sennep", "selleri"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 121,
        title: "Slider med Avocado",
        description:
          "Slider med avocado, vegansk mayo, syltet peber, salsamix og smoky grill dressing.",
        price: 35,
        allergies: ["gluten", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 122,
        title: "Nordisk Fladbrød",
        description:
          "Nordisk flatbrød med bagt peberfrugt, hjemmerørt humus og salsamix.",
        price: 35,
        allergies: ["gluten"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 123,
        title: "Vegansk Bøf med BBQ",
        description:
          "Vegansk bøf med BBQ dressing, vegansk mayo, purløg og kornblomster.",
        price: 35,
        allergies: ["soja", "gluten", "sennep", "selleri"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 124,
        title: "Pork Belly med Chutney",
        description:
          "Pork belly af Tender Pork med ananas-peber chutney og grønt.",
        price: 35,
        allergies: ["æg", "selleri"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 125,
        title: "Osteanretning",
        description:
          "Osteanretning med 3 forskellige danske oste og hjemmelavet sylt.",
        price: 35,
        allergies: ["mælk"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 126,
        title: "Dessertkage",
        description:
          "En overdådig chokoladekage med fløjlsblød mørk- og hvid chokolademousse.",
        price: 35,
        allergies: ["mælk", "soja", "æg", "gluten"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 127,
        title: "Gammeldags Æblekage",
        description: "MUMSs gammeldags æblekage med makroner og flødeskum.",
        price: 35,
        allergies: ["gluten", "mælk", "æg"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 128,
        title: "Passions/Mango Mousse Kage",
        description: "Vegansk passions- og mango mousse kage med crumble-bund.",
        price: 35,
        allergies: ["gluten", "soja"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 129,
        title: "Panna Cotta",
        description: "Cremet panna cotta med hjemmelavet skovbærsylt.",
        price: 35,
        allergies: ["mælk"],
        image: "https://placehold.co/600x400?text=Food",
      },
    ],
  },

  {
    id: "sandwich",
    title: "Sandwich",
    icon: SandwichIcon,
    description:
      "Sandwiches med fokus på gode råvarer, masser af smag og solid mæthed. Uanset om du er til kød, kylling eller vegetar, finder du en sandwich med saftigt fyld, lækkert brød og velafbalancerede smagskombinationer – perfekt til både hverdag og take-away.",
    items: [
      {
        id: 201,
        title: "Grand Cru Laks",
        description:
          "Grand Cru røget laks fra Polar Sea Food i Vodskov, med mayo, syltede rødløg, ristede græskarkerner og salat.",
        price: 89,
        allergies: ["gluten"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 202,
        title: "Korean Fried Chicken",
        description:
          "Sprød paneret kyllingefilet med Kimchi slaw, sød soya, rødløg, hvidløgs mayo og salat.",
        price: 79,
        allergies: ["gluten", "selleri", "sennep", "æg"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 203,
        title: "Okse Brisket",
        description:
          "Okse brisket tilberedt ved lav temperatur over lang tid, krydret og let røget med egen rub, hjemmelavet coleslaw, BBQ sauce, mayo og salat.",
        price: 79,
        allergies: ["gluten", "selleri", "sennep", "æg"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 204,
        title: "Stegt Flæsk",
        description:
          "Stegt flæsk, flødekartoffelcreme med persille og hjemmesyltede mini rødbeder, sennepsmayo og salat.",
        price: 79,
        allergies: ["gluten", "mælk", "æg"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 205,
        title: "Pork Belly",
        description:
          "Pork belly langtidsbraiseret af Dansk Tender Pork marineret med egen BBQ-rub, flødekartoffelcreme med chili, sød sennep, mayo og salat.",
        price: 79,
        allergies: ["gluten","selleri", "mælk", "æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 206,
        title: "MUMS Klassisk Kylling",
        description: "Kyllingefilet, salat, bacon og MUMS dressing a la karry.",
        price: 69,
        allergies: ["gluten", "æg", "sennep", "selleri"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 207,
        title: "Braiseret Øffe Sandwich",
        description:
          "Hjemmelavet pulled pork, salat, mild sennepsmayo, hjemmesyltet agurk og BBQ.",
        price: 69,
        allergies: ["gluten", "æg", "sennep", "selleri"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 208,
        title: "Flæskestegs Sandwich",
        description:
          "Flæskesteg, salat, sprøde svær, syltede agurker, hjemmelavet rødkål og MUMS æblesalat.",
        price: 69,
        allergies: ["gluten", "mælk", "æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 209,
        title: "Kylling og Bacon – Den med Pesto",
        description:
          "Kyllingefilet, hjemmelavet basilikum pesto, salat, sprødt kyllingeskind og bacon mayo.",
        price: 69,
        allergies: ["gluten", "æg", "sennep", "jordnødder"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 210,
        title: "Røget Okseinderlår Sandwich",
        description:
          "Røget okseinderlår fra KrastrupSøgaard, MEGA kartoffelchips, mayo, salat, syltede rødløg og peberrodscreme.",
        price: 69,
        allergies: ["gluten", "mælk", "æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 211,
        title: "Vegetar Sandwich",
        description:
          "Hjemmerørt humus, syltet rød peber, syltede rødløg, hvidløgsmayo og salat.",
        price: 69,
        allergies: ["gluten", "æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 212,
        title: "Skinke Sandwich",
        description:
          "Røget Grand Cru skinke fra KrastrupSøgaard, salat, ost, hjemmelavet basilikum pesto og sennepsmayo.",
        price: 69,
        allergies: ["gluten", "mælk", "æg", "sennep", "jordnødder"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 213,
        title: "Fish n Chips",
        description:
          "Paneret rødspættefilet, syltede agurker, hjemmerørt remoulade, paprika mayo og MUMS mega chips.",
        price: 69,
        allergies: ["gluten", "fisk", "æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 214,
        title: "OX Sandwich",
        description:
          "Stegt oksesteg, salat, grov remoulade, syltede agurker og sprøde løg.",
        price: 69,
        allergies: ["gluten", "æg", "sennep", "selleri"],
        image: "https://placehold.co/600x400?text=Food",
      },
    ],
  },

  {
    id: "brunch",
    title: "Brunch",
    icon: BrunchIcon,
    description: "Lækker brunch med klassiske og moderne favoritter.",
    items: [
      {
        id: 301,
        title: "Brunch Menu",
        description:
          "Yoghurt med hjemmelavet sylt og müsli, røget Grand Cru skinke med pesto, bacon, brunchpølser og scrambled æg, mini croissant med kyllingesalat, 2 slags ost med sylt, brunchpandekage med sirup, friskbagt brød og Unika smør.",
        price: 139,
        allergies: ["gluten", "mælk", "nødder", "æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 302,
        title: "Brunch – Lokalt Koldrøget Laks",
        description:
          "Lokalt koldrøget laks, råsyltet perleløg og dild mayo. Grand Cru laks fra Polar Sea Food i Vodskov, koldrøget over bøgeflis.",
        price: 35,
        allergies: ["æg", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 303,
        title: "Brunchpandekage med Sirup",
        description: "Brunch pandekage med sirup.",
        price: 20,
        allergies: ["gluten", "mælk", "æg"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 304,
        title: "Brunch Kage – Frit valg",
        description: "Makronkage, mørk brownie eller karamel drøm.",
        price: 20,
        allergies: ["gluten", "mælk", "æg", "jordnødder"],
        image: "https://placehold.co/600x400?text=Food",
      },
    ],
  },

  {
    id: "nem-aftensmad",
    title: "Nem Aftensmad",
    icon: NemAftensmadIcon,
    description: "Velsmagende retter der gør aftensmaden nem og hurtig.",
    items: [
      {
        id: 401,
        title: "Panang Karry Ret med Ris",
        description:
          "Traditionel hjemmelavet Panang karry med kyllingestrimler og grøntsager. Serveres med ris.",
        price: 89,
        allergies: [],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 402,
        title: "Mørbradgryde á la Creme",
        description:
          "Svinemørbrad, bacon, cocktailpølser, svampesauce og kartoffelmos.",
        price: 89,
        allergies: ["gluten", "mælk"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 403,
        title: "MUMS Hjemmelavet Lasagne",
        description: "Med revet Unika Havgus.",
        price: 89,
        allergies: ["gluten", "mælk", "æg", "selleri"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 404,
        title: "Boller i Karry",
        description:
          "Boller i karry med Fru MUMS hjemmelavet karrysovs og løse ris.",
        price: 79,
        allergies: ["gluten", "mælk", "æg", "sennep", "selleri"],
        image: "https://placehold.co/600x400?text=Food",
      },
    ],
  },

  {
    id: "bowls",
    title: "Bowls",
    icon: BowlsIcon,
    description: "Friske og mættende bowls med velafbalancerede smage.",
    items: [
      {
        id: 501,
        title: "Bowl – Pork Belly",
        description:
          "Marinerede ris, revet gulerødder, syltede rødløg, grillede champignon, kimchi coleslaw, radiser, peanuts, dressing.",
        price: 79,
        allergies: ["soja", "jordnødder"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 502,
        title: "Bowl – Karaage Kyllingelår",
        description:
          "Marinerede ris, revet gulerødder, kimchi coleslaw, soltørret tomater, friske rødløg, peberfrugt, peanuts, dressing.",
        price: 79,
        allergies: ["gluten", "soja", "jordnødder"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 503,
        title: "Bowl – Pulled Beef",
        description:
          "Marinerede ris, syltede gulerødder, peberfrugt, frisk rødkål, broccoli strimler, salsa mix, dressing.",
        price: 79,
        allergies: [],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 504,
        title: "Bowl – Pulled Pork",
        description:
          "Marinerede ris, revet gulerødder, friske ærter, syltede rødløg, kimchi coleslaw, peanuts, dressing.",
        price: 79,
        allergies: ["soja", "jordnødder"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 505,
        title: "Bowl – Røget Grand Cru Laks",
        description:
          "Marinerede ris, revet gulerødder, syltede rødløg, friske ærter, radiser, frisk rødkål, græskarkerner, dressing.",
        price: 79,
        allergies: ["mælk"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 506,
        title: "Bowl – Green Salad",
        description:
          "Marinerede ris, syltede gulerødder, peberfrugt, frisk rødkål, friske ærter, soltørret tomater, grillede champignon, syltede perleløg, peanuts.",
        price: 79,
        allergies: [],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 507,
        title: "Dressing – Frit valg (1 stk.)",
        description:
          "Cremefraiche dressing, chili dressing, teriyaki dressing, sesam/hvidløgs dressing, sød chili sauce, thousand island dressing, chili mayo, hvidløgsmayo, ketchup.",
        price: 79,
        allergies: [],
        image: "https://placehold.co/600x400?text=Food",
      },
    ],
  },

  {
    id: "bao-buns-sides",
    title: "Bao Buns & Sides",
    icon: BaoBunsSidesIcon,
    description: "Bløde bao buns og lækre sides – perfekte til deling.",
    items: [
      {
        id: 601,
        title: "Bao Pork Belly (1 stk.)",
        description:
          "Pork belly med Korean peber/soyasauce, chili mayo, kimchi coleslaw og purløg.",
        price: 45,
        allergies: ["gluten", "soja"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 602,
        title: "Bao Pork Belly (3 stk.)",
        description:
          "3 stk. Bao Pork Belly med Korean peber/soyasauce, chili mayo, kimchi coleslaw og purløg.",
        price: 120,
        allergies: ["gluten", "soja"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 603,
        title: "Bao Chicken (1 stk.)",
        description:
          "Paneret brystfilet af dansk velfærdskylling med rosmarin og citron, street food dressing, syltet gulerødder, ærteskud og peanuts.",
        price: 45,
        allergies: ["gluten"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 604,
        title: "Bao Chicken (3 stk.)",
        description:
          "3 stk. Bao Chicken med paneret brystfilet, street food dressing, syltet gulerødder, ærteskud og peanuts.",
        price: 120,
        allergies: ["gluten"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 605,
        title: "Bao Brisket (1 stk.)",
        description:
          "Hjemmelavet okse brisket fra egen smoker, chutney med ananas og rød peber, syltede agurker og syltet peberfrugt.",
        price: 45,
        allergies: ["gluten", "sennep", "selleri"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 606,
        title: "Bao Brisket (3 stk.)",
        description:
          "3 stk. Bao Brisket med brisket fra egen smoker, chutney, syltede agurker og syltet peberfrugt.",
        price: 120,
        allergies: ["gluten", "sennep", "selleri"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 607,
        title: "Gyoza med Kylling/Grøntsager (8 stk.)",
        description: "8 stk. med Thai Sweet Chili sauce.",
        price: 75,
        allergies: ["gluten", "soja"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 608,
        title: "Karaage Kyllingelår (6 stk.)",
        description: "6 stk. med sesam/hvidløgs dressing & kimchi coleslaw.",
        price: 75,
        allergies: ["gluten", "æg", "soja", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 609,
        title: "Southern Fried Kyllingefilet",
        description:
          "1 stk. sprød southern fried kyllingefilet med coleslaw og barbecue dressing.",
        price: 75,
        allergies: ["gluten", "æg", "selleri"],
        image: "https://placehold.co/600x400?text=Food",
      },
    ],
  },

  {
    id: "boerne-menu",
    title: "Børne Menu",
    icon: BoerneMenuIcon,
    description: "Børnevenlige retter med fokus på smag og kvalitet.",
    items: [
      {
        id: 701,
        title: "Børnemenu",
        description:
          "Hjemmelavet lasagne, børne pizza med pepperoni/skinke/ost, slider med grillet kyllingeinderfilet (syltet rød peber, spicy mayo, street food dressing), mørk brownie med hvid Callebaut chokolade, råkostsalat.",
        price: 99,
        allergies: ["gluten", "mælk", "æg", "soja", "selleri", "lupin"],
        image: "https://placehold.co/600x400?text=Food",
      },
    ],
  },

  {
    id: "vegansk",
    title: "Vegansk",
    icon: VeganskIcon,
    description: "Smagfulde veganske retter lavet med omtanke.",
    items: [
      {
        id: 801,
        title: "MUMS Mega Kartoffelchips",
        description:
          "MUMS mega kartoffelchips med Læsøsalt. Slow cooked for ekstra sprødhed.",
        price: 35,
        allergies: [],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 802,
        title: "Oliven Mix med Rosmarin",
        description:
          "Kombination af grønne og sorte oliven i olie – en lækker hygge-snack.",
        price: 35,
        allergies: [],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 803,
        title: "Urtehaven",
        description:
          "Urtehaven tærteform med bund af hjemmerørt humus, ristede mandler og grønne asparges.",
        price: 35,
        allergies: ["gluten", "peanuts"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 804,
        title: "Slider med Avocado",
        description:
          "Avocado, vegansk mayo, syltet peber, salsamix og smoky grill dressing.",
        price: 35,
        allergies: ["gluten", "sennep"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 805,
        title: "Nordisk Flatbrød – Vegansk bøf",
        description:
          "Vegansk bøf med BBQ dressing, vegansk mayo, purløg og kornblomster.",
        price: 35,
        allergies: ["soja", "gluten", "sennep", "selleri"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 806,
        title: "Nordisk Rødbede Flatbrød",
        description:
          "Nordisk rødbede flatbrød med hjemmelavet humus og salsa mix.",
        price: 35,
        allergies: ["gluten"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 807,
        title: "Passion Mango Mousse Kage (Vegansk)",
        description: "Vegansk passion mango mousse kage.",
        price: 35,
        allergies: ["gluten", "soja"],
        image: "https://placehold.co/600x400?text=Food",
      },
    ],
  },

  {
    id: "moede-tallerken",
    title: "Møde Tallerken",
    icon: MoedeTallerkenIcon,
    description: "Indbydende mødetallerkener til møder og arrangementer.",
    items: [
      {
        id: 901,
        title: "Mødetallerken",
        description:
          "Porre/løgtærte, røget okseinderlår med bruschetta mayo og oliven, slider med kyllingeinderfilet, ålerøget skinke med kartoffelsalat og hjemmesyltet gulerødder, filet royal med svampecreme og syltet løg, dessertkage, brød og Unika smør.",
        price: 199,
        allergies: ["gluten", "mælk", "æg", "sennep", "selleri"],
        image: "https://placehold.co/600x400?text=Food",
      },
    ],
  },

  {
    id: "dessert",
    title: "Dessert",
    icon: DessertIcon,
    description:
      "Søde afslutninger på måltidet – klassiske og moderne desserter.",
    items: [
      {
        id: 1001,
        title: "Brownies (mørk, hjemmebagt)",
        description: "",
        price: 20,
        allergies: ["gluten", "æg", "mælk"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 1002,
        title: "Karamel Drøm (hjemmebagt)",
        description: "",
        price: 20,
        allergies: ["gluten", "æg", "mælk"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 1003,
        title: "Hindbærsnitte med Marcipan (hjemmebagt)",
        description: "",
        price: 20,
        allergies: ["gluten", "æg", "mælk"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 1004,
        title: "Makronkage (hjemmebagt)",
        description: "",
        price: 20,
        allergies: ["gluten", "æg", "mælk"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 1005,
        title: "Trøffel Drøm (hjemmebagt)",
        description: "",
        price: 20,
        allergies: ["gluten", "æg", "mælk"],
        image: "https://placehold.co/600x400?text=Food",
      },
      {
        id: 1006,
        title: "Kokostoppe (luksus)",
        description: "",
        price: 20,
        allergies: ["gluten", "æg", "mælk"],
        image: "https://placehold.co/600x400?text=Food",
      },
    ],
  },
];
