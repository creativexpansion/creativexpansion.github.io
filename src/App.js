import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NotFound from "./components/404";
import Contacts from "./components/pages/Contacts";
import Home from "./components/pages/Home";
import Portfolio, { PORTFOLIO } from "./components/pages/Portfolio";
import Services from "./components/pages/Services";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import packageInfo from "../package.json";

const SITE_NAME = "creativexpansion";
const SITE_URL = packageInfo.homepage.replace(/\/$/, "");
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo512.png`;

const getCanonicalUrl = (pathname) =>
  `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;

const Seo = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const canonical = getCanonicalUrl(location.pathname);
  const language = i18n.language.slice(0, 2);
  const isNotFoundRoute = location.pathname === "/404";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: "creativexpansionart@gmail.com",
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["it", "en"],
  };

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <meta name="description" content={t("head.description")} />
      <meta name="robots" content={isNotFoundRoute ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="it" href={canonical} />
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={document.title || SITE_NAME} />
      <meta property="og:description" content={t("head.description")} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:locale" content={language === "it" ? "it_IT" : "en_US"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={document.title || SITE_NAME} />
      <meta name="twitter:description" content={t("head.description")} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webSiteSchema)}</script>
    </Helmet>
  );
};

const AppRoutes = () => (
  <>
    <Seo />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servizi" element={<Services />} />
      <Route path="/portfolio/logo-design" element={<Portfolio />} />
      <Route
        path="/portfolio/mockup"
        element={<Portfolio selectedPortfolio={PORTFOLIO.MOCKUP} />}
      />
      <Route
        path="/portfolio/interior-design"
        element={<Portfolio selectedPortfolio={PORTFOLIO.INTERIOR_DESIGN} />}
      />
      <Route
        path="/portfolio/mano-libera"
        element={<Portfolio selectedPortfolio={PORTFOLIO.MANO_LIBERA} />}
      />
      <Route
        path="/portfolio/foto-immagine"
        element={<Portfolio selectedPortfolio={PORTFOLIO.FOTO_IMMAGINE} />}
      />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contatti" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
