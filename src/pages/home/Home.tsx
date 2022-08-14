import React from "react";
import {
  CreditCardList,
  Transactions,
  WelcomeComponent,
} from "../../components";

function Home() {
  return (
    <div className="homeOuterContainer">
      <WelcomeComponent />
      <div className="homeInnerContainer">
        <CreditCardList />
        <Transactions />
      </div>
    </div>
  );
}

export default Home;
