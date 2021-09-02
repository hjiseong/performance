import React, { ReactElement, useState } from "react";

export default function CookieBanner(): ReactElement {
  const [isClosed, setIsClosed] = useState<boolean>(false);

  return (
    <section
      className={
        isClosed ? "cookie-banner-section close" : "cookie-banner-section"
      }
    >
      <div className="cookie-banner-container">
        <div className="description">
          <div>
            This website uses cookies to ensure you get the best experience.
            <a className="policy-link" href="#">
              privacy policy
            </a>
          </div>
        </div>
        <button className="accept-cookie" onClick={() => setIsClosed(true)}>
          accept cookies
        </button>
        <button
          className="cookie-banner-close"
          onClick={() => setIsClosed(true)}
        >
          X
        </button>
      </div>
    </section>
  );
}
