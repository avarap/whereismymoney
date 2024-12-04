import {Typography} from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterTitle = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  marginBottom: "1em",
  [theme.breakpoints.down("xs")]: {
    fontSize: "20px",
  },
}));
