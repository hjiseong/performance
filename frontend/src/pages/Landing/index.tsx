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
import LandingHome from "./inner/LandingHome";
import LandingBlog from "./inner/LandingBlog";

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
              <Route exact path="/" component={LandingHome} />
              <Route path="/about" component={LandingAbout} />
              <Route path="/careers" component={LandingCareers} />
              <Route path="/contact" component={LandingContact} />
              <Route path="/blog" component={LandingBlog} />
              <Route>
                <LandingHome />
              </Route>
            </Switch>
            <Footer />
          </main>
        </>
      )}
      {showCookieBanner && <CookieBanner />}
    </>
  );
}
