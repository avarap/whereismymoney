import { Box, Typography, Link, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../styles/Theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "60px 0",
  background: Colors.body_bg,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
  },
}));

export const BannerRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "1200px",
  height: "100%",
  padding: '0 12px',

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "0",
  },
}));

export const Stars = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: "30px",
  fontSize: "1.25rem",
  lineHeight: "1.6",
}));

export const UserRating = styled(Rating)(() => ({
  display: "flex",
  flexDirection: "row",
  fontWeight: "600",
  fontSize: "1.80rem",
  lineHeight: "1.6",
  letterSpacing: "0.0015em",
}));

export const ReviewsLink = styled(Link)(() => ({
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