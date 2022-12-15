// import { useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerRow,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle
} from "../../styles/SingleFeature";

function SingleFeatureRight() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerRow>
      <BannerImage src="./images/pic3.png" />
      <BannerContent>
        <BannerTitle variant="h2">
        Keep your cashflow crystal clear
        </BannerTitle>
        <BannerDescription >
        Einkaufen wirkt sich auf den Planeten aus. Wenn du ein Klarna Bankkonto eröffnest, erhältst du eine Klarna Bankkarte für dein alltägliches Shopping.
        </BannerDescription>
      </BannerContent>
      </BannerRow>
    </BannerContainer>
  );
}

export default SingleFeatureRight;