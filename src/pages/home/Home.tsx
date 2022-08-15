import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  CreditCardList,
  CreditCardListMobile,
  Transactions,
  WelcomeComponent,
} from "../../components";
import { MOBILE_DIMENSION } from "../../utilities/utils";
import useWindowSize from "../../utilities/windowResize/windowResize";

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
        <div
          className={`${
            isMobile ? "homeInnerMobileContainer" : "homeInnerContainer"
          }`}
        >
          {isMobile ? <CreditCardListMobile /> : <CreditCardList />}
          <Transactions isMobile={isMobile} />
        </div>
      </div>
      {isMobile && (
        <MobileMenuDesign>
          <img src="./assets/icons/home.svg" alt="home" />
          <img src="./assets/icons/category.svg" alt="category" />
          <img src="./assets/icons/graph.svg" alt="graph" />
          <img src="./assets/icons/setting.svg" alt="setting" />
        </MobileMenuDesign>
      )}
    </div>
  );
}

const MobileMenuDesign = styled.div`
  background: #fff;
  padding: 20px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default Home;
