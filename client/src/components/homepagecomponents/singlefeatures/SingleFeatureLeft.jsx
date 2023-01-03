import {
  BannerContainer,
  BannerRow,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle
} from "./SingleFeatureStyles";

function SingleFeatureRight() {

  return (
    <BannerContainer>
      <BannerRow>
        <BannerContent>
          <BannerTitle variant="h2">
            Make conscious decisions in minutes
          </BannerTitle>
          <BannerDescription >
            Einkaufen wirkt sich auf den Planeten aus. Wenn du ein Klarna Bankkonto eröffnest, erhältst du eine Klarna Bankkarte für dein alltägliches Shopping.
          </BannerDescription>
        </BannerContent>
        <BannerImage src="./images/pic2.png" />
      </BannerRow>
    </BannerContainer>
  );
}

export default SingleFeatureRight;