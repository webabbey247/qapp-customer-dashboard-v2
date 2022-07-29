import React from 'react';
import Sidebar from './Dashboard/Sidebar';
import MainContent from './Dashboard/MainContent';
import { DashboardContainer, DashboardContent } from '../../assets/styles/LayoutStyles';

const DashboardLayout = ({children}) => {
    return (
        <>
            <DashboardContainer>
                <DashboardContent>
                 <Sidebar />
                 <MainContent>
                    {children}
                    </MainContent>
                </DashboardContent>
            </DashboardContainer>
        </>
    )
}

export default DashboardLayout;