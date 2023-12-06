import React, { createContext, useState } from "react";

import Img1 from "../assets/stores/lazada.svg";
import Img2 from "../assets/stores/shopee.svg";
import Img3 from "../assets/stores/amazon.svg";

import Img4 from "../assets/stores/opentaste.svg";
import Img5 from "../assets/stores/redmart.svg";

import Img6 from "../assets/stores/fair price.svg";
import Img7 from "../assets/stores/cs fresh.svg";
import Img8 from "../assets/stores/market place.svg";
import Img9 from "../assets/stores/mustafa.svg";
import Img10 from "../assets/stores/setan.svg";

import Img11 from "../assets/stores/ryan.svg";
import Img12 from "../assets/stores/new luncher.svg";
import Img13 from "../assets/stores/keep it fresh.svg";

export const ShopUsContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShopUsProvider = ({ children }) => {
  const [brands, setBrands] = useState([
    {
      category: "Online Marketplace",
      md: 8,
      xs: 12,
      brands: [
        {
          name: "Lazada",
          image: Img1,
          link: "/Lazada",
        },
        {
          name: "Shopee",
          image: Img2,
          link: "/Lazada",
        },
        {
          name: "Amazon.sg",
          image: Img3,
          link: "/Lazada",
        },
      ],
    },
    {
      category: "Online Grocery stores",
      md: 4,
      xs: 12,
      brands: [
        {
          name: "OpenTaste",
          image: Img4,
          link: "/Lazada",
        },
        {
          name: "Redmart",
          image: Img5,
          link: "/Lazada",
        },
      ],
    },

    {
      category: "Speciality Supermarkets",
      md: 12,
      xs: 12,
      brands: [
        {
          name: "FairPrice Finest",
          image: Img6,
          link: "/Lazada",
        },
        {
          name: "CS Fresh",
          image: Img7,
          link: "/Lazada",
        },
        {
          name: "Marketplace by Jasons",
          image: Img8,
          link: "/Lazada",
        },
        {
          name: "Mustafa",
          image: Img9,
          link: "/Lazada",
        },
        {
          name: "Isetan",
          image: Img10,
          link: "/Lazada",
        },
      ],
    },

    {
      category: "Speciality Grocery Stores",
      md: 8,
      xs: 12,
      brands: [
        {
          name: "Ryan's Grocery",
          image: Img11,
          link: "/Lazada",
        },
        {
          name: "The New Luncher",
          image: Img12,
          link: "/Lazada",
        },
        {
          name: "Keep It Fresh",
          image: Img13,
          link: "/Lazada",
        },
      ],
    },
  ]);

  return (
    <ShopUsContext.Provider value={[brands, setBrands]}>
      {children}
    </ShopUsContext.Provider>
  );
};
