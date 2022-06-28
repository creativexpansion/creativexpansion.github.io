import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import Separator from "./Separator";
import { useActivePath } from "./utils";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      margin-right: 128px;
    }

    .subtitle {
      margin-top: -7px;
      line-height: 1;
      color: #707070;
      .main {
        color: #ffffff;
      }
    }
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    min-height: 64px;
    margin-bottom: 5px;

    .links a {
      margin-right: 20px;
      margin-left: 0;
      font-size: 18px;
    }

    .clocks {
      display: flex;
    }
  }

  @media (max-width: 880px) {
    .row {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        margin-right: 0;
        max-width: 100%;
      }
    }

    .menu {
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: center;
      .links a {
        margin-right: 10px;
        margin-left: 10px;
        font-size: 18px;
      }
      .clocks {
        display: flex;
        margin-bottom: 15px;
      }
    }
  }
`;

const Header = () => {
  const requestRef = useRef();
  const canvasRef = useRef(null);
  let activeLink = {
    servizi: useActivePath("/servizi"),
    portfolio: useActivePath("/portfolio", false),
    contatti: useActivePath("/contatti"),
  };

  const animate = useCallback(
    (t) => {
      if (canvasRef.current) {
        var ctx = canvasRef.current.getContext("2d");
        var d = new Date();
        var h = d.getUTCHours();
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
        <p className="subtitle">
          <span className="main">idee innovative</span>, alta capacità creativa
          e progettuale
        </p>
      </div>
      <Separator margin="30px 0 0" />
      <div className="menu">
        <div className="links">
          <a className={activeLink.servizi} href="/servizi">
            servizi
          </a>
          <a className={activeLink.portfolio} href="/portfolio">
            portfolio
          </a>
          <a className={activeLink.contatti} href="/contatti">
            contatti
          </a>
        </div>
        <div className="clocks">
          <canvas ref={canvasRef} width={282} height={74} />
        </div>
      </div>
      <Separator margin="0 0 43px" />
    </StyledHeader>
  );
};

export default Header;
