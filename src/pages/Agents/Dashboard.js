import React, { useState } from 'react';
import styled from 'styled-components';
import { Content2Column2, Content30Column, Content70Column, ContentFullColumn, ContentRow, CustomButton, CustomDiv, GeneralFlexColumn, GeneralFlexRow, GeneralMdText, GeneralSmText } from '../../assets/styles/GlobalStyles';
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import AgentLayout from '../../components/Layouts/AgentLayout';
import { sendIcon, cardOpsIcon, utilityOpsIcon, debitIcon, creditIcon, arrowRightIcon } from '../../assets/images/images';
import { Doughnut } from 'react-chartjs-2';
import { spiralBg, agentPlaceholder } from '../../assets/images/images';


export const DashboardTopSection = styled.section`
margin: 1rem;
display: flex;
flex-direction: row;
`;

export const DashboardAccountContainer = styled.div`
background: var(--secondary-2);
height: 250px;
border-radius: 8px;
display: flex;
flex-direction: row;
padding: 1rem 1rem;
`;

export const DashboardAccountSummaryContent = styled.div`
display: flex;
flex-direction: column;
flex: 0 0 30%;
margin-top: 1rem;

`;

export const DashboardTotalSummary = styled.div`
display: flex;
flex-direction: column;
`;

export const DashboardSpentToday = styled.div`
display: flex;
flex-direction: column;
margin-top: 1rem;
`;

export const DashboardMultipleAccountCards = styled.div`
background: var(--orange);
padding: .5rem 1rem;
flex: 0 0 70%;
border-radius: 8px; 
display: flex;
flex-direction: column;
background-image: url("${spiralBg}");
background-repeat: no-repeat;
background-size: contain;
background-position: right;
`;

export const DashMultipleAccountCardsTop = styled.div`
margin: 10px 0;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const DashboardMultipleAccountRTL = styled.div`
display: flex;
flex-direction: row;
flex: 0 0 32%;
`;



export const ExpenseTracker = styled.div`
background: var(--secondary-2);
height: 250px;
border-radius: 8px;
margin: 0 10px;
`;

export const DashboardBottomSection = styled.section`
margin: 1rem;
display: flex;
flex-direction: row;
`;

export const TransactionTableSection = styled.div`
background: var(--secondary-2);
padding: 1rem;
border-radius: 8px;
`;

export const TransactionActionTab = styled.div`
margin: 1rem 0;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const TransactionViewAll = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
flex: 0 0 25%;
max-width: 25%;
`;

export const TransactionViewAllIcon = styled.img`
height: 21.51px;
width: 21.51px;
margin-left: 5px;
`;

export const TransactionTableContainer = styled.div`
margin-bottom: 1rem;
height: 350px;
border-radius: 10px;
overflow-x: hidden;
`;

export const AgentTransactionsTableContainer = styled.div`
margin-bottom: 1rem;
border-radius: 10px;
`;


export const TransactionTableGroup = styled.div`
margin: 10px 0;
display: flex;
flex-direction: column;
`;

export const TransactionTableSummary = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 1rem 0;
border-bottom: 1px solid #16323E;

`;

export const TransactionTableSummaryLeft = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`;

export const TransactionTableSummaryLeftIcon = styled.img`
height: 32px;
width: 32px;
margin-right: 10px;
`;

export const TransactionTableSummaryLeftContent = styled.div`
display: flex;
flex-direction: column;
`;

export const TransactionTableSummaryRight = styled.div`
text-align: right:
`;


export const OperationsCardContainer = styled.div`
margin: 0;
padding: 0;
`;

export const OperationsCard = styled.div`
background: var(--secondary-2);
padding: 2.5rem 1.5rem;
border-radius: 8px;
margin: 0 0 15px;
display: flex;
flex-direction: column;
`;

export const OperationsCardIconHolder = styled.div`
background: #FAE2D3;
width: 30.57px;
height: 30.57px;
border-radius: 50%;
margin-left: auto !important;
margin-bottom: 10px;
`;

export const OperationsCardIcon = styled.img`
height: 22.93px;
width: 22.93px;
display: block;
margin: 3px auto;
`;

// Agent StyleSheet

export const AgentDashboardProfile = styled.div`
margin: 1rem;
display: flex;
flex-direction: row;
background: var(--secondary-2);
// padding: 2rem;
width: 100%;
border-radius:8px;
justify-content: space-between;
padding: 4rem 2rem;
`;

export const AgentDashboardProfileList = styled.div`
display: flex;
flex-direction: column;
position: relative;
`;


export const TransactionToggle = styled.div`
background: var(--secondary-2);
padding: 0.5rem 0.4rem;
border-radius: 100px;
display: flex;
flex-direction: row;
justify-content: space-around;
flex: 0 0 28%;
`;

export const TransactionToggleChild = styled.div`
background: transparent;
text-align: center;
color: var(--gray);
font-size: 14px;
font-weight: 600;
line-height: 17px;
padding: 0.8rem 1.5rem;


&.active {
background: var(--orange);
padding: 0.8rem 1.5rem;
border-radius: 100px;
color: var(--white);
}
`;

export const AgentIconPlaceholder = styled.div`
position: absolute;
top: 37px;
`;

export const AgentPlaceholderImg = styled.img`
width: 250px;
height: auto;
`;

export const OnlineIconBadge = styled.div`
width: 18px;
height: 15px;
border-radius: 100%;
background: var(--success);
margin-right: 5px;
`;

export const POSTableSummary = styled.div`
display: flex;
flex-direction: row;
padding: 1rem 0;
justify-content: space-between;
border-bottom: 1px solid #16323E;
`;




const AgentDashboard = () => {
    const [toggleHistory, setToggleHistory] = useState(true);
    const [togglePOS, setTogglePOS] = useState(false);

    return (
        <AgentLayout>
            <DashboardTopSection>
                <AgentDashboardProfile>

                    <AgentDashboardProfileList>
                        <GeneralFlexRow margin="0 0 0 4rem">
                            <OnlineIconBadge />
                            <GeneralMdText fontWeight="600" textAlign="left" fontSize="14px" color="var(--dashboard-nav-color)" lineHeight="19px" textTransform="unset">Active</GeneralMdText>
                        </GeneralFlexRow>
                        <AgentIconPlaceholder>
                            <AgentPlaceholderImg src={agentPlaceholder} alt="Agent Dashboard" />
                        </AgentIconPlaceholder>
                    </AgentDashboardProfileList>

                    <AgentDashboardProfileList>
                        <GeneralFlexColumn margin="20px 0">
                            <GeneralMdText fontWeight="400" textAlign="left" fontSize="14px" color="var(--dashboard-nav-color)" lineHeight="17px" textTransform="unset">Account Name</GeneralMdText>
                            <GeneralMdText fontWeight="600" textAlign="left" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="capitalize">Alausa Adedamola</GeneralMdText>
                        </GeneralFlexColumn>

                        <GeneralFlexColumn>
                            <GeneralMdText fontWeight="400" textAlign="left" fontSize="14px" color="var(--dashboard-nav-color)" lineHeight="17px" textTransform="unset">Account Balance</GeneralMdText>
                            <GeneralMdText fontWeight="600" textAlign="left" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="unset">N32,000,000.00</GeneralMdText>
                        </GeneralFlexColumn>
                    </AgentDashboardProfileList>

                    <AgentDashboardProfileList>
                        <GeneralFlexColumn margin="20px 0">
                            <GeneralMdText fontWeight="400" textAlign="left" fontSize="14px" color="var(--dashboard-nav-color)" lineHeight="17px" textTransform="unset">Account Number</GeneralMdText>
                            <GeneralMdText fontWeight="600" textAlign="left" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="unset">3001254683</GeneralMdText>
                        </GeneralFlexColumn>

                        <GeneralFlexColumn>
                            <GeneralMdText fontWeight="400" textAlign="left" fontSize="14px" color="var(--dashboard-nav-color)" lineHeight="17px" textTransform="unset">Bank Verification Number (BVN)</GeneralMdText>
                            <GeneralMdText fontWeight="600" textAlign="left" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="unset">01254683441</GeneralMdText>
                        </GeneralFlexColumn>
                    </AgentDashboardProfileList>
                </AgentDashboardProfile>
            </DashboardTopSection>
            <DashboardBottomSection>
                <ContentFullColumn>
                    <TransactionActionTab>
                        <TransactionToggle>
                            <TransactionToggleChild onClick={() => { setToggleHistory(true); setTogglePOS(false) }} className={toggleHistory ? 'active' : ""}>Recent History</TransactionToggleChild>
                            <TransactionToggleChild onClick={() => { setTogglePOS(true); setToggleHistory(false) }} className={togglePOS ? 'active' : ""}>Registered POS</TransactionToggleChild>
                        </TransactionToggle>
                        <TransactionViewAll>
                            <GeneralMdText fontSize="16.13px" lineHeight="19.65px" fontWeight="600" textTransform="unset" textAlign="right" color="var(--white)" margin="3px 0 0">View All</GeneralMdText>
                            <TransactionViewAllIcon src={arrowRightIcon} alt="View All" />
                        </TransactionViewAll>
                    </TransactionActionTab>

                    {toggleHistory && (
                        <TransactionTableSection>
                            <AgentTransactionsTableContainer>
                                <TransactionTableGroup>
                                    <GeneralSmText color="var(--white)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="0.5rem 0">Today</GeneralSmText>
                                    <TransactionTableSummary>
                                        <TransactionTableSummaryLeft>
                                            <TransactionTableSummaryLeftIcon src={debitIcon} alt="Debit" />
                                            <TransactionTableSummaryLeftContent>
                                                <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0" opacity="0.8">YEMI SALEM</GeneralSmText>
                                                <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" opacity="0.8">9:00PM</GeneralSmText>
                                            </TransactionTableSummaryLeftContent>
                                        </TransactionTableSummaryLeft>
                                        <TransactionTableSummaryRight>
                                            <GeneralSmText color="var(--debit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                        </TransactionTableSummaryRight>
                                    </TransactionTableSummary>

                                </TransactionTableGroup>

                                <TransactionTableGroup>
                                    <GeneralSmText color="var(--white)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="0.5rem 0">Yesterday</GeneralSmText>

                                    <TransactionTableSummary>
                                        <TransactionTableSummaryLeft>
                                            <TransactionTableSummaryLeftIcon src={creditIcon} alt="Debit" />
                                            <TransactionTableSummaryLeftContent>
                                                <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0">YEMI SALEM</GeneralSmText>
                                                <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left">9:00PM</GeneralSmText>
                                            </TransactionTableSummaryLeftContent>
                                        </TransactionTableSummaryLeft>
                                        <TransactionTableSummaryRight>
                                            <GeneralSmText color="var(--credit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                        </TransactionTableSummaryRight>
                                    </TransactionTableSummary>


                                    <TransactionTableSummary>
                                        <TransactionTableSummaryLeft>
                                            <TransactionTableSummaryLeftIcon src={creditIcon} alt="Debit" />
                                            <TransactionTableSummaryLeftContent>
                                                <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0">YEMI SALEM</GeneralSmText>
                                                <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left">9:00PM</GeneralSmText>
                                            </TransactionTableSummaryLeftContent>
                                        </TransactionTableSummaryLeft>
                                        <TransactionTableSummaryRight>
                                            <GeneralSmText color="var(--credit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                        </TransactionTableSummaryRight>
                                    </TransactionTableSummary>

                                    <TransactionTableSummary>
                                        <TransactionTableSummaryLeft>
                                            <TransactionTableSummaryLeftIcon src={debitIcon} alt="Debit" />
                                            <TransactionTableSummaryLeftContent>
                                                <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0" opacity="0.8">YEMI SALEM</GeneralSmText>
                                                <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" opacity="0.8">9:00PM</GeneralSmText>
                                            </TransactionTableSummaryLeftContent>
                                        </TransactionTableSummaryLeft>
                                        <TransactionTableSummaryRight>
                                            <GeneralSmText color="var(--debit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                        </TransactionTableSummaryRight>
                                    </TransactionTableSummary>

                                    <TransactionTableSummary>
                                        <TransactionTableSummaryLeft>
                                            <TransactionTableSummaryLeftIcon src={debitIcon} alt="Debit" />
                                            <TransactionTableSummaryLeftContent>
                                                <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0" opacity="0.8">YEMI SALEM</GeneralSmText>
                                                <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" opacity="0.8">9:00PM</GeneralSmText>
                                            </TransactionTableSummaryLeftContent>
                                        </TransactionTableSummaryLeft>
                                        <TransactionTableSummaryRight>
                                            <GeneralSmText color="var(--debit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                        </TransactionTableSummaryRight>
                                    </TransactionTableSummary>

                                </TransactionTableGroup>

                            </AgentTransactionsTableContainer>
                        </TransactionTableSection>
                    )}

{togglePOS && (
                        <TransactionTableSection>
                            <AgentTransactionsTableContainer>
                                <TransactionTableGroup>
                                    <POSTableSummary>
                                        <GeneralFlexRow>
                                        <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" opacity="0.8" margin="20px 0 0">Adedamola’s POS</GeneralSmText>

                                        <GeneralSmText margin="20px 0 0" color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" opacity="0.8">IMEI: 565661165316511JK46</GeneralSmText>

                                       <CustomButton margin="0" width="30%" background="transparent" border="1px solid var(--orange)" color="var(--orange)">View History</CustomButton>
                                            
                                        </GeneralFlexRow>
                                    </POSTableSummary>
                                </TransactionTableGroup>

                                <TransactionTableGroup>
                                    <POSTableSummary>
                                        <GeneralFlexRow>
                                        <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" opacity="0.8" margin="20px 0 0">Adedamola’s POS</GeneralSmText>

                                        <GeneralSmText margin="20px 0 0" color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" opacity="0.8">IMEI: 565661165316511JK46</GeneralSmText>

                                       <CustomButton margin="0" width="30%" background="transparent" border="1px solid var(--orange)" color="var(--orange)">View History</CustomButton>
                                            
                                        </GeneralFlexRow>
                                    </POSTableSummary>
                                </TransactionTableGroup>

                               

                            </AgentTransactionsTableContainer>
                        </TransactionTableSection>
                    )}

                </ContentFullColumn>
            </DashboardBottomSection>
        </AgentLayout>
    )
}

export default AgentDashboard;