import React, { useState } from "react";
import {
  Container,
  Content,
  ListSection,
  MiniTitle,
  BigTextContainer,
  BigText,
  Price,
} from "../../components/Common/Utils";
import CardList from "../CardPage/CardList";
import Navigation from "../Common/BottomNavigation";
import { Fade, Flip, Zoom } from "react-awesome-reveal";
import styles from "./Index.module.css";

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
  {
    photoUri: require("../../Assets/image3.png"),
    title: "Uber",
    subTitle: "Service",
    price: "+ $143.00",
  },
  {
    photoUri: require("../../Assets/image3.png"),
    title: "Uber",
    subTitle: "Service",
    price: "+ $143.00",
  },
  {
    photoUri: require("../../Assets/image1.png"),
    title: "Card to card",
    subTitle: "Maria",
    price: "+ $143.00",
  },
];
const data2 = [
  {
    photoUri: require("../../Assets/image1.png"),
    title: "Card to card",
    subTitle: "Maria",
    price: "+ $143.00",
  },
];

export default function History() {
  const [tap, setTap] = useState(false);
  const enableTap = (e) => setTap(true);
  const disableTap = () => setTap(false);

  const disableContextMenu = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    return false;
  };
  return (
    <Container position="relative">
      <Content style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        {/* List Section */}
        <ListSection background="inherit">
          <BigTextContainer>
            <BigText>History</BigText>
          </BigTextContainer>
          <Price>20 April</Price>
          <CardList data={data} />
          <Price>12 March</Price>
          <CardList data={data2} />
        </ListSection>
      </Content>
      <Navigation position={"absolute"} bottom={0} />
    </Container>
  );
}
