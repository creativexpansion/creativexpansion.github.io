import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { useActivePath } from "./utils";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import DeepSection from "./DeepSection";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 45px;

    img {
      margin-right: 128px;
    }
  }

  .subtitle {
    margin: 30px 0 0;
    padding: 5px 45px;
    font-size: 28px;
    background: #009fe4;
    color: #ffffff;
    .main {
      color: #000000;
    }
  }

  .menuContainer {
    margin-bottom: 58px;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 5px 0;
    padding: 0 45px;

    .links {
      flex-grow: 1;

      a {
        margin-right: 20px;
        margin-left: 0;
        font-size: 18px;
      }
    }
  }

  @media (max-width: 960px) {
    .subtitle {
      font-size: 24px;
    }
  }

  @media (max-width: 880px) {
    .row {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;

      img {
        margin-right: 0;
        max-width: 100%;
      }
    }

    .menu {
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: center;
      .links {
        text-align: center;
        a {
          margin-right: 10px;
          margin-left: 10px;
          font-size: 18px;
        }
      }
      .clocks {
        display: flex;
        margin-bottom: 15px;
      }
    }

    .subtitle {
      text-align: center;
      font-size: 21px;
    }
  }

  @media (max-width: 740px) {
    .subtitle {
      font-size: 18px;
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const requestRef = useRef();
  const canvasRef = useRef(null);
  const isMainPortfolio = useActivePath("/portfolio");

  let activeLink = {
    servizi: useActivePath("/servizi"),
    portfolio: useActivePath("/portfolio", false),
    contatti: useActivePath("/contatti"),
    logoDesign: useActivePath("/portfolio/logo-design") || isMainPortfolio,
    mockup: useActivePath("/portfolio/mockup"),
    interiorDesign: useActivePath("/portfolio/interior-design"),
    manoLibera: useActivePath("/portfolio/mano-libera"),
    fotoImmagine: useActivePath("/portfolio/foto-immagine"),
  };

  const isDST = (d) => {
    let jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
    let jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();
    const IDST = Math.max(jan, jul) !== d.getTimezoneOffset();
    return IDST;
  };

  const animate = useCallback(
    (t) => {
      if (canvasRef.current) {
        var ctx = canvasRef.current.getContext("2d");
        var d = new Date();
        var h = d.getUTCHours() - (isDST(d) ? 0 : 1);
        var m = d.getUTCMinutes();
        var s = d.getUTCSeconds();
        function draw() {
          //pulisci sfondo
          ctx.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          //disegna cerchi
          ctx.beginPath();
          ctx.fillStyle = "#2a2a2b";
          ctx.arc(34.5, 34.5, 25.5, 0, 2 * Math.PI);
          ctx.arc(105.5, 34.5, 25.5, 0, 2 * Math.PI);
          ctx.arc(176.5, 34.5, 25.5, 0, 2 * Math.PI);
          ctx.arc(247.5, 34.5, 25.5, 0, 2 * Math.PI);
          ctx.fill();
          //scrivi nomi città
          ctx.fillStyle = "#7f7f7f";
          ctx.font = "8px Verdana";
          ctx.fillText("MILANO", 17, 71);
          ctx.fillText("LONDON", 87, 71);
          ctx.fillText("TOKYO", 162, 71);
          ctx.fillText("NEW YORK", 225, 71);

          if (s < 59) {
            s++;
          } else {
            s = 0;
            if (m < 59) {
              m++;
            } else {
              m = 0;
              if (h < 23) h++;
              else h = 0;
            }
          }
          //lancette
          drawLancette();
        }
        function drawLancette() {
          //posizione0 MILANO +2
          let fuso = 2;
          let posx = 34.5;
          let posy = 34.5;
          ctx.beginPath();
          ctx.strokeStyle = "#444";
          let angolo = toRadians(s * 6 - 90);
          ctx.moveTo(posx + 4 * Math.cos(angolo), posy + 4 * Math.sin(angolo));
          ctx.lineTo(
            posx + (21 + 4) * Math.cos(angolo),
            posy + (21 + 4) * Math.sin(angolo)
          );
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "#009ee0";
          angolo = toRadians(m * 6 - 90);
          ctx.moveTo(posx + 4 * Math.cos(angolo), posy + 4 * Math.sin(angolo));
          ctx.lineTo(
            posx + (18 + 4) * Math.cos(angolo),
            posy + (18 + 4) * Math.sin(angolo)
          );
          ctx.stroke();
          angolo = toRadians((360 / 12) * (h + fuso) - 90);
          ctx.moveTo(posx + 4 * Math.cos(angolo), posy + 4 * Math.sin(angolo));
          ctx.lineTo(
            posx + (12 + 4) * Math.cos(angolo),
            posy + (12 + 4) * Math.sin(angolo)
          );
          ctx.stroke();
          //posizione0 LONDON +1
          fuso = 1;
          posx = 105.5;
          posy = 34.5;
          ctx.beginPath();
          ctx.strokeStyle = "#444";
          angolo = toRadians(s * 6 - 90);
          ctx.moveTo(posx + 4 * Math.cos(angolo), posy + 4 * Math.sin(angolo));
          ctx.lineTo(
            posx + (21 + 4) * Math.cos(angolo),
            posy + (21 + 4) * Math.sin(angolo)
          );
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "#009ee0";
          angolo = toRadians(m * 6 - 90);
          ctx.moveTo(posx + 4 * Math.cos(angolo), posy + 4 * Math.sin(angolo));
          ctx.lineTo(
            posx + (18 + 4) * Math.cos(angolo),
            posy + (18 + 4) * Math.sin(angolo)
          );
          ctx.stroke();
          angolo = toRadians((360 / 12) * (h + fuso) - 90);
          ctx.moveTo(posx + 4 * Math.cos(angolo), posy + 4 * Math.sin(angolo));
          ctx.lineTo(
            posx + (12 + 4) * Math.cos(angolo),
            posy + (12 + 4) * Math.sin(angolo)
          );
          ctx.stroke();
          //posizione0 TOKYO +9
          fuso = 9;
          posx = 176.5;
          posy = 34.5;
          ctx.beginPath();
          ctx.strokeStyle = "#444";
          angolo = toRadians(s * 6 - 90);
          ctx.moveTo(posx + 4 * Math.cos(angolo), posy + 4 * Math.sin(angolo));
          ctx.lineTo(
            posx + (21 + 4) * Math.cos(angolo),
            posy + (21 + 4) * Math.sin(angolo)
          );
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "#009ee0";
          angolo = toRadians(m * 6 - 90);
          ctx.moveTo(posx + 4 * Math.cos(angolo), posy + 4 * Math.sin(angolo));
          ctx.lineTo(
            posx + (18 + 4) * Math.cos(angolo),
            posy + (18 + 4) * Math.sin(angolo)
          );
          ctx.stroke();
          angolo = toRadians((360 / 12) * (h + fuso) - 90);
          ctx.moveTo(posx + 4 * Math.cos(angolo), posy + 4 * Math.sin(angolo));
          ctx.lineTo(
            posx + (12 + 4) * Math.cos(angolo),
            posy + (12 + 4) * Math.sin(angolo)
          );
          ctx.stroke();
          //posizione0 NEW YORK -4 (+20)
          fuso = 20;
          posx = 247.5;
          posy = 34.5;
          ctx.beginPath();
          ctx.strokeStyle = "#444";
          angolo = toRadians(s * 6 - 90);
          ctx.moveTo(posx + 4 * Math.cos(angolo), posy + 4 * Math.sin(angolo));
          ctx.lineTo(
            posx + (21 + 4) * Math.cos(angolo),
            posy + (21 + 4) * Math.sin(angolo)
          );
          ctx.stroke();
          ctx.beginPath();
          ctx.strokeStyle = "#009ee0";
          angolo = toRadians(m * 6 - 90);
          ctx.moveTo(posx + 4 * Math.cos(angolo), posy + 4 * Math.sin(angolo));
          ctx.lineTo(
            posx + (18 + 4) * Math.cos(angolo),
            posy + (18 + 4) * Math.sin(angolo)
          );
          ctx.stroke();
          angolo = toRadians((360 / 12) * (h + fuso) - 90);
          ctx.moveTo(posx + 4 * Math.cos(angolo), posy + 4 * Math.sin(angolo));
          ctx.lineTo(
            posx + (12 + 4) * Math.cos(angolo),
            posy + (12 + 4) * Math.sin(angolo)
          );
          ctx.stroke();
        }
        function toRadians(angle) {
          return angle * (Math.PI / 180);
        }
        draw();
        requestRef.current = requestAnimationFrame(animate);
      }
    },
    [canvasRef, requestRef]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  return (
    <StyledHeader>
      <div className="row">
        <a href="/">
          <img alt="Creativexpansion Logo" src={Logo} />
        </a>
        <div className="clocks">
          <canvas ref={canvasRef} width={282} height={74} />
        </div>
      </div>
      <div className="subtitle">
        <span className="main">{t("header.subtitle.main")}</span>
        {t("header.subtitle.rest")}
      </div>
      <DeepSection className="menuContainer">
        <div className="menu">
          <div className="links">
            <a className={activeLink.servizi} href="/servizi">
              {t("header.menu.services")}
            </a>
          </div>
          <div className="links">
            <a className={activeLink.logoDesign} href="/portfolio/logo-design">
              {t("portfolio.menu.logoDesign")}
            </a>
            <a className={activeLink.mockup} href="/portfolio/mockup">
              {t("portfolio.menu.mockup")}
            </a>
            <a className={activeLink.manoLibera} href="/portfolio/mano-libera">
              {t("portfolio.menu.freehand")}
            </a>
            <a
              className={activeLink.interiorDesign}
              href="/portfolio/interior-design"
            >
              {t("portfolio.menu.interiorDesign")}
            </a>
            <a
              className={activeLink.fotoImmagine}
              href="/portfolio/foto-immagine"
            >
              {t("portfolio.menu.photoImage")}
            </a>
          </div>
          <LanguageSelector />
        </div>
      </DeepSection>
    </StyledHeader>
  );
};

export default Header;
