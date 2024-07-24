import React, { createContext, useState } from "react";

import Img1 from "../assets/brands/La-Mere-Poulard.webp";
// import Img2 from "../assets/brands/Forno-Bonomi.webp";
import Img3 from "../assets/brands/Mesta Wine.webp";
import Img5 from "../assets/brands/Airem-Organic-Spirits.webp";
import Img6 from "../assets/brands/San Andres.webp";
import Img7 from "../assets/brands/tomarchio.png";
import Img8 from "../assets/brands/8.jpg";
import Img9 from "../assets/brands/9.jpg";
import Img10 from "../assets/brands/10.jpg";
import Img11 from "../assets/brands/11.jpg";
import Img12 from "../assets/brands/12.jpg";

import Logo1 from "../assets/logo/1.webp";
// import Logo2 from "../assets/logo/2.webp";
import Logo3 from "../assets/logo/3.webp";
// import Logo4 from "../assets/logo/4.png";
import Logo5 from "../assets/logo/5.webp";
import Logo6 from "../assets/logo/6.webp";
import Logo7 from "../assets/logo/7.png";
import Logo8 from "../assets/logo/8.png";
import Logo9 from "../assets/logo/9.png";
import Logo10 from "../assets/logo/10.jpg";
import Logo11 from "../assets/logo/11.jpg";
import Logo12 from "../assets/logo/12.webp";

import AiremBg from "../assets/products/airem/bg.webp";
import Airem1 from "../assets/products/airem/1.webp";
import Airem2 from "../assets/products/airem/2.webp";
import Airem3 from "../assets/products/airem/3.webp";

import MestaBg from "../assets/products/mesta/bg.webp";
import Mesta1 from "../assets/products/mesta/1.webp";
import Mesta2 from "../assets/products/mesta/2.webp";
import Mesta3 from "../assets/products/mesta/3.webp";
import Mesta4 from "../assets/products/mesta/4.webp";

import lamereBg from "../assets/products/la-mere/bg.jpg";
import lamere1 from "../assets/products/la-mere/1.webp";
import lamere2 from "../assets/products/la-mere/2.webp";
import lamere3 from "../assets/products/la-mere/3.webp";
import lamere4 from "../assets/products/la-mere/4.webp";

// import forno1 from "../assets/products/forno-bonomi/1.png";
// import forno2 from "../assets/products/forno-bonomi/2.png";
// import forno3 from "../assets/products/forno-bonomi/3.png";

import san1 from "../assets/products/san-andreas/1.png";
import san2 from "../assets/products/san-andreas/3.png";
import san3 from "../assets/products/san-andreas/2.png";
import san4 from "../assets/products/san-andreas/4.png";

import tom1 from "../assets/products/tomarchio/1.webp";
import tom2 from "../assets/products/tomarchio/2.webp";
import tom3 from "../assets/products/tomarchio/3.webp";
import tom4 from "../assets/products/tomarchio/4.webp";
import tom5 from "../assets/products/tomarchio/5.webp";
import tom6 from "../assets/products/tomarchio/6.webp";
import tom7 from "../assets/products/tomarchio/7.webp";
import tom8 from "../assets/products/tomarchio/8.webp";
import tom9 from "../assets/products/tomarchio/9.webp";

import nov1 from "../assets/products/novi/1.webp";
import nov2 from "../assets/products/novi/2.webp";
import nov3 from "../assets/products/novi/3.webp";
import nov4 from "../assets/products/novi/4.webp";
import nov5 from "../assets/products/novi/5.webp";
import nov6 from "../assets/products/novi/6.webp";
import nov7 from "../assets/products/novi/7.webp";
import nov8 from "../assets/products/novi/8.webp";

import el1 from "../assets/products/el-valle/1.webp";
import el2 from "../assets/products/el-valle/2.webp";

import allumea1 from "../assets/products/allumea/1.webp";
import allumea2 from "../assets/products/allumea/2.webp";
import allumea3 from "../assets/products/allumea/3.webp";

import terre1 from "../assets/products/terre-di-faiano/1.webp";
import terre2 from "../assets/products/terre-di-faiano/2.webp";

export const BrandsContext = createContext();

// eslint-disable-next-line react/prop-types
export const BrandsProvider = ({ children }) => {
  const [brands, setBrands] = useState([
    {
      name: "La Mère Poulard",
      logo: Logo1,
      image: Img1,
      flag: "🇫🇷",
      subline: "With Love, From France",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "la-mere-poulard",
      bg: lamereBg,
      shorthand: "La Mère Poulard",
      isLaunched: true,
      products: [
        {
          name: "La Mère Poulard Palets Citron - Lemon French Shortbreads",
          price: "$15.75",
          quantity: "375 g",
          img: lamere1,
          link: "https://tradluxe.myshopify.com/collections/la-mere-poulard/products/la-mere-poulard-palets-citron-lemon-french-shortbreads-vintage-125g-3-pack-375g",
        },
        {
          name: "La Mère Poulard Palets - French Shortbreads",
          price: "$15.75",
          quantity: "375 g",
          img: lamere2,
          link: "https://tradluxe.myshopify.com/collections/la-mere-poulard/products/la-mere-poulard-palets-french-shortbreads-vintage-125g-3-pack-375g",
        },
        {
          name: "La Mère Poulard 1888 6 variétés - Carton Box",
          price: "$19.90",
          quantity: "375 g",
          img: lamere3,
          link: "https://tradluxe.myshopify.com/collections/la-mere-poulard/products/la-mere-poulard-1888-6-varietes-carton-box-selection-6-varieties-1888-375g",
        },
        {
          name: "La Mère Poulard Les Galettes d'Annette pur beurre",
          price: "$12.50",
          quantity: "220 g",
          img: lamere4,
          link: "https://tradluxe.myshopify.com/collections/la-mere-poulard/products/la-mere-poulard-les-galettes-dannette-pur-beurre-all-butter-110g-2-pack-220g",
        },
      ],
    },
    // {
    //   name: "Forno Bonomi",
    //   logo: Logo2,
    //   image: Img2,
    //   flag: "🇫🇷",
    //   subline: "With Love, From France",
    //   content:
    //     "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
    //   link: "forno-bonomi",
    //   bg: AiremBg,
    //   shorthand: "Forno Bonomi",
    //   isLaunched: true,
    //   products: [
    //     {
    //       name: "Salty Puff Pastry Minibites Tomato And Origano Flavour ",
    //       price: "$5.90",
    //       quantity: "150 g",
    //       img: forno1,
    //       link: "https://tradluxe.myshopify.com/collections/forno-bonomi/products/salty-puff-pastry-minibites-tomato-and-origano-flavour-150g",
    //     },
    //     {
    //       name: "Sweet Mini Bites Sugar Topped",
    //       price: "$7.90",
    //       quantity: "200 g",
    //       img: forno2,
    //       link: "https://tradluxe.myshopify.com/collections/forno-bonomi/products/copy-of-sweet-mini-bites-glazed-200g",
    //     },
    //     {
    //       name: "Italian Shortbread Finger",
    //       price: "$6.90",
    //       quantity: "150 g",
    //       img: forno3,
    //       link: "https://tradluxe.myshopify.com/collections/forno-bonomi/products/italian-shortbread-finger-150g",
    //     },
    //   ],
    // },
    {
      name: "Mesta Wine",
      logo: Logo3,
      image: Img3,
      flag: "🇮🇹",
      subline: "With Love, From France",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "mesta-wine",
      bg: MestaBg,
      shorthand: "Mesta Wine",
      isLaunched: true,
      products: [
        {
          name: "Mesta Rosado Tempranillo Organic Rose Wine from Spain",
          price: "$29.90",
          quantity: "750 ml",
          img: Mesta1,
          link: "https://tradluxe.myshopify.com/collections/mesta/products/mesta-rosado-tempranillo-organic-rose-wine-from-spain",
        },
        {
          name: "Mesta Verdejo Organic White Wine from Spain",
          price: "$29.90",
          quantity: "750 ml",
          img: Mesta2,
          link: "https://tradluxe.myshopify.com/collections/mesta/products/mesta-organic-white-wine-from-spain-verdejo-750ml",
        },
        {
          name: "Mesta Tempranillo Organic Red Wine from Spain",
          price: "$32.90",
          quantity: "750 ml",
          img: Mesta3,
          link: "https://tradluxe.myshopify.com/collections/mesta/products/mesta-tempranillo-organic-red-wine-from-spain",
        },
        {
          name: "Mesta Garnacha Organic Red Wine from Spain",
          price: "$32.90",
          quantity: "750 ml",
          img: Mesta4,
          link: "https://tradluxe.myshopify.com/collections/mesta/products/mesta-garnacha-organic-red-wine-from-spain",
        },
      ],
    },
    // {
    //   name: "Chocovia",
    //   logo: Logo4,
    //   image: Img4,
    //   flag: "🇹🇷",
    //   subline: "With Love, From France",
    //   content:
    //     "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
    // },
    {
      name: "Airem Organic Spirits",
      logo: Logo5,
      image: Img5,
      flag: "🇪🇸",
      subline: "With Love, From France",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "airem-organic-spirits",
      bg: AiremBg,
      shorthand: "Airem",
      isLaunched: true,
      products: [
        {
          name: "Ultra Premium Eco-friendly Vodka Ecological, Kosher, Gluten Free",
          price: "$118.00",
          quantity: "700 ml",
          img: Airem1,
          link: "https://tradluxe.myshopify.com/collections/airem/products/airem-ultra-premium-eco-friendly-vodka-ecological-kosher-gluten-free-700ml",
        },
        {
          name: "Whisky Single Malt 14 Years PX Cask Limited Edition",
          price: "$238.00",
          quantity: "700 ml",
          img: Airem2,
          link: "https://tradluxe.myshopify.com/collections/airem/products/whisky-airem-single-malt-14-years-px-cask-limited-edition-700ml",
        },
        {
          name: "Gin Ultra Premium, Organic, Kosher, Gluten Free, Ecological",
          price: "$118.00",
          quantity: "700 ml",
          img: Airem3,
          link: "https://tradluxe.myshopify.com/collections/airem/products/gin-ultra-premium-airem-organic-kosher-certified-gluten-free-ecological-700ml",
        },
      ],
    },
    {
      name: "San Andres",
      logo: Logo6,
      image: Img6,
      flag: "🇪🇸",
      subline: "With Love, From France",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "san-andres",
      bg: AiremBg,
      shorthand: "San Andres",
      isLaunched: true,
      products: [
        {
          name: "San Andrés Nougat Almond with tropical fruits",
          price: "$8.49",
          quantity: "150 gm",
          img: san1,
          link: "https://tradluxe.myshopify.com/collections/san-andres/products/san-andres-nougat-almond-with-tropical-fruits",
        },
        {
          name: "Torta Chocolate Almond Turron Cake",
          price: "$12.49",
          quantity: "200 gm",
          img: san2,
          link: "https://tradluxe.myshopify.com/products/torta-chocolate-almond-turron-cake?_pos=1&_sid=243c34a45&_ss=r",
        },
        {
          name: "San Andrés Turrón Truffled Chocolate",
          price: "$10.99",
          quantity: "200 gm",
          img: san3,
          link: "https://tradluxe.myshopify.com/collections/san-andres/products/san-andres-turron-truffled-chocolate",
        },
        {
          name: "San Andrés Turrón Marzipan with Candied Fruit",
          price: "$9.99",
          quantity: "200 gm",
          img: san4,
          link: "https://tradluxe.myshopify.com/products/san-andres-turron-marzipan-with-candied-fruit?_pos=2&_psq=fruits&_ss=e&_v=1.0",
        },
      ],
    },
    {
      name: "Tomarchio",
      logo: Logo7,
      image: Img7,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "tomarchio",
      bg: AiremBg,
      shorthand: "Tomarchio",
      isLaunched: true,
      products: [
        {
          name: "4 PACK Aperitivi 200ML BLONDE – with Orange and Bay Leaf",
          price: "$15.90",
          quantity: "200ml x 4",
          img: tom1,
          link: "https://tradluxe.myshopify.com/collections/tomarchio-sparkling-beverages/products/4-pack-aperitivi-200ml-blonde-with-orange-and-bay-leaf",
        },
        {
          name: "4 PACK Aperitivi 200ML RED – with Blood Orange and Prickly Pear",
          price: "$15.90",
          quantity: "200ml x 4",
          img: tom2,
          link: "https://tradluxe.myshopify.com/collections/tomarchio-sparkling-beverages/products/4-pack-aperitivi-200ml-red-with-blood-orange-and-prickly-pear",
        },
        {
          name: "4 PACK Tomarchio TONIC WATER 275ML x4",
          price: "$17.90",
          quantity: "275ml x 4",
          img: tom3,
          link: "https://tradluxe.myshopify.com/collections/tomarchio-sparkling-beverages/products/4-pack-tomarchio-tonic-water-275ml-x4",
        },
        {
          name: "4 PACK Tomarchio COLA 275ML x4",
          price: "$17.90",
          quantity: "275ml x 4",
          img: tom4,
          link: "https://tradluxe.myshopify.com/collections/tomarchio-sparkling-beverages/products/4-pack-tomarchio-cola-275ml-x4-copy",
        },
        {
          name: "4 PACK Tomarchio GINGER BEER 275ML x4",
          price: "$17.90",
          quantity: "275ml x 4",
          img: tom5,
          link: "https://tradluxe.myshopify.com/collections/tomarchio-sparkling-beverages/products/4-pack-tomarchio-ginger-beer-275ml-x4",
        },
        {
          name: "4 PACK Tomarchio TANGERINE 275ML x4 Organic",
          price: "$19.90",
          quantity: "275ml x 4",
          img: tom6,
          link: "https://tradluxe.myshopify.com/collections/tomarchio-sparkling-beverages/products/4-pack-tomarchio-tangerine-275ml-x4-organic",
        },
        {
          name: "4 PACK Tomarchio LEMONADE 275ML x4 Organic",
          price: "$19.90",
          quantity: "275ml x 4",
          img: tom7,
          link: "https://tradluxe.myshopify.com/collections/tomarchio-sparkling-beverages/products/4-pack-tomarchio-lemonade-275ml-x4-organic",
        },
        {
          name: "4 PACK Tomarchio BLONDE ORANGE 275ML x4 Organic",
          price: "$19.90",
          quantity: "275ml x 4",
          img: tom8,
          link: "https://tradluxe.myshopify.com/collections/tomarchio-sparkling-beverages/products/4-pack-tomarchio-blonde-orange-275ml-x4-organic",
        },
        {
          name: "4 PACK Tomarchio Blood Orange 275ML x4 ORGANIC",
          price: "$19.90",
          quantity: "275ml x 4",
          img: tom9,
          link: "https://tradluxe.myshopify.com/collections/tomarchio-sparkling-beverages/products/4-pack-tomarchio-blood-orange-275ml-x4-organic",
        },
      ],
    },
    {
      name: "Novi Chocolates",
      logo: Logo8,
      image: Img8,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "novi-chocolates",
      bg: AiremBg,
      shorthand: "Novi Chocolates",
      isLaunched: true,
      products: [
        {
          name: "NOVI Specialties Bars ** 3 packs **",
          price: "$20.70",
          quantity: "3 packs",
          img: nov1,
          link: "https://tradluxe.myshopify.com/collections/novi/products/novi-specialties-bars-3-packs",
        },
        {
          name: "NOVI NoviPiù ** 6 packs **",
          price: "$17.40",
          quantity: "6 packs",
          img: nov2,
          link: "https://tradluxe.myshopify.com/collections/novi/products/novi-novipiu-twin-pack",
        },
        {
          name: "NOVI Nocciolato **TWIN pack (130Gx2=260G)**",
          price: "$21.80",
          quantity: "TWIN pack (130Gx2=260G)",
          img: nov3,
          link: "https://tradluxe.myshopify.com/collections/novi/products/novi-nocciolato-twin-pack",
        },
        {
          name: "NOVI Nero Nero **3pack",
          price: "$17.70",
          quantity: "3 packs",
          img: nov4,
          link: "https://tradluxe.myshopify.com/collections/novi/products/novi-nero-nero-3pack",
        },
        {
          name: "NOVI Classic Bars **3pack**",
          price: "$14.70",
          quantity: "3 packs",
          img: nov5,
          link: "https://tradluxe.myshopify.com/collections/novi/products/novi-classic-bars-3pack",
        },
        {
          name: "NOVI Pralines - Cuadro **3pack**",
          price: "$38.70",
          quantity: "3 packs",
          img: nov6,
          link: "https://tradluxe.myshopify.com/collections/novi/products/novi-pralines-cuadro-3pack",
        },
        {
          name: "NOVI Pralines - Gianduiotto **3pack**",
          price: "$38.70",
          quantity: "3 packs",
          img: nov7,
          link: "https://tradluxe.myshopify.com/collections/novi/products/novi-pralines-gianduiotto-3pack",
        },
        {
          name: "Novi Big Frut Soft Jelly Sweets 150G **3pack (150Gx3=450G)",
          price: "$16.50",
          quantity: "3 packs",
          img: nov8,
          link: "https://tradluxe.myshopify.com/collections/novi/products/novi-big-frut-soft-jelly-sweets-150g-3pack-150gx3-450g",
        },
      ],
    },
    {
      name: "El Valle Chips",
      logo: Logo9,
      image: Img9,
      flag: "🇪🇸",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "el-valle-chips",
      bg: AiremBg,
      shorthand: "El Valle",
      isLaunched: true,
      products: [
        {
          name: "EL VALLE Taste Collection Potato Chips x 2 Packs",
          price: "$10.98",
          quantity: "2 packs",
          img: el1,
          link: "https://tradluxe.myshopify.com/collections/el-valle/products/el-valle-taste-collection-potato-chips-x2-packs",
        },
        {
          name: "EL VALLE Premium Potato Chips 150g X 2 Packs",
          price: "$13.98",
          quantity: "2 packs",
          img: el2,
          link: "https://tradluxe.myshopify.com/collections/el-valle/products/el-valle-premium-potato-chips-150g-x-2-packs",
        },
      ],
    },
    {
      name: "Allumea Organic Wines",
      logo: Logo10,
      image: Img10,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "allumea-organics",
      bg: AiremBg,
      shorthand: "Allumea Organic",
      isLaunched: true,
      products: [
        {
          name: "ALLUMEA Rosso Terre di Chieti 750ML",
          price: "$39.00",
          quantity: "750 ml",
          img: allumea1,
          link: "https://tradluxe.myshopify.com/collections/allumea-wines/products/allumea-rosso-terre-di-chieti-750ml",
        },
        {
          name: "ALLUMEA Nero d'Avola Merlot 750ML",
          price: "$39.00",
          quantity: "750 ml",
          img: allumea2,
          link: "https://tradluxe.myshopify.com/collections/allumea-wines/products/allumea-nero-davola-merlot-750ml",
        },
        {
          name: "ALLUMEA Grillo Chardonnay Sicilia 750ML",
          price: "$39.00",
          quantity: "750 ml",
          img: allumea3,
          link: "https://tradluxe.myshopify.com/collections/allumea-wines/products/allumea-grillo-chardonnay-sicilia-750ml",
        },
      ],
    },
    {
      name: "Terre Di Faiano",
      logo: Logo11,
      image: Img11,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "terre-di-faiano",
      bg: AiremBg,
      shorthand: "Terre Di Faiano",
      isLaunched: true,
      products: [
        {
          name: "TERRE di Faiano Primitivo Puglia Biologico 750ML",
          price: "$49.00",
          quantity: "750 ml",
          img: terre1,
          link: "https://tradluxe.myshopify.com/collections/terre-di-faiano/products/terre-di-faiano-primitivo-puglia-biologico-750ml",
        },
        {
          name: "TERRE di Faiano NERO D'AVOLA DOP Sicilia Organic Appassimento 750ML",
          price: "$49.00",
          quantity: "750 ml",
          img: terre2,
          link: "https://tradluxe.myshopify.com/collections/terre-di-faiano/products/terre-di-faiano-nero-davola-dop-sicilia-organic-appassimento-750ml",
        },
      ],
    },
    {
      name: "Happyole Cocktails",
      logo: Logo12,
      image: Img12,
      flag: "🇪🇸",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "happyole",
      bg: AiremBg,
      shorthand: "Happyole",
      isLaunched: true,
      products: [],
    },
  ]);

  return (
    <BrandsContext.Provider value={[brands, setBrands]}>
      {children}
    </BrandsContext.Provider>
  );
};
