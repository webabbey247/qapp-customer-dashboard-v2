import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { DashboardRTLContent, MainContentHeader, ProfileNav, ProfilePhoto } from '../../../assets/styles/LayoutStyles';
import { GeneralMdText, GeneralSmText } from '../../../assets/styles/GlobalStyles';
import { profilePhoto } from '../../../assets/images/images';

export const AgentCTABtn = styled.a`
background: transparent;
border: 1.5px solid #E46F24;
border-radius: 4px;
padding: 0.7rem 2rem;
margin: auto;
color: var(--gray);
width: 100%;
margin-right: 2rem;
font-weight: 400;
font-size:  16px;
line-height: 19px;

&:hover {
  background: var(--orange);
  border: 1px solid var(--orange);
}
`;

const MainContent = ({ children }) => {
  return (
    <DashboardRTLContent>
      <MainContentHeader>
        <GeneralMdText fontSize="28px" lineHeight="38px" color="var(--white)" fontWeight="700" margin="0.8rem 0" textTransform="unset">Welcome</GeneralMdText>

        <ProfileNav>
        <AgentCTABtn to="/dashboard">Switch to Agent</AgentCTABtn>
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