import React, { createContext, useState } from "react";

import Img1 from "../assets/brands/La Mere Poulard.png";
import Img2 from "../assets/brands/Forno Bonomi.png";
import Img3 from "../assets/brands/Mesta Wine.png";
// import Img4 from "../assets/brands/Chocovia.png";
import Img5 from "../assets/brands/Airem Organic Spirits.png";
import Img6 from "../assets/brands/San Andres.png";

import Logo1 from "../assets/logo/1.png";
import Logo2 from "../assets/logo/2.png";
import Logo3 from "../assets/logo/3.png";
// import Logo4 from "../assets/logo/4.png";
import Logo5 from "../assets/logo/5.png";
import Logo6 from "../assets/logo/6.png";

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
      products: [
        {
          name: "La Mère Poulard Palets Citron - Lemon French Shortbreads",
          price: "$15.75",
          quantity: "375 g",
          img: lamere1,
          link: "https://www.tradluxe.com/collections/la-mere-poulard/products/la-mere-poulard-palets-citron-lemon-french-shortbreads-vintage-125g-3-pack-375g",
        },
        {
          name: "La Mère Poulard Palets - French Shortbreads",
          price: "$15.75",
          quantity: "375 g",
          img: lamere2,
          link: "https://www.tradluxe.com/collections/la-mere-poulard/products/la-mere-poulard-palets-french-shortbreads-vintage-125g-3-pack-375g",
        },
        {
          name: "La Mère Poulard 1888 6 variétés - Carton Box",
          price: "$19.90",
          quantity: "375 g",
          img: lamere3,
          link: "https://www.tradluxe.com/collections/la-mere-poulard/products/la-mere-poulard-1888-6-varietes-carton-box-selection-6-varieties-1888-375g",
        },
        {
          name: "La Mère Poulard Les Galettes d'Annette pur beurre",
          price: "$12.50",
          quantity: "220 g",
          img: lamere4,
          link: "https://www.tradluxe.com/collections/la-mere-poulard/products/la-mere-poulard-les-galettes-dannette-pur-beurre-all-butter-110g-2-pack-220g",
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
      products: [],
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
      products: [
        {
          name: "Mesta Rosado Tempranillo Organic Rose Wine from Spain",
          price: "$29.90",
          quantity: "750 ml",
          img: Mesta1,
          link: "https://www.tradluxe.com/collections/mesta/products/mesta-rosado-tempranillo-organic-rose-wine-from-spain",
        },
        {
          name: "Mesta Verdejo Organic White Wine from Spain",
          price: "$29.90",
          quantity: "750 ml",
          img: Mesta2,
          link: "https://www.tradluxe.com/collections/mesta/products/mesta-organic-white-wine-from-spain-verdejo-750ml",
        },
        {
          name: "Mesta Tempranillo Organic Red Wine from Spain",
          price: "$32.90",
          quantity: "750 ml",
          img: Mesta3,
          link: "https://www.tradluxe.com/collections/mesta/products/mesta-tempranillo-organic-red-wine-from-spain",
        },
        {
          name: "Mesta Garnacha Organic Red Wine from Spain",
          price: "$32.90",
          quantity: "750 ml",
          img: Mesta4,
          link: "https://www.tradluxe.com/collections/mesta/products/mesta-garnacha-organic-red-wine-from-spain",
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
      products: [
        {
          name: "Ultra Premium Eco-friendly Vodka Ecological, Kosher, Gluten Free",
          price: "$118.00",
          quantity: "700 ml",
          img: Airem1,
          link: "https://www.tradluxe.com/collections/airem/products/airem-ultra-premium-eco-friendly-vodka-ecological-kosher-gluten-free-700ml",
        },
        {
          name: "Whisky Single Malt 14 Years PX Cask Limited Edition",
          price: "$238.00",
          quantity: "700 ml",
          img: Airem2,
          link: "https://www.tradluxe.com/collections/airem/products/whisky-airem-single-malt-14-years-px-cask-limited-edition-700ml",
        },
        {
          name: "Gin Ultra Premium, Organic, Kosher, Gluten Free, Ecological",
          price: "$118.00",
          quantity: "700 ml",
          img: Airem3,
          link: "https://www.tradluxe.com/collections/airem/products/gin-ultra-premium-airem-organic-kosher-certified-gluten-free-ecological-700ml",
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
      products: [],
    },
  ]);

  return (
    <BrandsContext.Provider value={[brands, setBrands]}>
      {children}
    </BrandsContext.Provider>
  );
};
