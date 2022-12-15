import { Typography } from "@mui/material";
// import { useTheme } from "@mui/system";
import GoogleIcon from '@mui/icons-material/Google';

import {
  BannerContainer,
  BannerRow,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerButton,
  BannerTitle,
  Stars,
  UserRating,
  ReviewsLink
} from "../../styles/HeroSectionStyles";

function HeroSection() {
  // const theme = useTheme("#1A2027");
  // const matches = useMediaQuery(theme.breakpoints.down("md"));
  const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google`,
			"_self"
		);
	};

  return (
    <BannerContainer >
      <BannerRow>
      <BannerContent>
        <BannerTitle variant="h1">
          Managing money, made simple
        </BannerTitle>

        <BannerDescription >
        Spend, save, and give toward what's important in life
        </BannerDescription>
        <Typography variant="h6">Trusted by over 30 million users </Typography>
        <Stars>
        <UserRating name="half-rating-read" value={4.7} defaultValue={2.5} precision={0.5} readOnly /> <Typography variant="h6" style={{margin: "0 7px"}}>4.7 of 5 </Typography><ReviewsLink to="#" variant="h6">Read reviews</ReviewsLink>
        </Stars>
        <BannerButton color="primary" onClick={googleAuth}><GoogleIcon style={{marginRight: "10px"}} />  SIGN UP WITH GOOGLE </BannerButton>
      </BannerContent>
      <BannerImage src="./images/pic1.png" />
      </BannerRow>
    </BannerContainer>
  );
}

export default HeroSection;