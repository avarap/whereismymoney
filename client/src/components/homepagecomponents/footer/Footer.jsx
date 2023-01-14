import { Grid, List, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../../styles/Theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FooterTitle } from "./FooterStyles";

export default function Footer() {
  return (
    <><Box
      sx={{
        background: Colors.black,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        // fontSize: { xs: '12px', md: '16px' }
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} md={5} lg={3} style={{ paddingRight: "20px" }}>
          <FooterTitle variant="body2">About us</FooterTitle>
          <Typography variant="caption2" style={{ marginTop: "20px" }}>
            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
            incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud.
          </Typography>
          <Box
            sx={{
              mt: 1,
              color: Colors.light_pink,
              fontSize: "2.5rem",
            }}
          >
            <FacebookIcon sx={{ mr: 1, fontSize: "1.1em" }} />
            <TwitterIcon sx={{ mr: 1, fontSize: "1.1em" }} />
            <InstagramIcon sx={{ mr: 1, fontSize: "1.1em" }} />
          </Box>
        </Grid>
        <Grid item xs={3} md={3} lg={2}>
          <FooterTitle variant="body2">information</FooterTitle>
          <List style={{ paddingTop: "0px" }}>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item xs={3} md={3} lg={2}>
          <FooterTitle variant="body2">my account</FooterTitle>
          <List style={{ paddingTop: "0px" }}>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
      <Box sx={{
        background: Colors.black,
        color: Colors.white,
        p: { xs: 4, md: 4 },
        pt: 12,
        pb: 12,
        display: "flex",
        justifyContent: "center",
        fontSize: { xs: '12px', md: '16px' }
      }}>
        <Typography>Made with ❤️ from Valencia & Berlin</Typography>
      </Box>
    </>
  );
}