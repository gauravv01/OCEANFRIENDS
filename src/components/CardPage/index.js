import React, { useState } from "react";
import { styled } from "@mui/system";
import CardList from "./CardList";
import CountUp from "react-countup";
import { Fade, Flip, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {
  Container,
  Content,
  BigTextContainer,
  BigText,
  HorizontalCenter,
  ArrowIcon,
  CreditCard,
  CreditCardBack,
  BalanceSection,
  TotalBalance,
  IconBox,
  ListSection,
  CardContainer,
  MiniTitle,
} from "../Common/Utils";

const data = [
  {
    photoUri: require("../../Assets/image1.png"),
    title: "Card to card",
    subTitle: "Maria",
    price: "+ $143.00",
  },
  {
    photoUri: require("../../Assets/image2.png"),
    title: "Apple Music",
    subTitle: "Online",
    price: "+ $143.00",
  },
];

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: rotate(-90deg) translate3d(-200px,0,0);
  }

  to {
    opacity: 1;
    transform: rotate(0deg)  translate3d(0,0,0);
  
  }
`;

export default function CardPage() {
  const [tap, setTap] = useState(false);
  const enableTap = (e) => setTap(true);
  const disableTap = () => setTap(false);

  const disableContextMenu = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    return false;
  };
  return (
    <Container>
      <Content>
        <Link to={"/"}>
          {" "}
          <ArrowIcon src={require("../../Assets/arrow.png")} />
        </Link>

        <BigTextContainer>
          <BigText>Salary</BigText>
          <BigText>Card</BigText>
        </BigTextContainer>

        <HorizontalCenter>
          <Reveal keyframes={customAnimation}>
            <CardContainer>
              <CreditCard
                onMouseDown={enableTap}
                onMouseUp={disableTap}
                onTouchStart={enableTap}
                onTouchEnd={disableTap}
                onContextMenu={disableContextMenu}
                className={tap ? "hide" : ""}
                src={require("../../Assets/card-front.png")}
              />
              <CreditCardBack src={require("../../Assets/card-back.png")} />
            </CardContainer>
          </Reveal>
        </HorizontalCenter>

        {/* Balance Section */}
        <BalanceSection>
          <div>
            <MiniTitle>Balance</MiniTitle>
            <TotalBalance>
              $<CountUp end={2748.0} duration={1} delay={1} />
            </TotalBalance>
          </div>

          <div style={{ flexDirection: "row", display: "flex" }}>
            <IconBox>
              <img src={require("../../Assets/history.png")} alt="" />
            </IconBox>
            <IconBox>
              <img src={require("../../Assets/share.png")} alt="" />
            </IconBox>
          </div>
        </BalanceSection>
      </Content>

      <Zoom>
        <Content
          bgColor="#1C2641"
          style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          {/* List Section */}
          <Fade delay={2000}>
            <ListSection>
              <MiniTitle color="white">Today</MiniTitle>
              <CardList data={data} />
            </ListSection>
          </Fade>
        </Content>
      </Zoom>
    </Container>
  );
}
