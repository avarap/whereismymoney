import { Paper, Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "./Theme";



export const CTAOuterContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    width: "100%",
    background: Colors.body_bg,
 
    // [theme.breakpoints.down("md")]: {
    //   width: "100%",
    // },
  }));


export const CTAContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "1800px",
    height: "100%",
    marginTop: "150px",
    marginBottom: "300px",
    // [theme.breakpoints.down("md")]: {
    //   flexDirection: "column",
    //   alignItems: "center",
    //   padding: "20px 0",
    // },
  }));

  export const CTAPaper = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "50px 50px",
    background: Colors.light_pink,
    // [theme.breakpoints.down("md")]: {
    //   flexDirection: "column",
    //   alignItems: "center",
    //   padding: "20px 0",
    // },
    // backgroundImage: `url(/images/banner/banner.png)`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
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

  export const BannerContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginRight: "70px",
    alignItems: "left",
    width: 620,
    // [theme.breakpoints.down("md")]: {
    //   flexDirection: "column",
    //   paddingTop: "0px",
    //   alignItems: "center",
    //   maxWidth: 420,
    // },
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

  export const LogosSmartphone = styled("img")(({ theme }) => ({

    width: "120px",
    margin: "0 10px 0 0",
    [theme.breakpoints.down("md")]: {
      width: "350px",
      marginBottom: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "320px",
      height: "300px",
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
    [theme.breakpoints.down("md")]: {
      width: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "320px",
      height: "300px",
    },
  }));