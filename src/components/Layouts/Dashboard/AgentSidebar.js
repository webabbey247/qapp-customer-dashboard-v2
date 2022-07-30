import React from 'react';
import { DashboardLTRContent, SidebarHeader, SidebarHeaderLogo, SidebarNav, SidebarFooter, SidebarNavGroup, SidebarNavGroupList, SidebarNavLink,SidebarSubNav, SidebarSubNavLink, SidebarNavLinkLogo } from '../../../assets/styles/LayoutStyles';
import { bankLogoH, logoutIcon, messageIcon, dashboardIcon, activityIcon, cardIcon, loanIcon, settingsIcon } from '../../../assets/images/images';
import { NavLink } from 'react-router-dom';

const AgentSidebar = () => {
    return (
        <>
            <DashboardLTRContent>
                <SidebarHeader>
                    <SidebarHeaderLogo src={bankLogoH} alt="Bank One" />
                </SidebarHeader>
                <SidebarNav>
                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/agents/dashboard">
                                <SidebarNavLinkLogo src={dashboardIcon} alt='Agent Dashboard' />
                                <>Dashboard</>
                            </SidebarNavLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup>

                 

                </SidebarNav>


                <SidebarFooter>

                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/">
                                <SidebarNavLinkLogo src={logoutIcon} alt='Logout' />
                                <>Logout</>
                            </SidebarNavLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup>
                </SidebarFooter>
            </DashboardLTRContent>
        </>
    )
}

export default AgentSidebar