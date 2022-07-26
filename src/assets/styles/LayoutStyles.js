import styled from "styled-components";
import {Link} from "react-router-dom";

export const MainContainer = styled.div`
background: var(--primary);
padding: 0 !important;
margin-right: auto;
margin-left: auto;
display: flex;
flex-direction: column;
min-height: 100vh;
// justify-content: center;
`;

export const Menu = styled.nav`
  background: var(--primary);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: background-color 0.3s ease-in;
  top: 0;
  position: sticky;
  z-index: 1020;
`;

export const MenuContainer = styled.div`
width: min(100%, 85rem);
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  z-index: 50;
`;

export const NavMenuWrapper = styled.div`
display: flex;
flex-basis: auto;
flex-grow: 1;
align-items: center;
`;

export const NavMenuUl = styled.ul`
flex-direction: row;
margin-left: auto !important;
display: flex;
padding-left: 0;
list-style: none;
margin-bottom: 15px;
`;


export const MenuNavLi = styled.li`
display: inline-block;
line-height: 40px;
margin-right: 25px;
animation: FadeIn 1s cubic-bezier(.65,.05,.36,1);
animation-fill-mode: both;
margin-top: 15px;

&:last-child {
    margin-right: 0;
}
`;

export const MenuNavHref = styled(Link)`
color: var(--white);
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #F7F7F7;
text-decoration: none;
`;


export const NavIcon = styled.img`
  margin-right: 1rem;
  width: 40px;
  margin-top: 2rem;
  height: 50px;
`;

export const NavLanguage = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.35rem;
`;

export const NavLanguageText = styled.p`
color: var(--white);
font-weight: 400;
font-size: 16px;
line-height: 19px;
  margin: 5px;
`;

export const NavLanguageIcon = styled.span`
  margin-left: 0.2rem;
`;

export const NavNightMood = styled.span`
  margin-left: 1rem;
`;

export const NavLanguageDropdownIcon = styled.span`
  margin-left: 0.2rem;
`;
