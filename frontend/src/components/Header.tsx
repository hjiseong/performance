import React, { ReactElement, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

interface HeaderProps {
  onClickMore: () => void;
}

export default function Header({ onClickMore }: HeaderProps): ReactElement {
  const history = useHistory();
  const path = history.location.pathname;
  console.log(path);

  useEffect(() => {
    const doc = document.documentElement;
    const w = window;

    let prevScroll = w.scrollY || doc.scrollTop;
    let curScroll;
    let direction = 0;
    let prevDirection = 0;

    const header = document.querySelector(".header-section");

    const checkScroll = function () {
      /*
       ** Find the direction of scroll
       ** 0 - initial, 1 - up, 2 - down
       */
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) {
        //scrolled up
        direction = 2;
      } else if (curScroll < prevScroll) {
        //scrolled down
        direction = 1;
      }

      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }

      prevScroll = curScroll;
    };

    function toggleHeader(direction: number, curScroll: number) {
      if (header) {
        if (direction === 2 && curScroll > 52) {
          //replace 52 with the height of your header in px

          header.classList.add("hide");
          prevDirection = direction;
        } else if (direction === 1) {
          header.classList.remove("hide");
          prevDirection = direction;
        }
      }
    }

    window.addEventListener("scroll", checkScroll);
  }, []);

  return (
    <section className="header-section">
      <div className="header-container">
        <header className="header">
          <h1 className="logo">
            <Link className="logo-text" to="/">
              popo
            </Link>
          </h1>
          <ul className="menu-list">
            <li className="menu-item">
              <Link
                className={`menu line-link ${
                  path === "/work" || path === "/" ? "active" : ""
                }`}
                to="/work"
              >
                work
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className={`menu line-link ${
                  path === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                about
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className={`menu line-link ${path === "/news" ? "active" : ""}`}
                to="/news"
              >
                news
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className={`menu line-link ${
                  path === "/thinking" ? "active" : ""
                }`}
                to="/thinking"
              >
                thinking
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className={`menu line-link ${
                  path === "/pledge" ? "active" : ""
                }`}
                to="/pledge"
              >
                pledge
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className={`menu line-link ${
                  path === "/careers" ? "active" : ""
                }`}
                to="/careers"
              >
                careers
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className={`menu line-link ${
                  path === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                contact
              </Link>
            </li>
          </ul>
          <button className="more" onClick={() => onClickMore()}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="text">MENU</span>
          </button>
        </header>
      </div>
    </section>
  );
}
