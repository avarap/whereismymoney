import { Box, Typography, Link, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "./Theme";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "60px 0",
  background: Colors.light_pink,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
  },
  // backgroundImage: `url(/images/banner/banner.png)`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
}));

export const BannerRow = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "1200px",
  height: "100%",
  padding: '0 12px',

  background: Colors.light_pink,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "0",
  },
}));

export const Stars = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: "30px",
  fontSize: "1.25rem",
  lineHeight: "1.6",
  // letterSpacing: "0.0075em",
}));

export const UserRating = styled(Rating)(({ matches, theme }) => ({
  display: "flex",
  flexDirection: "row",
  fontWeight: "600",
  fontSize: "1.80rem",
  lineHeight: "1.6",
  letterSpacing: "0.0015em",
}));

export const ReviewsLink = styled(Link)(({ matches, theme }) => ({
  fontWeight: "600",
  color: "#5624d0",
  textDecorationColor: "#5624d0",
}));


export const BannerContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  paddingTop: "50px",
  maxWidth: 520,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    paddingTop: "0px",
    alignItems: "center",
    maxWidth: 420,
  },
}));

export const BannerImage = styled("img")(({ theme }) => ({

  width: "500px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
    marginBottom: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.1,
  fontSize: "56px",
  marginBottom: "20px",
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
    textAlign: "center",
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
    textAlign: "center"
  },
}));

export const BannerButton = styled(Typography)(({ theme }) => ({
  width: "270px",
  height: "55px",
  borderRadius: "5px",
  border: "none",
  outline: "none",
  backgroundColor: Colors.black,
  boxShadow: "1px 2px 2px #2c444e8c",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0 0 20px 0",
  color: Colors.white,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  }
}));