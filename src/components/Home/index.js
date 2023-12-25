import React from "react";
import Navigation from "../Common/BottomNavigation";
import { Link } from "react-router-dom";
import {
  Container,
  Content,
  BigTextContainer,
  BigText,
  BalanceSection,
  MiniTitle,
  TotalBalance,
} from "../Common/Utils";
import CountUp from "react-countup";
import CreditCard from "../../Assets/card-front.png";
import cc2 from "../../Assets/cc2.png";
import TopBar from "../Common/TopBar";

import styles from "./Index.module.css";

function index() {
  return (
    <>
      <Container>
        {/* <TopBar /> */}
        <BigTextContainer padding={"50px 20px 10px 20px"}>
          <BigText>Bank</BigText>
          <BigText>Cards</BigText>

          <BalanceSection>
            <div>
              <MiniTitle>Balance</MiniTitle>
              <TotalBalance>
                $<CountUp end={2748.0} duration={1} delay={1} />
              </TotalBalance>
            </div>
          </BalanceSection>
        </BigTextContainer>
        <div className={styles.creditCard}>
          <Link to={"/creditCard"}>
            {" "}
            <img src={CreditCard} alt="" className={styles.photo} />
          </Link>
          <Link to={"/creditCard"}>
            {" "}
            <img src={cc2} alt="" className={styles.cc2} />
          </Link>
        </div>

        <Navigation />
      </Container>
    </>
  );
}

export default index;
