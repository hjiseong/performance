import React, { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onClickMore: () => void;
}

export default function Header({ onClickMore }: HeaderProps): ReactElement {
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
              <a className="menu line-link" href="#">
                work
              </a>
            </li>
            <li className="menu-item">
              <a className="menu line-link" href="#">
                about
              </a>
            </li>
            <li className="menu-item">
              <a className="menu line-link" href="#">
                news
              </a>
            </li>
            <li className="menu-item">
              <a className="menu line-link" href="#">
                thinking
              </a>
            </li>
            <li className="menu-item">
              <a className="menu line-link" href="#">
                pledge
              </a>
            </li>
            <li className="menu-item">
              <a className="menu line-link" href="#">
                careers
              </a>
            </li>
            <li className="menu-item">
              <a className="menu line-link" href="#">
                contact
              </a>
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
