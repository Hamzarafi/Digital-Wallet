import moment from "moment";
import React from "react";
import styled from "styled-components";
import { Transaction } from "../../models/Objects/Transaction";
import { toTitleCase } from "../../utilities/utils";

interface Props {
  item: Transaction;
  isMobile: boolean;
}

function TransactionItem({ item, isMobile }: Props) {
  const iconType = () => {
    switch (item.category) {
      case "entertainment":
        return "./assets/icons/game.svg";
      case "grocery":
        return "./assets/icons/buy.svg";
      case "equipment":
        return "./assets/icons/camera.svg";
      case "office items":
        return "./assets/icons/work.svg";
      default:
        return "./assets/icons/buy.svg";
    }
  };

  return (
    <ItemContainer>
      <img
        className={`upperText ${isMobile ? "image40" : "image60"}`}
        src={`${iconType()}`}
      />
      <div className={`infoContainer ${isMobile ? "infoContainerMobile" : ""}`}>
        <InfoColumnContainer style={{ width: "120px" }}>
          <div className={`upperText${isMobile ? "Mobile" : ""}`}>
            {toTitleCase(item.category)}
          </div>
          <div className={`lowerText${isMobile ? "Mobile" : ""}`}>
            {moment(item.date).format("MMM DD")}
          </div>
        </InfoColumnContainer>
        <InfoColumnContainer className={`${isMobile ? "alignRight" : ""}`}>
          <div className={`upperText${isMobile ? "Mobile" : ""}`}>
            {parseFloat(item.amount).toFixed(3)}
          </div>
          <div className={`lowerText${isMobile ? "Mobile" : ""}`}>
            {item.company}
          </div>
        </InfoColumnContainer>
      </div>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: row;

  .infoContainer {
    display: flex;
    flex-direction: row;
  }
  .infoContainerMobile {
    width: 100%;
    justify-content: space-between;
  }

  .upperText {
    margin-bottom: 8px;
    font-weight: var(--fontWeight-medium);
  }
  .lowerText {
    color: var(--color-dark-grey);
  }
  .upperTextMobile {
    font-weight: var(--fontSize-mobile-sm);
  }
  .lowerTextMobile {
    color: var(--color-dark-grey);
    font-weight: var(--fontSize-xs);
  }
  .alignRight {
    text-align: end;
  }
  .image40 {
    width: 40px;
    height: 40px;
  }
  .image60 {
    width: 60px;
    height: 60px;
  }
`;

const InfoContainer = styled.div``;

const InfoColumnContainer = styled.div`
  margin-left: 12px;
`;

export default TransactionItem;
