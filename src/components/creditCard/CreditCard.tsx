import moment from "moment";
import React from "react";
import styled, { css } from "styled-components";
import { Card } from "../../models/Objects/Response";

interface Props {
  cardInfo: Card;
  index: number;
  name: string;
  onCardClick: (c: Card) => void;
}

function CreditCard({ cardInfo, index, name, onCardClick }: Props) {
  return (
    <OuterContainer index={index} onClick={() => onCardClick(cardInfo)}>
      <ContentContainer>
        <LogoContainer>
          {cardInfo.cardNumber.charAt(0) == "5" ? (
            <img
              src="assets/cardLogo/master.svg"
              style={{ marginTop: "-10px", marginBottom: "-10px" }}
            />
          ) : (
            <img src="assets/cardLogo/visa.svg" style={{ marginTop: "10px" }} />
          )}
        </LogoContainer>
        <NumberContainer>
          {cardInfo.cardNumber.replaceAll("-", " ")}
        </NumberContainer>
        <LowerContainer>
          <div>
            <Label>NAME</Label>
            <FocusText>{name.toUpperCase()}</FocusText>
          </div>
          <div>
            <Label>VALID TILL</Label>
            <FocusText>
              {moment(cardInfo.cardExpiration).format("MM/YY")}
            </FocusText>
          </div>
        </LowerContainer>
      </ContentContainer>
    </OuterContainer>
  );
}

const FocusText = styled.div`
  font-size: var(--fontSize-md);
  font-weight: 600;
`;
const Label = styled.div`
  font-size: var(--fontSize-xs);
`;
const LowerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NumberContainer = styled.div`
  margin: 15px 0;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 3px;
`;
const LogoContainer = styled.div``;
const ContentContainer = styled.div`
  color: #ffffff;
  padding: 25px;
`;

const OuterContainer = styled("div")<{ index: number }>`
  margin-bottom: 23px;
  margin-right: 5px;
  height: 174px;
  width: 312px;
  font-family: "IBM Plex Mono";

  backdrop-filter: blur(81.7297px);

  ${(props) =>
    props.index % 4 == 0 &&
    css`
      background-image: url("/assets/cards/gousian-layer0.png");
    `}

  ${(props) =>
    props.index % 4 == 1 &&
    css`
      background-image: url("/assets/cards/gousian-layer1.png");
    `}

      ${(props) =>
    props.index % 4 == 2 &&
    css`
      background-image: url("/assets/cards/gousian-layer2.png");
    `}

        ${(props) =>
    props.index % 4 == 3 &&
    css`
      background-image: url("/assets/cards/gousian-layer3.png");
    `}
`;
export default CreditCard;
