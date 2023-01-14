import React from 'react'
import { Typography } from '@mui/material';
import LoginBtn from "../loginbtn/LoginBtn";


import {
    CTAContainer,
    CTAPaper,
    BannerDescription,
    BannerImage,
    BannerContent,
    CTAOuterContainer,
    LogosSmartphone,
    BoxSmartphone,
    BannerTitle
} from "./CTAStyles";

function CTA() {

    return (
        <CTAOuterContainer maxWidth={false} disableGutters>
            <CTAContainer maxWidth="xl">
                <CTAPaper elevation={3}>
                    <BannerContent>
                        <BannerTitle variant='h2'>All your accounts. <br />All in one place.</BannerTitle>
                        <BannerDescription>Schließen Sie sich über 20.000 Pleo-Kund:innen an. Jetzt mit der kostenlosen Testversion starten.</BannerDescription>
                        <LoginBtn />
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
