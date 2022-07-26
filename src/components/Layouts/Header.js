import React from "react";
import {
    Menu,
    MenuContainer,
    NavbarWrapper,
    NavLogo,
    NavIcon,
    MenuNavHref,
    NavLanguage,
    NavLanguageText,
    NavLanguageIcon,
    NavMenuWrapper,
    NavMenuUl,
    MenuNavLi,
} from "../../assets/styles/LayoutStyles";
import { FaGlobe } from "react-icons/fa";
import { IconContext } from "react-icons";
import { bankLogo } from "../../assets/images/images";
const Header = () => {
    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Menu>
                <MenuContainer>
                    <NavbarWrapper>
                        <NavLogo to='/'>
                            <NavIcon src={bankLogo} alt='Bank One Logo' />
                        </NavLogo>

                        <NavMenuWrapper>
                            <NavMenuUl>
                                <MenuNavLi>
                                    <MenuNavHref to="/">Help</MenuNavHref>
                                </MenuNavLi>
                                <MenuNavLi>
                                    <MenuNavHref to="/">Privacy</MenuNavHref>
                                </MenuNavLi>
                                <MenuNavLi>
                                    <MenuNavHref to="/">Terms &amp; Conditions</MenuNavHref>
                                </MenuNavLi>
                                <MenuNavLi>
                                    <NavLanguage>
                                        <NavLanguageText>English</NavLanguageText>
                                        <NavLanguageIcon>
                                            <FaGlobe size="18px" />
                                        </NavLanguageIcon>
                                    </NavLanguage>
                                </MenuNavLi>
                            </NavMenuUl>
                        </NavMenuWrapper>
                    </NavbarWrapper>
                </MenuContainer>
            </Menu>
        </IconContext.Provider>
    );
};
export default Header;
