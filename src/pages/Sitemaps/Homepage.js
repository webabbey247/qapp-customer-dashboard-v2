import React from 'react';
import MainLayout from '../../components/Layouts/MainLayout';
import { GeneralLgText, GeneralSmText } from '../../assets/styles/GlobalStyles';
import { HomeSection, ContentContainer, HeroBannerTop, HeroBannerCta, InternalCta, ThemedText, HeroImgContainer } from '../../assets/styles/HomeStyles';

const Homepage = () => {
    return (
        <MainLayout>
            <HomeSection>
                <ContentContainer>
                    <HeroBannerTop>
                        <GeneralLgText fontSize="43px" lineHieght="55.6px" textAlign="center" color='var(--orange)'>Manage your finances with ease</GeneralLgText>
                        <GeneralSmText fontSize="20px" lineHeight="28px" textAlign="center" color='var(--white)' margin="10px 0" textTransform="unset" padding="0 8rem">Transfer money, pay bills, apply for loan, top up etc all in on place</GeneralSmText>
                        <HeroBannerCta to="/">Get started</HeroBannerCta>
                        <InternalCta to="/auth/sign-up">Not a customer? <ThemedText>Create an account.</ThemedText></InternalCta>
                    </HeroBannerTop>
                    <HeroImgContainer />
                </ContentContainer>
            </HomeSection>
        </MainLayout>
    )
}

export default Homepage;