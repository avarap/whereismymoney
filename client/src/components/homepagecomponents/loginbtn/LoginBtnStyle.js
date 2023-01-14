import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../styles/Theme";

export const LoginButton = styled(Typography)(({ theme }) => ({
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
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
  }
}));