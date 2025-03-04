import React from "react";
import MarketingAgencyHomepage from "./Component/MarketingAgencyHomepage";
import MarketingStrategySection from "./Component/ContentSection";
import AboutPage from "./Component/AboutPage";
import ServicesPage from "./Component/ServicesPage";
import AgencyOverviewPage from "./Component/AgencyOverviewPage";
import ContentSection from "./Component/ContentSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HomePage from "./Component/HomePage";
import Footer from "./Component/Footer";
import DitgitalMarketing from "./Component/DitgitalMarketing";
import WebsiteDown from "./Component/WebSiteDown";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/about",
  //     element: <AboutPage />,
  //   },
  //   {
  //     path: "/",
  //     element: <HomePage />,
  //   },
  //   {
  //     path:"/digital-marketing-services",
  //     element:<DitgitalMarketing/>
  //   }
  // ]);
  // return <RouterProvider router={router}>

  // </RouterProvider>;
  return(
    <WebsiteDown/>
  )
}

export default App;
