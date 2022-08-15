import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { toTitleCase } from "../../utilities/utils";

interface Props {
  isMobile: boolean;
}

interface ITextStyled {
  isMobile: boolean;
}

function WelcomeComponent({ isMobile }: Props) {
  //static test

  const gender = "male";
  const firstName = "zayn";
  const lastName = "malik";

  //end

  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const now: Date = new Date();
    const time: number = now.getHours();

    if (time < 12 && time >= 6) {
      setGreeting("Good Morning");
    } else if (time < 18 && time >= 12) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  function getGenderTitle(gender: string) {
    switch (gender) {
      case "male":
        return "Mr.";
      case "female":
        return "Mrs.";
      default:
        return "";
    }
  }

  return (
    <OuterContainer>
      <GreetingContainer isMobile={isMobile}>{greeting}</GreetingContainer>
      <NameContainer isMobile={isMobile}>{`${getGenderTitle(
        gender
      )} ${toTitleCase(firstName)} ${toTitleCase(lastName)}`}</NameContainer>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  line-height: 30px;
  margin-bottom: 24px;
  padding-left: 8px;
`;
const GreetingContainer = styled("div")<ITextStyled>`
  color: var(--color-dark-grey);
  font-size: var(--fontSize-lg);

  ${(props) =>
    props.isMobile &&
    css`
      font-size: var(--fontSize-sm);
    `}
`;
const NameContainer = styled("div")<ITextStyled>`
  font-size: var(--fontSize-lg);
  font-weight: var(--fontWeight-medium);

  ${(props) =>
    props.isMobile &&
    css`
      font-size: var(--fontSize-sm);
    `}
`;

export default WelcomeComponent;
