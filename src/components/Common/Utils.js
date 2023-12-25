import { styled } from "@mui/system";

export const Container = styled("div")(({ theme, position }) => ({
  width: 350,
  margin: "0 auto",
  height: "750px",
  background: "#313b5a",
  color: "#FFFFFF",
  position: position,
  [theme.breakpoints.up("sm")]: {
    margin: "50px auto",
  },
  [theme.breakpoints.only("xs")]: {
    width: "100%",
  },
}));

export const Content = styled("div")(({ bgColor }) => ({
  background: bgColor || "transparent",
  padding: 20,
  width: "100%",
}));

export const BigTextContainer = styled("div")(({ padding }) => ({
  margin: "20px 0",
  padding: padding,
}));

export const BigText = styled("div")({
  fontSize: "32px",
  fontFamily: "Poppins",
  fontWeight: "700",
  lineHeight: "41px",
  letterSpacing: "0.37px",
});

export const HorizontalCenter = styled("div")({
  textAlign: "center",
});

export const ArrowIcon = styled("img")({
  width: 20,
  height: 20,
});

export const CreditCard = styled("img")({
  marginBottom: 30,
  width: "100%",
  transition: "opacity 0.5s",
});

export const CreditCardBack = styled(CreditCard)({
  position: "absolute",
  left: "0",
  top: "0",
  zIndex: "-1",
});

export const BalanceSection = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
});

export const TotalBalance = styled(BigText)({
  fontSize: 26,
});

export const IconBox = styled("div")({
  width: 45,
  height: 45,
  border: "1px solid #FFFFFF33",
  borderRadius: 10,
  textAlign: "center",
  marginLeft: 10,
  "& img": {
    width: "50%",
    height: "auto",
    marginTop: "12px",
  },
});

export const ListSection = styled("div")(({ background }) => ({
  background: background || "#1c2641",
  padding: "20px 0",
}));

export const CardContainer = styled("div")({
  position: "relative",
});

export const Row = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginLeft: -13,
  width: "100%",
});

export const Image = styled("img")({
  width: 80,
});

export const Title = styled("div")({
  fontWeight: "500",
  lineHeight: "26px",
  letterSpacing: "0.30px",
  color: "white",
});

export const SubTitle = styled(Title)({
  color: "#94A3D3",
  fontSize: 14,
});

export const MiniTitle = styled("div")({
  color: "#94A3D3",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "26px",
  letterSpacing: "0.30px",
  wordWrap: "break-word",
});

export const Price = styled(MiniTitle)({
  color: "white",
});

export const CardInfo = styled("div")({
  flex: 1,
});
