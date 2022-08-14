import React from "react";
import styled, { css } from "styled-components";

interface Props {
  cardInfo: any;
  index: number;
}

function CreditCard({ cardInfo, index }: Props) {
  return (
    <OuterContainer index={index}>
      <ContentContainer>
        <LogoContainer>
          {"5142 8164 6526 2563".charAt(0) == "5" ? (
            <img
              src="assets/cardLogo/master.svg"
              style={{ marginTop: "-10px", marginBottom: "-10px" }}
            />
          ) : (
            <img src="assets/cardLogo/visa.svg" style={{ marginTop: "10px" }} />
          )}
        </LogoContainer>
        <NumberContainer>
          {"5142-8164-6526-2563".replaceAll("-", " ")}
        </NumberContainer>
        <LowerContainer>
          <div>
            <Label>{"Name".toUpperCase()}</Label>
            <FocusText>{"Zayn Malik".toUpperCase()}</FocusText>
          </div>
          <div>
            <Label>{"Valid Till".toUpperCase()}</Label>
            <FocusText>05/34</FocusText>
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
  letter-spacing: 5px;
`;
const LogoContainer = styled.div``;
const ContentContainer = styled.div`
  color: #ffffff;
  padding: 25px;
`;

const OuterContainer = styled("div")<{ index: number }>`
  margin-bottom: 23px;
  height: 174px;
  width: 312px;

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
