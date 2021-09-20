import useDragScroll from "@src/hooks/useDragScroll";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  onClose: () => void;
}

export default function Navigation({ onClose }: Props): ReactElement {
  let left = 0;
  const wrapper = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const { mouseDownHandler } = useDragScroll({
    ref: wrapper,
    containerRef,
    cursorRef,
    setLeft
  });

  function setLeft(l: number) {
    left += l;
    if (wrapper.current && containerRef.current) {
      const width =
        window.innerWidth * 0.2 > 450 ? 450 : window.innerWidth * 0.2;
      const start = 0;
      const end = width * 10 - containerRef.current.clientWidth;
      if (left < start) {
        left = start;
      }
      if (left >= end) {
        left = end;
      }
      containerRef.current.style.transform = "translateX(-" + left + "px)";
    }
  }

  useEffect(() => {
    if (wrapper.current && containerRef.current) {
      wrapper.current.addEventListener("mousedown", mouseDownHandler);
      containerRef.current.style.transition = "all 1s";
    }
    window.addEventListener("wheel", function (e) {
      if (wrapper.current && containerRef.current) {
        left += e.deltaY;
        const width =
          window.innerWidth * 0.2 > 450 ? 450 : window.innerWidth * 0.2;
        const start = 0;
        const end = width * 10 - containerRef.current.clientWidth;
        if (left < start) {
          left = start;
        }
        if (left >= end) {
          left = end;
        }
        containerRef.current.style.transform = "translateX(-" + left + "px)";
      }
    });
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY - 140 - 65}px`;
        cursorRef.current.style.left = `${e.clientX - 55}px`;
      }
    });
    document.querySelectorAll(".image-content").forEach((link) => {
      link.addEventListener("mouseover", function (e) {
        document.querySelector(".cursor")?.classList.add("blend");
      });
      link.addEventListener("mouseleave", function (e) {
        document.querySelector(".cursor")?.classList.remove("blend");
      });
    });
  }, [wrapper.current, containerRef.current, cursorRef.current]);

  return (
    <div className="navigation">
      <header className="nav-header">
        <div className="nav-info">
          <span className="nav-dot"></span>
          <span className="nav-description">
            <div>(6) INTERNAL WORKS</div>
            <div>
              2021 c/o POPO
              <span className="r-round small">®</span>
            </div>
          </span>
          <span className="nav-description">
            <div>A COLLECTION OF INTERNAL PROJECT AND INITIATIVES UNDER</div>
            <div>
              THE POPO<span className="r-round small">®</span>
              BRAND.
            </div>
          </span>
        </div>
        <div className="nav-logo">
          POPO
          <span className="r-round small">®</span>
        </div>
        <button className="nav-close" onClick={() => onClose()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 11.7">
            <path d="M0,10.6L10.6,0l1.1,1.1L1.1,11.7L0,10.6z"></path>
            <path d="M10.6,11.7L0,1.1L1.1,0l10.6,10.6L10.6,11.7z"></path>
          </svg>
        </button>
      </header>
      <div className="carousel-filter"></div>
      <section className="carousel" ref={wrapper}>
        <div className="cursor" ref={cursorRef}>
          <span className="left"></span>
          <span className="circle">
            <div className="cursor-text">drag</div>
          </span>
          <span className="right"></span>
        </div>
        <div className="carousel-container" ref={containerRef}>
          <div className="carousel-card">
            <span className="carousel-card-number">01</span>
            <div className="image">
              <img
                src="https://i.pinimg.com/564x/2e/fe/3e/2efe3eca44f87ff7d8bdf6107b6b4c6b.jpg"
                alt=""
              />
            </div>
            <div className="image-content">
              <h3 className="image-title">
                <span>
                  Moves<span className="r-round">®</span>
                </span>
                <span>©2019</span>
              </h3>
              <div className="image-subtitle">our new hq</div>
              <div className="image-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, officia quaerat eius assumenda architecto quisquam
                facere consequuntur explicabo, odio dolores tempore impedit
                numquam? Eaque, tempore. Ullam quas iste voluptatum deserunt.
              </div>
              <a className="image-link" href="#">
                Visit the Site
              </a>
            </div>
          </div>
          <div className="carousel-card">
            <span className="carousel-card-number">02</span>
            <div className="image">
              <img
                src="https://i.pinimg.com/564x/3c/91/3f/3c913f60c02634de039b73462cb4d91e.jpg"
                alt=""
              />
            </div>
            <div className="image-content">
              <h3 className="image-title">
                <span>
                  Moves<span className="r-round">®</span>
                </span>
                <span>©2019</span>
              </h3>
              <div className="image-subtitle">our new hq</div>
              <div className="image-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, officia quaerat eius assumenda architecto quisquam
                facere consequuntur explicabo, odio dolores tempore impedit
                numquam? Eaque, tempore. Ullam quas iste voluptatum deserunt.
              </div>
              <a className="image-link" href="#">
                Visit the Site
              </a>
            </div>
          </div>
          <div className="carousel-card">
            <span className="carousel-card-number">03</span>
            <div className="image">
              <img
                src="https://i.pinimg.com/564x/2e/fe/3e/2efe3eca44f87ff7d8bdf6107b6b4c6b.jpg"
                alt=""
              />
            </div>
            <div className="image-content">
              <h3 className="image-title">
                <span>
                  Moves<span className="r-round">®</span>
                </span>
                <span>©2019</span>
              </h3>
              <div className="image-subtitle">our new hq</div>
              <div className="image-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, officia quaerat eius assumenda architecto quisquam
                facere consequuntur explicabo, odio dolores tempore impedit
                numquam? Eaque, tempore. Ullam quas iste voluptatum deserunt.
              </div>
              <a className="image-link" href="#">
                Visit the Site
              </a>
            </div>
          </div>
          <div className="carousel-card">
            <span className="carousel-card-number">04</span>
            <div className="image">
              <img
                src="https://i.pinimg.com/564x/3c/91/3f/3c913f60c02634de039b73462cb4d91e.jpg"
                alt=""
              />
            </div>
            <div className="image-content">
              <h3 className="image-title">
                <span>
                  Moves<span className="r-round">®</span>
                </span>
                <span>©2019</span>
              </h3>
              <div className="image-subtitle">our new hq</div>
              <div className="image-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, officia quaerat eius assumenda architecto quisquam
                facere consequuntur explicabo, odio dolores tempore impedit
                numquam? Eaque, tempore. Ullam quas iste voluptatum deserunt.
              </div>
              <a className="image-link" href="#">
                Visit the Site
              </a>
            </div>
          </div>
          <div className="carousel-card">
            <span className="carousel-card-number">05</span>
            <div className="image">
              <img
                src="https://i.pinimg.com/564x/2e/fe/3e/2efe3eca44f87ff7d8bdf6107b6b4c6b.jpg"
                alt=""
              />
            </div>
            <div className="image-content">
              <h3 className="image-title">
                <span>
                  Moves<span className="r-round">®</span>
                </span>
                <span>©2019</span>
              </h3>
              <div className="image-subtitle">our new hq</div>
              <div className="image-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, officia quaerat eius assumenda architecto quisquam
                facere consequuntur explicabo, odio dolores tempore impedit
                numquam? Eaque, tempore. Ullam quas iste voluptatum deserunt.
              </div>
              <a className="image-link" href="#">
                Visit the Site
              </a>
            </div>
          </div>
          <div className="carousel-card">
            <span className="carousel-card-number">06</span>
            <div className="image">
              <img
                src="https://i.pinimg.com/564x/3c/91/3f/3c913f60c02634de039b73462cb4d91e.jpg"
                alt=""
              />
            </div>
            <div className="image-content">
              <h3 className="image-title">
                <span>
                  Moves<span className="r-round">®</span>
                </span>
                <span>©2019</span>
              </h3>
              <div className="image-subtitle">our new hq</div>
              <div className="image-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, officia quaerat eius assumenda architecto quisquam
                facere consequuntur explicabo, odio dolores tempore impedit
                numquam? Eaque, tempore. Ullam quas iste voluptatum deserunt.
              </div>
              <a className="image-link" href="#">
                Visit the Site
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="compact-nav">
        <button className="compact-link">home</button>
        <button className="compact-link">about</button>
        <button className="compact-link">careers</button>
        <button className="compact-link">contact</button>
        <button className="compact-link">blog</button>
      </section>
      <footer className="nav-footer">
        <span>POPO®, inc</span>
        <span>18 - 21©</span>
      </footer>
    </div>
  );
}
