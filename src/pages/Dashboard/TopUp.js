import React, { useState } from 'react'
import styled from 'styled-components';
import Select from 'react-dropdown-select';
import { Form, Input, InputLabel } from '../../assets/styles/FormStyles';
import { Content2Column2, Content4Column4, ContentFullColumn, ContentRow, CustomButton, CustomDiv, GeneralMdText } from '../../assets/styles/GlobalStyles'
import DashboardLayout from '../../components/Layouts/DashboardLayout';
import { PageTitleSection, PageTitleContainer, } from './TransactionHistory';
import OperationSummaryModal from '../../components/Modals/OperationSummaryModal';

export const AccountSummary = styled.div`
display: flex;
justify-content: flex-end;
float: right;
`;

export const AccountSummaryChild = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-right: 2rem;

&:last-child {
  margin-right: 0;
}
`;


export const FormOperationSection = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 2rem 0;
`;

export const FormOperationsContainer = styled.form`
width: min(100%, 45rem);
background: var(--secondary-2);
padding: 2rem;
`;

export const FormOTP = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 4rem;
`;

export const FormOTPContainer = styled.div`
width:min(100%, 25rem);
`;

export const TopUpForm = styled.form`
padding: 1rem 6rem;
`;



const TopUp = () => {
  const [stepOne, setStepOne] = useState(true);
  const [showModal, setShowModal] = React.useState(false)


  const AccountOptions = [
    { value: 'Account 1', label: 'Account 1' },
    { value: 'Account 1', label: 'Account 2' },
  ];

  const NetworkProvider = [
    { value: 'MTN', label: 'MTN' },
    { value: 'AIRTEL', label: 'AIRTEL' },
    { value: 'GLOBACOM', label: 'GLOBACOM' },
    { value: 'SPECTRANET', label: 'SPECTRANET' },
  ];


  return (
    <>
      <DashboardLayout>
        <PageTitleSection>
          <PageTitleContainer>
            <ContentRow>
              <Content2Column2>
                <GeneralMdText fontWeight="600" textAlign="left" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="capitalize">Top-Up</GeneralMdText>
              </Content2Column2>
              <Content2Column2>
                <AccountSummary>
                  <AccountSummaryChild>
                    <GeneralMdText fontWeight="600" textAlign="center" fontSize="14px" color="var(--orange)" lineHeight="19.49px" textTransform="unset">Total Balance</GeneralMdText>
                    <GeneralMdText fontWeight="600" textAlign="center" fontSize="30px" color="var(--white)" lineHeight="41px" textTransform="unset">N177,000</GeneralMdText>
                  </AccountSummaryChild>
                  <AccountSummaryChild>
                    <GeneralMdText fontWeight="600" textAlign="center" fontSize="14px" color="var(--orange)" lineHeight="19.49px" textTransform="unset">Spend Today</GeneralMdText>
                    <GeneralMdText fontWeight="600" textAlign="center" fontSize="30px" color="var(--white)" lineHeight="41px" textTransform="unset">N500</GeneralMdText>
                  </AccountSummaryChild>
                </AccountSummary>
              </Content2Column2>
            </ContentRow>
          </PageTitleContainer>
        </PageTitleSection>

        <FormOperationSection>
          <FormOperationsContainer>
            <TopUpForm>
              {stepOne ? (
                <ContentRow>
                  <ContentFullColumn>
                    <InputLabel>Select Account To Debit</InputLabel>
                    <Select
                      placeholder="Select Preferred Account"
                      options={AccountOptions}
                    />
                  </ContentFullColumn>

                 
                  <ContentFullColumn>
                    <InputLabel>Amount</InputLabel>
                    <Input
                      type='text'
                      placeholder='Amount'
                    />
                  </ContentFullColumn>

                  <ContentFullColumn>
                    <InputLabel>Network Provider</InputLabel>
                    <Select
                      placeholder="Select Provider"
                      options={NetworkProvider}
                    />
                  </ContentFullColumn>

                  <ContentFullColumn>
                    <InputLabel>Phone number</InputLabel>
                    <Input
                      type='text'
                      placeholder='Phone number'
                    />
                  </ContentFullColumn>

                  <ContentFullColumn>
                    <CustomButton onClick={() => setStepOne(false)} margin="10px 0" type="button" color="var(--white)" background="var(--orange)" border="1px solid var(--orange)">
                      Continue
                    </CustomButton>
                  </ContentFullColumn>
                </ContentRow>
              ) : (
                <ContentRow>
                  <ContentFullColumn>
                    <FormOTP>
                      <FormOTPContainer>
                        <ContentRow>
                          <ContentFullColumn>
                            <GeneralMdText fontWeight="600" textAlign="center" fontSize="20px" color="var(--white)" lineHeight="28px" textTransform="capitalize">Enter your transfer pin below</GeneralMdText>
                          </ContentFullColumn>
                          <Content4Column4>
                            <Input
                              type='password'
                              maxLength="1"
                            />
                          </Content4Column4>
                          <Content4Column4>
                            <Input
                              type='password'
                              maxLength="1"
                            />
                          </Content4Column4>
                          <Content4Column4>
                            <Input
                              type='password'
                              maxLength="1"
                            />
                          </Content4Column4>
                          <Content4Column4>
                            <Input
                              type='password'
                              maxLength="1"
                            />
                          </Content4Column4>
                          <ContentFullColumn>
                            <CustomButton onClick={() => setShowModal(true)} margin="10px 0" type="button" color="var(--white)" background="var(--orange)" border="1px solid var(--orange)">
                              Continue
                            </CustomButton>
                          </ContentFullColumn>
                        </ContentRow>
                      </FormOTPContainer>
                    </FormOTP>
                  </ContentFullColumn>
                </ContentRow>)}
            </TopUpForm>

          </FormOperationsContainer>
        </FormOperationSection>

        {showModal && (
          <OperationSummaryModal typeUrl="topup" />)}
      </DashboardLayout>
    </>
  )
}

export default TopUp