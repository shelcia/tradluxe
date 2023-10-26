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

import AiremBg from "../assets/products/airem/bg.png";
import Airem1 from "../assets/products/airem/1.png";
import Airem2 from "../assets/products/airem/2.png";
import Airem3 from "../assets/products/airem/3.png";

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
      bg: AiremBg,
      shorthand: "La Mère Poulard",
      products: [],
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
      bg: AiremBg,
      shorthand: "Mesta Wine",
      products: [],
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
