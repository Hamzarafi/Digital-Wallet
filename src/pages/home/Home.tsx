import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  CreditCardList,
  CreditCardListMobile,
  Transactions,
  WelcomeComponent,
} from "../../components";
import { Card, Response } from "../../models/Objects/Response";
import { MOBILE_DIMENSION } from "../../utilities/utils";
import useWindowSize from "../../utilities/windowResize/windowResize";

function Home() {
  const [pageWidth] = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);
  const [apiData, setApiData] = useState<Response>();
  const [selectedCard, setSelectedCard] = useState<Card>();

  useEffect(() => {
    if (pageWidth < MOBILE_DIMENSION) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [pageWidth]);

  useEffect(() => {
    fetch("https://62f63c8f612c13062b4997c6.mockapi.io/user/4846457457")
      .then((response) => response.json())
      .then((res) => {
        setApiData(res);
        if (res.cards && res.cards.length > 0) setSelectedCard(res.cards[0]);
      });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="homeOuterContainer">
        <WelcomeComponent
          isMobile={isMobile}
          firstName={apiData?.firstName}
          lastName={apiData?.lastName}
          gender={apiData?.gender}
        />
        <div
          className={`${
            isMobile ? "homeInnerMobileContainer" : "homeInnerContainer"
          }`}
        >
          {isMobile ? (
            <CreditCardListMobile
              cards={apiData?.cards}
              name={`${apiData?.firstName} ${apiData?.lastName}`}
              onCardClick={setSelectedCard}
            />
          ) : (
            <CreditCardList
              cards={apiData?.cards}
              name={`${apiData?.firstName} ${apiData?.lastName}`}
              onCardClick={setSelectedCard}
            />
          )}
          <Transactions
            isMobile={isMobile}
            selectedCard={selectedCard}
            currencyData={apiData?.currencyExchangeRates}
          />
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
