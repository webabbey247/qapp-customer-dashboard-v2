import React, { useState } from 'react'
import styled from 'styled-components';
import Select from 'react-dropdown-select';
import { Form, Input, InputIcon, InputLabel } from '../../assets/styles/FormStyles';
import { Content2Column2, Content3Column3, Content4Column4, ContentFullColumn, ContentRow, CustomButton, CustomDiv, GeneralFlexColumn, GeneralFlexRow, GeneralMdText, MainContainer, SiteContainer } from '../../assets/styles/GlobalStyles'
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import { PageTitleSection } from './TransactionHistory';



export const LoanSection = styled.section`
display: flex;
justify-content: center;
padding: 1.5rem 1.5rem;
`;

export const LoanCard = styled.div`
background: var(--secondary-2);
padding: 1rem 1rem 0.5rem;
border-radius: 8px;
margin-left: 3rem;
width: 300px;
`;

export const LoanFormContainer = styled.div`
width: min(100%, 60rem);
`;

// export const SettingsCard = styled.div`
// background: var(--secondary-2);
// padding: 1rem;
// border-radius: 8px;
// margin: 0 0 2rem;
// `;

// export const SettingsCardProfile = styled.img`
// width: 140px;
// height: 140px;
// `;

// export const SettingsCardContent = styled.div`
// display: flex;
// justify-content: space-between;
// flex-direction: row;
// `;

// export const SettingsCardContentGroup = styled.div`
// display: flex;
// flex-direction: column;
// padding: 1rem 0 1rem;
// `;

// export const SettingsCardFormList = styled.div`
// display: flex;
// flex-direction: column;
// padding: 0.8rem 1rem;
// width: 100%;
// background: var(--primary);
// margin: 1rem 0;
// border-radius: 8px;
// `;

// export const SettingsCardList = styled.div`
// display: flex;
// flex-direction: column;
// width: 100%;
// margin: 1rem 0;
// `;

// export const SettingsCardListImg = styled.img`
// width: 24px;
// height: 24px;
// `;




const Loans = () => {
    // const [showPasswordForm, setShowPasswordForm] = useState(false);
    // const [showPinForm, setShowPinForm] = useState(false);
    // const [showPassword, setShowPassword] = useState(false);
    // const [showPin, setShowPin] = useState(false);

    return (
        <>
            <DashboardLayout>

                <PageTitleSection>
                    <SiteContainer>
                        <ContentRow>
                            <Content2Column2>
                                <GeneralFlexRow justifyContent="flex-start">
                                    <GeneralMdText fontWeight="600" textAlign="left" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="capitalize">Loans</GeneralMdText>
                                    <LoanCard>
                                        <GeneralMdText opacity="0.8" fontWeight="600" textAlign="left" fontSize="16px" color="var(--gray)" lineHeight="20px" textTransform="capitalize">Account 1</GeneralMdText>
                                        <GeneralFlexRow justifyContent="space-between" margin="20px 0 0">
                                            <GeneralFlexColumn>
                                                <GeneralMdText fontWeight="400" textAlign="left" fontSize="12px" color="var(--gray)" lineHeight="15px" textTransform="capitalize">Balance</GeneralMdText>
                                                <GeneralMdText fontWeight="600" textAlign="left" fontSize="24px" color="var(--orange)" lineHeight="29px" textTransform="capitalize">N14,500.00</GeneralMdText>
                                            </GeneralFlexColumn>

                                            <GeneralFlexColumn margin="10px 0">
                                                <GeneralMdText fontWeight="400" textAlign="right" fontSize="12px" color="var(--gray)" lineHeight="15px" textTransform="capitalize">Status</GeneralMdText>
                                                <GeneralMdText fontWeight="600" textAlign="right" fontSize="16px" color="var(--success)" lineHeight="19px" textTransform="capitalize">Eligible</GeneralMdText>
                                            </GeneralFlexColumn>

                                        </GeneralFlexRow>
                                    </LoanCard>
                                </GeneralFlexRow>
                            </Content2Column2>
                        </ContentRow>
                    </SiteContainer>
                </PageTitleSection>
                <LoanSection>
                   <LoanFormContainer>

                   </LoanFormContainer>
                </LoanSection>
            </DashboardLayout>
        </>
    )
}

export default Loans