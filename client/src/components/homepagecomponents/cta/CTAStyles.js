import { Paper, Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../styles/Theme";


export const CTAOuterContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: "0 auto",
  width: "100%",
  background: Colors.body_bg,
}));

export const CTAContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "1800px",
  height: "100%",
  marginTop: "150px",
  marginBottom: "300px",
  [theme.breakpoints.down("lg")]: {
    marginTop: "50px",
    marginBottom: "100px",
  },
  [theme.breakpoints.down("md")]: {
    margin: "50px auto",
    width: "100%",
  },

}));

export const CTAPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "50px 50px",
  background: Colors.light_pink,
  [theme.breakpoints.down("xl")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const BannerContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginRight: "70px",
  alignItems: "left",
  width: 620,
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: "0px",
    padding: "20px 0 0 0",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.1,
  fontSize: "56px",
  marginBottom: "20px",
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
    textAlign: "center",
    lineHeight: 1,
  }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  fontSize: "1.5em",
  letterSpacing: 1.25,
  marginBottom: "1em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
    textAlign: "center",
    width: "100%",
    padding: "50px 50px",
  },
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    fontSize: "1em",
    letterSpacing: 1.15,
    marginBottom: "1.5em",
    textAlign: "center",
    width: "90%",

  },
}));

export const LogosSmartphone = styled("img")(({ theme }) => ({

  width: "120px",
  margin: "0 10px 0 0",
  [theme.breakpoints.down("md")]: {
    width: "100px",
    marginBottom: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100px",
  },
}));

export const BoxSmartphone = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: "5px",

}));

export const BannerImage = styled("img")(({ theme }) => ({

  width: "800px",
  marginRight: "-150px",
  marginBottom: "-250px",
  [theme.breakpoints.down('xl')]: {
    width: "700px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "450px",
    marginRight: "0px",
    marginBottom: "0px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));