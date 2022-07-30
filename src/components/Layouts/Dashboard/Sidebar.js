import React from 'react';
import { DashboardLTRContent, SidebarHeader, SidebarHeaderLogo, SidebarNav, SidebarFooter, SidebarNavGroup, SidebarNavGroupList, SidebarNavLink,SidebarSubNav, SidebarSubNavLink, SidebarNavLinkLogo } from '../../../assets/styles/LayoutStyles';
import { bankLogoH, logoutIcon, messageIcon, dashboardIcon, activityIcon, cardIcon, loanIcon, settingsIcon } from '../../../assets/images/images';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <DashboardLTRContent>
                <SidebarHeader>
                    <SidebarHeaderLogo src={bankLogoH} alt="Bank One" />
                </SidebarHeader>
                <SidebarNav>
                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/dashboard/">
                                <SidebarNavLinkLogo src={dashboardIcon} alt='Dashboard' />
                                <>Dashboard</>
                            </SidebarNavLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup>

                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/dashboard/transactions-history">
                                <SidebarNavLinkLogo src={activityIcon} alt='Activity' />
                                <>Activity</>
                            </SidebarNavLink>
                           <SidebarSubNav>
                           <SidebarSubNavLink to="/dashboard/transactions-history">Transaction History</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/transfer">Transfer</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/top-up">Top up</SidebarSubNavLink>
                            <SidebarSubNavLink to="/dashboard/utility">Utility</SidebarSubNavLink>
                            </SidebarSubNav>
                        </SidebarNavGroupList>
                    </SidebarNavGroup>

                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/">
                                <SidebarNavLinkLogo src={cardIcon} alt='Cards' />
                                <>Cards</>
                            </SidebarNavLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup>

                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/dashboard/loan">
                                <SidebarNavLinkLogo src={loanIcon} alt='Loan' />
                                <>Loan</>
                            </SidebarNavLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup>

                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/dashboard/settings">
                                <SidebarNavLinkLogo src={settingsIcon} alt='Settings' />
                                <>Settings</>
                            </SidebarNavLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup>

                </SidebarNav>


                <SidebarFooter>
                    <SidebarNavGroup>
                        <SidebarNavGroupList>
                            <SidebarNavLink to="/">
                                <SidebarNavLinkLogo src={messageIcon} alt='Support' />
                                <>Support</>
                            </SidebarNavLink>
                        </SidebarNavGroupList>
                    </SidebarNavGroup>

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

export default Sidebar