import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/404";
import Contacts from "./components/pages/Contacts";
import Home from "./components/pages/Home";
import Portfolio, { PORTFOLIO } from "./components/pages/Portfolio";
import Services from "./components/pages/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
            element={
              <Portfolio selectedPortfolio={PORTFOLIO.INTERIOR_DESIGN} />
            }
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
      </BrowserRouter>
    </div>
  );
}

export default App;
