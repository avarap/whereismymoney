import React from 'react'
import { Typography} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';


import {
    CTAContainer,
    CTAPaper,
    BannerButton,
    BannerDescription,
    BannerImage,
    BannerContent,
    CTAOuterContainer,
    LogosSmartphone,
    BoxSmartphone,
    BannerTitle
} from "../../styles/CTAStyles";

function CTA() {

    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google`,
            "_self"
        );
    };
    return (
        <CTAOuterContainer maxWidth={false} disableGutters>
            <CTAContainer maxWidth="xl">
                <CTAPaper elevation={3}>
                    <BannerContent>
                        <BannerTitle variant='h2'>All your accounts. <br />All in one place.</BannerTitle>
                        <BannerDescription>Schließen Sie sich über 20.000 Pleo-Kund:innen an. Jetzt mit der kostenlosen Testversion starten.</BannerDescription>
                        <BannerButton color="primary" onClick={googleAuth}><GoogleIcon style={{ marginRight: "10px" }} />  SIGN UP WITH GOOGLE </BannerButton>
                        <Typography>Available in:</Typography>
                        <BoxSmartphone>
                            <LogosSmartphone src="./images/appstore.svg" /><LogosSmartphone src="./images/googleplay.svg" />
                        </BoxSmartphone>
                    </BannerContent>
                    <BannerImage src="./images/mockup.png" />

                </CTAPaper>

            </CTAContainer>
        </CTAOuterContainer>
    )
}

export default CTA;
