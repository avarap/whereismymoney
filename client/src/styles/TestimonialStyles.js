import { Typography, Box, Grid, Paper, Rating} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../styles/Theme";


  export const TestimonialContainer = styled(Box)(({ theme }) => ({
    backgroundColor: Colors.light_pink, 
    display: "flex", 
    flexWrap: "wrap", 
    padding: " 60px 15px 100px 15px",
  }));

  export const TestimonialGridContainer = styled(Grid)(({ theme }) => ({
    justifyContent: "center",
  }));

  
  export const TestimonialItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: "flex" 
  }));
  
  
  export const TestimonialBox = styled(Box)(({ theme }) => ({
    fontSize: "2em",
  }));


  export const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "column",
      },
  }));

  export const TestimonialImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "150px",
  }));

  export const UserName  = styled(Typography)(({ theme }) => ({
    lineHeight: 1,
    fontSize: "1.2em",
    margin: "10px 20px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1em",
      },
  }));

  export const UserRating  = styled(Rating)(({ theme }) => ({
    lineHeight: 1,
    fontSize: "1.2em",
    color: "#f1c40f",
  }));

  export const UserTestimonial = styled(Typography)(({ theme }) => ({
    lineHeight: 1.1,
    fontSize: "0.9em",
    margin: "10px 20px",
    [theme.breakpoints.between("lg", "xl")]: {
      fontSize: "0.7em",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "0.8em",
      },
  }));





  