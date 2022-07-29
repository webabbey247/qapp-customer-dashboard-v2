import React from 'react';
import styled from 'styled-components';
import { Content2Column2, Content30Column, Content70Column, ContentRow, CustomDiv, GeneralMdText, GeneralSmText } from '../../assets/styles/GlobalStyles';
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import { sendIcon, cardOpsIcon, utilityOpsIcon, debitIcon, creditIcon, arrowRightIcon } from '../../assets/images/images';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
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
padding: 2rem 1rem;
`;

export const DashboardAccountSummaryContent = styled.div`
display: flex;
flex-direction: column;
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



const Dashboard = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
        options: {
            aspectRatio: 1,
            responsive: true,
         cutoutPercentage: 90,
        },
      };
    return (
        <DashboardLayout>
            <DashboardTopSection>
                <Content70Column>
                    <DashboardAccountContainer>
                        <DashboardAccountSummaryContent>
                            <DashboardTotalSummary>
                                <GeneralMdText fontSize="18px" fontWeight="600" lineHeight="25px" color="var(--orange)" textTransform="unset" margin="5px 0" textAlign="left">Total Balance</GeneralMdText>
                                <GeneralSmText fontSize="38px" fontWeight="600" lineHeight="46px" color="var(--white)" textTransform="unset" textAlign="left">N177,000</GeneralSmText>
                            </DashboardTotalSummary>

                            <DashboardSpentToday>
                            <GeneralMdText fontSize="18px" fontWeight="600" lineHeight="25px" color="var(--orange)" textTransform="unset" margin="5px 0" textAlign="left">Spent today</GeneralMdText>
                                <GeneralSmText fontSize="38px" fontWeight="600" lineHeight="46px" color="var(--white)" textTransform="unset" textAlign="left">N500</GeneralSmText>
                            </DashboardSpentToday>

                        </DashboardAccountSummaryContent>
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
                            <GeneralMdText fontSize="20px" lineHeight="24.36px" fontWeight="600" textTransform="unset" color="var(--white)">Recent Transaction</GeneralMdText>
                            <TransactionViewAll>
                                <GeneralMdText fontSize="16.13px" lineHeight="19.65px" fontWeight="600" textTransform="unset" textAlign="right" color="var(--white)" margin="3px 0 0">View All</GeneralMdText>
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
                            </TransactionTableGroup>

                        </TransactionTableContainer>
                    </TransactionTableSection>
                </Content70Column>
                <Content30Column>
                    <OperationsCardContainer>
                        <ContentRow>
                            <Content2Column2>
                                <OperationsCard>
                                    <OperationsCardIconHolder>
                                        <OperationsCardIcon src={sendIcon} alt="Transfer" />
                                    </OperationsCardIconHolder>
                                    <GeneralMdText fontSize="19.11px" lineHeight="23.27px" fontWeight="600" textAlign="left" margin="8px 0" color="var(--white)" textTransform="unset">Transfer</GeneralMdText>
                                    <GeneralSmText fontSize="11px" lineHeight="14px" fontWeight="400" textAlign="left" margin="" color="var(--step-color)" textTransform="unset">Transfer funds to own banks and other banks</GeneralSmText>
                                </OperationsCard>
                            </Content2Column2>

                            <Content2Column2>
                                <OperationsCard>
                                    <OperationsCardIconHolder>
                                        <OperationsCardIcon src={sendIcon} alt="Top up" />
                                    </OperationsCardIconHolder>
                                    <GeneralMdText fontSize="19.11px" lineHeight="23.27px" fontWeight="600" textAlign="left" margin="8px 0" color="var(--white)" textTransform="unset">Top up</GeneralMdText>
                                    <GeneralSmText fontSize="11px" lineHeight="14px" fontWeight="400" textAlign="left" margin="" color="var(--step-color)" textTransform="unset">Transfer funds to own banks and other banks</GeneralSmText>
                                </OperationsCard>
                            </Content2Column2>

                            <Content2Column2>
                                <OperationsCard>
                                    <OperationsCardIconHolder>
                                        <OperationsCardIcon src={cardOpsIcon} alt="Cards" />
                                    </OperationsCardIconHolder>
                                    <GeneralMdText fontSize="19.11px" lineHeight="23.27px" fontWeight="600" textAlign="left" margin="8px 0" color="var(--white)" textTransform="unset">Cards</GeneralMdText>
                                    <GeneralSmText fontSize="11px" lineHeight="14px" fontWeight="400" textAlign="left" margin="" color="var(--step-color)" textTransform="unset">Transfer funds to own banks and other banks</GeneralSmText>
                                </OperationsCard>
                            </Content2Column2>

                            <Content2Column2>
                                <OperationsCard>
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