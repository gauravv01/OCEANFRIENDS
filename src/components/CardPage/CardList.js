import React from "react";
import { styled } from "@mui/system";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import {
  Row,
  Image,
  Title,
  SubTitle,
  MiniTitle,
  Price,
  CardInfo,
} from "../Common/Utils";

export default function CardList({ data }) {
  return (
    <>
      {data.map((item) => (
        <Accordion classes={{ root: "accordion_root" }}>
          <AccordionSummary
            classes={{ root: "custom_root", content: "no_margin" }}>
            <Row>
              <Image src={item.photoUri} />
              <CardInfo>
                <Title>{item.title}</Title>
                <SubTitle>{item.subTitle}</SubTitle>
              </CardInfo>
              <Price>{item.price}</Price>
            </Row>
          </AccordionSummary>

          <AccordionDetails classes={{ root: "details_custom_root" }}>
            <SubTitle>XXXXXXXXXXX6479</SubTitle>
            <SubTitle>21/09/2023</SubTitle>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
