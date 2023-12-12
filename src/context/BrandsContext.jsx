import React, { createContext, useState } from "react";

import Img1 from "../assets/brands/La-Mere-Poulard.webp";
import Img2 from "../assets/brands/Forno-Bonomi.webp";
import Img3 from "../assets/brands/Mesta Wine.webp";
import Img5 from "../assets/brands/Airem-Organic-Spirits.webp";
import Img6 from "../assets/brands/San Andres.webp";
import Img7 from "../assets/brands/tomarchio.png"
import Img8 from "../assets/brands/8.jpg"
import Img9 from "../assets/brands/9.jpg"
import Img10 from "../assets/brands/10.jpg"
import Img11 from "../assets/brands/11.jpg"
import Img12 from "../assets/brands/12.jpg"

import Logo1 from "../assets/logo/1.webp";
import Logo2 from "../assets/logo/2.webp";
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

import forno1 from "../assets/products/forno-bonomi/1.png";
import forno2 from "../assets/products/forno-bonomi/2.png";
import forno3 from "../assets/products/forno-bonomi/3.png";

import san1 from "../assets/products/san-andreas/1.png";
import san2 from "../assets/products/san-andreas/3.png";
import san3 from "../assets/products/san-andreas/2.png";
import san4 from "../assets/products/san-andreas/4.png";

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
    {
      name: "Forno Bonomi",
      logo: Logo2,
      image: Img2,
      flag: "🇫🇷",
      subline: "With Love, From France",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "forno-bonomi",
      bg: AiremBg,
      shorthand: "Forno Bonomi",
      isLaunched: true,
      products: [
        {
          name: "Salty Puff Pastry Minibites Tomato And Origano Flavour ",
          price: "$5.90",
          quantity: "150 g",
          img: forno1,
          link: "https://tradluxe.myshopify.com/collections/forno-bonomi/products/salty-puff-pastry-minibites-tomato-and-origano-flavour-150g",
        },
        {
          name: "Sweet Mini Bites Sugar Topped",
          price: "$7.90",
          quantity: "200 g",
          img: forno2,
          link: "https://tradluxe.myshopify.com/collections/forno-bonomi/products/copy-of-sweet-mini-bites-glazed-200g",
        },
        {
          name: "Italian Shortbread Finger",
          price: "$6.90",
          quantity: "150 g",
          img: forno3,
          link: "https://tradluxe.myshopify.com/collections/forno-bonomi/products/italian-shortbread-finger-150g",
        },
      ],
    },
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
      link: "san-andres",
      bg: AiremBg,
      shorthand: "Tomarchio",
      products: [],
    },
    {
      name: "Novi Chocolates",
      logo: Logo8,
      image: Img8,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "san-andres",
      bg: AiremBg,
      shorthand: "Novi Chocolates",
      products: [],
    },
    {
      name: "El Valle Chips",
      logo: Logo9,
      image: Img9,
      flag: "🇪🇸",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "san-andres",
      bg: AiremBg,
      shorthand: "Novi Chocolates",
      products: [],
    },
    {
      name: "Allumea Organic Wines",
      logo: Logo10,
      image: Img10,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "san-andres",
      bg: AiremBg,
      shorthand: "Allumea Organic Wines",
      products: [],
    },
    {
      name: "Terre Di Faiano",
      logo: Logo11,
      image: Img11,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "san-andres",
      bg: AiremBg,
      shorthand: "Terre Di Faiano",
      products: [],
    },
    {
      name: "Happyole Cocktails",
      logo: Logo12,
      image: Img12,
      flag: "🇪🇸",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "san-andres",
      bg: AiremBg,
      shorthand: "Happyole",
      products: [],
    },
  ]);

  return (
    <BrandsContext.Provider value={[brands, setBrands]}>
      {children}
    </BrandsContext.Provider>
  );
};
