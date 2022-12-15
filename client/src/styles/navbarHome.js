import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "./Theme";

export const AppbarOuterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  background: Colors.body_bg,
  padding: '0 12px',
  
  [theme.breakpoints.down("md")]: {
    display: 'flex',
    flexDirection: "column",
    padding: "25px 30px 0 30px",
  },
}));

export const AppbarInnerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: 0,
  justifyContent: 'space-between',
  padding: '15px 8px',
  width: "1200px",
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    display: 'flex',
    marginTop: 0,
    justifyContent: 'space-between',
  },
  [theme.breakpoints.down("md")]: {
    margin: "auto",
    width: "100%",
    justifyContent: "center",
  },
}));

export const Logo = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "400px",
  [theme.breakpoints.down("md")]: {
    width: "300px",
  },
  // [theme.breakpoints.down("sm")]: {
  //   width: "120px",
  // },
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  color: Colors.black,
  borderColor: Colors.black,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));