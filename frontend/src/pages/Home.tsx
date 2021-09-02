import React, { ReactElement, useEffect, useRef, useState } from "react";
import Header from "@src/components/Header";
import Footer from "@src/components/Footer";
import CookieBanner from "@src/components/CookieBanner";
import Navigation from "@src/components/Navigation";
import Loading from "@src/components/Loading";
import useSmooth from "@src/hooks/useSmooth";

export default function Home(): ReactElement {
  const wrapper = useRef(null);
  const { smoothScroll } = useSmooth({ wrapper });
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [showMain, setShowMain] = useState<boolean>(false);
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
    setTimeout(() => {
      setShowMain(true);
    }, 2250);
    setTimeout(() => {
      setShowCookieBanner(true);
    }, 4000);
  }, []);

  useEffect(() => {
    smoothScroll();
  }, [wrapper.current, smoothScroll]);

  function onClickMore() {
    setShowNavigation(true);
    document.body.style.overflow = "hidden";
  }

  function onCloseMore() {
    setShowNavigation(false);
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {showLoading && <Loading />}
      {showNavigation && <Navigation onClose={onCloseMore} />}
      {showMain && (
        <>
          <Header onClickMore={onClickMore} />
          <main className="contents-section smooth-wrapper" ref={wrapper}>
            <div className="title">
              <div className="word-1">
                <span>I AM A</span>
              </div>
              <div className="word-2">
                <span>PROGRAMMER.</span>
              </div>
            </div>
            <div style={{ height: "300vh" }}></div>
          </main>
          <Footer />
        </>
      )}
      {showCookieBanner && <CookieBanner />}
    </>
  );
}
