import React, { useState } from "react";
import styled, { css } from "styled-components";
import AddingPopup from "../addingPopup/AddingPopup";
import CreditCard from "./CreditCard";

interface Props {}

function CreditCardList({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleFormSubmit = (formData: {}) => {
    setIsOpen(false);
    console.log(formData);
  };

  return (
    <OuterContainer>
      <p>Credit Cards</p>
      <CardsContainer>
        <CreditCard cardInfo={null} index={0} />
        <CreditCard cardInfo={null} index={1} />
        <CreditCard cardInfo={null} index={2} />
        <CreditCard cardInfo={null} index={3} />
        <CreditCard cardInfo={null} index={4} />
      </CardsContainer>
      <CreditCardAdd onClick={() => togglePopup()}>
        <img src="./assets/icons/plus-white.svg" alt="+" />
      </CreditCardAdd>
      {isOpen && (
        <AddingPopup
          closeHandler={togglePopup}
          handleSubmit={handleFormSubmit}
        />
      )}
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
