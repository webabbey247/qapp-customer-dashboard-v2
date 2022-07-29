import React from 'react';
import { DashboardRTLContent, MainContentHeader, ProfileNav, ProfilePhoto } from '../../../assets/styles/LayoutStyles';
import { GeneralMdText, GeneralSmText } from '../../../assets/styles/GlobalStyles';
import { profilePhoto } from '../../../assets/images/images';

const MainContent = ({ children }) => {
  return (
    <DashboardRTLContent>
      <MainContentHeader>
        <GeneralMdText fontSize="28px" lineHeight="38px" color="var(--white)" fontWeight="700" margin="0.8rem 0" textTransform="unset">Welcome</GeneralMdText>
        <ProfileNav>
          <GeneralSmText textAlign="left" fontSize="14px" lineHeight="19px" color="var(--white)" fontWeight="500" margin="1.2rem 0" textTransform="unset">BVN: 2334********9</GeneralSmText>
          <GeneralSmText textAlign="left" fontSize="14px" lineHeight="19px" color="var(--white)" fontWeight="500" margin="1.2rem 0.2rem" textTransform="unset">Hello, Adedamola</GeneralSmText>
          <ProfilePhoto src={profilePhoto} alt='Adedamola Alausa' />
        </ProfileNav>
      </MainContentHeader>
      {children}
    </DashboardRTLContent>
  )
}

export default MainContent;