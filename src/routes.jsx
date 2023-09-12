import React, { Suspense, lazy } from "react";
import Layout from "./layout/Layout";

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<p>Loading...</p>}>
      <Component {...props} />
    </Suspense>
  );

const HomePage = Loadable(lazy(() => import("./pages/home")));
const AboutPage = Loadable(lazy(() => import("./pages/about")));

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
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
];

export default routes;
