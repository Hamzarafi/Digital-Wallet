import React from "react";
import styled, { css } from "styled-components";
import CreditCard from "./CreditCard";

interface Props {
  isMobile: boolean;
}

function CreditCardList({ isMobile }: Props) {
  return (
    <OuterContainer>
      {!isMobile && <p>Credit Cards</p>}
      <CardsContainer>
        <CreditCard cardInfo={null} index={0} />
        <CreditCard cardInfo={null} index={1} />
        <CreditCard cardInfo={null} index={2} />
        <CreditCard cardInfo={null} index={3} />
        <CreditCard cardInfo={null} index={4} />
        <CreditCard cardInfo={null} index={4} />
      </CardsContainer>
      <CreditCardAdd onClick={() => console.log("addClicked")}>
        <img src="./assets/icons/plus-white.svg" alt="+" />
      </CreditCardAdd>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  margin: 0 8px;
  background: #ffffff;
  border-radius: 8px;
  height: 100%;

  p {
    margin: 20px 0px 32px 49px;
    font-size: var(--fontSize-lg);
    font-weight: var(--fontWeight-medium);
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 400px;
  overflow-y: scroll;
  height: calc(100% - 80px);
`;

const CreditCardAdd = styled.div`
  background: var(--color-brand);
  height: 60px;
  width: 60px;
  border-radius: 30px;
  position: relative;
  top: -30px;
  left: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CreditCardList;
