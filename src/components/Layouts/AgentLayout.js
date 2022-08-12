import React from 'react';
import AgentSidebar from './Dashboard/AgentSidebar';
import AgentContent from './Dashboard/AgentContent';
import { DashboardContainer, DashboardContent } from '../../assets/styles/LayoutStyles';

const AgentLayout = ({children}) => {
    return (
        <>
            <DashboardContainer>
                <DashboardContent>
                 <AgentSidebar />
                 <AgentContent>
                    {children}
                    </AgentContent>
                </DashboardContent>
            </DashboardContainer>
        </>
    )
}

export default AgentLayout;