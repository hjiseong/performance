import React, { ReactElement, useEffect, useRef, useState } from "react";
import Header from "@src/components/Header";
import Footer from "@src/components/Footer";
import CookieBanner from "@src/components/CookieBanner";
import Navigation from "@src/components/Navigation";
import Loading from "@src/components/Loading";
import useSmooth from "@src/hooks/useSmooth";
import { Route, Switch } from "react-router-dom";
import LandingAbout from "./inner/LandingAbout";
import LandingCareers from "./inner/LandingCareers";
import LandingContact from "./inner/LandingContact";
import LandingNews from "./inner/LandingNews";
import LandingPledge from "./inner/LandingPledge";
import LandingThinking from "./inner/LandingThinking";
import LandingWork from "./inner/LandingWork";

export default function Landing(): ReactElement {
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
            <Switch>
              <Route exact path="/" component={LandingWork} />
              <Route path="/work" component={LandingWork} />
              <Route path="/about" component={LandingAbout} />
              <Route path="/news" component={LandingNews} />
              <Route path="/thinking" component={LandingThinking} />
              <Route path="/pledge" component={LandingPledge} />
              <Route path="/careers" component={LandingCareers} />
              <Route path="/contact" component={LandingContact} />
            </Switch>
          </main>
          <Footer />
        </>
      )}
      {showCookieBanner && <CookieBanner />}
    </>
  );
}
