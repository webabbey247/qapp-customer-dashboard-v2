import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Content2Column2, Content30Column, Content70Column, ContentRow, CustomDiv, GeneralMdText, GeneralSmText } from '../../assets/styles/GlobalStyles';
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import { sendIcon, cardOpsIcon, utilityOpsIcon, debitIcon, creditIcon, arrowRightIcon } from '../../assets/images/images';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { spiralBg } from '../../assets/images/images';
ChartJS.register(ArcElement, Tooltip, Legend);


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
margin-top: 2.5rem;

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
margin: 1rem 1rem 1rem 0;
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
margin: 0.6rem 0;
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

export const OperationsCard = styled(Link)`
background: var(--secondary-2);
padding: 2.5rem 1.5rem;
border-radius: 8px;
margin: 0 0 14px;
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



const Dashboard = () => {
    const [showBalance, setShowBalance] = React.useState(false);
    const data = {
        labels: [ 'Utility bills', 'Total amount', 'Withdraw', 'Transfer'],
        datasets: [
            {
                label: 'Expense Calculator',
                data: [3, 19, 12, 5],
                backgroundColor: [
                    'rgba(250,226,211, 1)',
                    'rgba(22,50,62, 1)',
                    'rgba(93,95,239, 1)',
                    'rgba(228,111,36, 1)',
                ],
                borderColor: [
                    'rgba(250,226,211, 1)',
                    'rgba(22,50,62, 1)',
                    'rgba(93,95,239, 1)',
                    'rgba(228,111,36, 1)',
                ],
                borderWidth: 1,
            },
        ],
        options: {
            aspectRatio: 1,
            responsive: true,
            cutoutPercentage: 90,
            legend: {
                position: 'bottom',
                labels: {
                boxWidth: 10
            }
        }}
    };
    return (
        <DashboardLayout>
            <DashboardTopSection>
                <Content70Column>
                    <DashboardAccountContainer>
                        <DashboardAccountSummaryContent>
                            <DashboardTotalSummary>
                                <GeneralMdText fontSize="14px" fontWeight="400" lineHeight="20px" color="var(--orange)" textTransform="unset" margin="0" textAlign="left">Total Balance</GeneralMdText>
                                <GeneralSmText fontSize="30px" fontWeight="600" lineHeight="46px" color="var(--white)" textTransform="unset" textAlign="left">{showBalance ? "N177,000" : "xxxxx"}</GeneralSmText>
                            </DashboardTotalSummary>

                            <DashboardSpentToday>
                                <GeneralMdText fontSize="14px" fontWeight="400" lineHeight="20px" color="var(--orange)" textTransform="unset" margin="0" textAlign="left">Spent Today</GeneralMdText>
                                <GeneralSmText fontSize="30px" fontWeight="600" lineHeight="46px" color="var(--white)" textTransform="unset" textAlign="left">N500</GeneralSmText>
                            </DashboardSpentToday>
                        </DashboardAccountSummaryContent>

                        <DashboardMultipleAccountCards>
                            <DashMultipleAccountCardsTop>
                                <GeneralMdText fontSize="14px" fontWeight="500" lineHeight="19px" color="var(--white)" textTransform="unset" margin="5px 0" textAlign="left">Available balance</GeneralMdText>

                                <DashboardMultipleAccountRTL>
                                    <GeneralMdText fontSize="14px" fontWeight="500" lineHeight="19px" color="var(--white)" textTransform="unset" margin="5px 0" textAlign="right">View History</GeneralMdText>
                                    <TransactionViewAllIcon src={arrowRightIcon} alt="View All" />
                                </DashboardMultipleAccountRTL>
                            </DashMultipleAccountCardsTop>
                            <GeneralMdText onClick={() => setShowBalance(!showBalance)} fontSize="40px" lineHeight="60px" fontWeight="700" textTransform="unset" color="var(--white)" margin="1rem 0">{showBalance ? "N14,500" : "xxxxxxx"} {showBalance ? <FiEye size="30" color='var(--white)' /> : <FiEyeOff size="30" color='var(--white)' />}</GeneralMdText>
                            <GeneralMdText fontSize="14px" lineHeight="20px" fontWeight="500" textTransform="unset" color="var(--white)" margin="0">Account 1</GeneralMdText>
                        </DashboardMultipleAccountCards>
                    </DashboardAccountContainer>
                </Content70Column>
                <Content30Column>
                    <ExpenseTracker>
                        <Doughnut data={data} />
                    </ExpenseTracker>
                </Content30Column>
            </DashboardTopSection>
            <DashboardBottomSection>
                <Content70Column>
                    <TransactionTableSection>
                        <TransactionActionTab>
                            <GeneralMdText fontSize="18px" lineHeight="24.36px" fontWeight="600" textTransform="unset" color="var(--white)">Recent Transaction</GeneralMdText>
                            <TransactionViewAll>
                                <GeneralMdText fontSize="14px" lineHeight="20px" fontWeight="600" textTransform="unset" textAlign="right" color="var(--white)" margin="3px 0 0">View All</GeneralMdText>
                                <TransactionViewAllIcon src={arrowRightIcon} alt="View All" />
                            </TransactionViewAll>
                        </TransactionActionTab>

                        <TransactionTableContainer>
                            <TransactionTableGroup>
                                <GeneralSmText color="var(--white)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="0.5rem 0">Today</GeneralSmText>
                                <TransactionTableSummary>
                                    <TransactionTableSummaryLeft>
                                        <TransactionTableSummaryLeftIcon src={debitIcon} alt="Debit" />
                                        <TransactionTableSummaryLeftContent>
                                            <GeneralSmText color="var(--gray)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="left" margin="3px 0" opacity="0.8">YEMI SALEM</GeneralSmText>
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="400" textAlign="left" opacity="0.8">9:00 pm</GeneralSmText>
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
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="400" textAlign="left" opacity="0.8">9:00pm</GeneralSmText>
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
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="400" textAlign="left" opacity="0.8">9:00pm</GeneralSmText>
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
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="400" textAlign="left">9:00 pm</GeneralSmText>
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
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="400" textAlign="left">9:00 pm</GeneralSmText>
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
                                            <GeneralSmText color="var(--gray-2)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="400" textAlign="left">9:00 pm</GeneralSmText>
                                        </TransactionTableSummaryLeftContent>
                                    </TransactionTableSummaryLeft>
                                    <TransactionTableSummaryRight>
                                        <GeneralSmText color="var(--credit-color)" fontSize="14px" lineHeight="17px" textTransform="unset" fontWeight="600" textAlign="right">2,000.00</GeneralSmText>
                                    </TransactionTableSummaryRight>
                                </TransactionTableSummary>
                            </TransactionTableGroup>

                        </TransactionTableContainer>
                    </TransactionTableSection>
                </Content70Column>
                <Content30Column>
                    <OperationsCardContainer>
                        <ContentRow>
                            <Content2Column2>
                                <OperationsCard to="/dashboard/transfer">
                                    <OperationsCardIconHolder>
                                        <OperationsCardIcon src={sendIcon} alt="Transfer" />
                                    </OperationsCardIconHolder>
                                    <GeneralMdText fontSize="19.11px" lineHeight="23.27px" fontWeight="600" textAlign="left" margin="8px 0" color="var(--white)" textTransform="unset">Transfer</GeneralMdText>
                                    <GeneralSmText fontSize="11px" lineHeight="14px" fontWeight="400" textAlign="left" margin="" color="var(--step-color)" textTransform="unset">Transfer funds to own banks and other banks</GeneralSmText>
                                </OperationsCard>
                            </Content2Column2>

                            <Content2Column2>
                                <OperationsCard to="/dashboard/top-up">
                                    <OperationsCardIconHolder>
                                        <OperationsCardIcon src={sendIcon} alt="Top up" />
                                    </OperationsCardIconHolder>
                                    <GeneralMdText fontSize="19.11px" lineHeight="23.27px" fontWeight="600" textAlign="left" margin="8px 0" color="var(--white)" textTransform="unset">Top up</GeneralMdText>
                                    <GeneralSmText fontSize="11px" lineHeight="14px" fontWeight="400" textAlign="left" margin="" color="var(--step-color)" textTransform="unset">Transfer funds to own banks and other banks</GeneralSmText>
                                </OperationsCard>
                            </Content2Column2>

                            <Content2Column2>
                                <OperationsCard to="/dashboard/">
                                    <OperationsCardIconHolder>
                                        <OperationsCardIcon src={cardOpsIcon} alt="Cards" />
                                    </OperationsCardIconHolder>
                                    <GeneralMdText fontSize="19.11px" lineHeight="23.27px" fontWeight="600" textAlign="left" margin="8px 0" color="var(--white)" textTransform="unset">Cards</GeneralMdText>
                                    <GeneralSmText fontSize="11px" lineHeight="14px" fontWeight="400" textAlign="left" margin="" color="var(--step-color)" textTransform="unset">Transfer funds to own banks and other banks</GeneralSmText>
                                </OperationsCard>
                            </Content2Column2>

                            <Content2Column2>
                                <OperationsCard to="/dashboard/utility">
                                    <OperationsCardIconHolder>
                                        <OperationsCardIcon src={utilityOpsIcon} alt="Utility bill" />
                                    </OperationsCardIconHolder>
                                    <GeneralMdText fontSize="19.11px" lineHeight="23.27px" fontWeight="600" textAlign="left" margin="8px 0" color="var(--white)" textTransform="unset">Utility bill</GeneralMdText>
                                    <GeneralSmText fontSize="11px" lineHeight="14px" fontWeight="400" textAlign="left" margin="" color="var(--step-color)" textTransform="unset">Transfer funds to own banks and other banks</GeneralSmText>
                                </OperationsCard>
                            </Content2Column2>
                        </ContentRow>
                    </OperationsCardContainer>
                </Content30Column>
            </DashboardBottomSection>
        </DashboardLayout>
    )
}

export default Dashboard;