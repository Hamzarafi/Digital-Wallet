import React, { useEffect, useState } from "react";
import {
  CreditCardList,
  Transactions,
  WelcomeComponent,
} from "../../components";
import { MOBILE_DIMENSION } from "../../utilities/utils";
import useWindowSize from "../../utilities/windowResize/windowResize";

//mobile view width less tha 950

function Home() {
  const [pageWidth] = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (pageWidth < MOBILE_DIMENSION) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [pageWidth]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="homeOuterContainer">
        <WelcomeComponent isMobile={isMobile} />
        <div className="homeInnerContainer">
          <CreditCardList isMobile={isMobile} />
          <Transactions />
        </div>
      </div>
    </div>
  );
}

export default Home;
