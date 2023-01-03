import { Typography } from "@mui/material";
import LoginBtn from "../loginbtn/LoginBtn";

import {
  BannerContainer,
  BannerRow,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
  Stars,
  UserRating,
  ReviewsLink
} from "./HeroSectionStyles";

function HeroSection() {

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
            <UserRating name="half-rating-read" value={4.7} defaultValue={2.5} precision={0.5} readOnly /> <Typography variant="h6" style={{ margin: "0 7px" }}>4.7 of 5 </Typography><ReviewsLink to="#" variant="h6">Read reviews</ReviewsLink>
          </Stars>
          <LoginBtn />
        </BannerContent>
        <BannerImage src="./images/pic1.png" />
      </BannerRow>
    </BannerContainer>
  );
}

export default HeroSection;