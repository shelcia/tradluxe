import React, { Suspense, lazy } from "react";
import Layout from "./layout/Layout";
import { ProgressBar } from "react-loader-spinner";
import { Box } from "@mui/material";

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <Box
          sx={{
            width: "100%",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProgressBar
            height="100"
            width="100"
            ariaLabel="progress-bar-loading"
            wrapperClass="progress-bar-wrapper"
            borderColor="#000"
            barColor="rgb(121, 121, 121)"
          />
        </Box>
      }
    >
      <Component {...props} />
    </Suspense>
  );

const HomePage = Loadable(lazy(() => import("./pages/home")));
const AboutPage = Loadable(lazy(() => import("./pages/about")));
const ProductsPage = Loadable(lazy(() => import("./pages/products")));
const ProductPage = Loadable(lazy(() => import("./pages/product")));
const ContactPage = Loadable(lazy(() => import("./pages/contact")));

const routes = [
  {
    path: "",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
    ],
  },
];

export default routes;
