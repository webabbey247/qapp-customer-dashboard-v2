import React, { useEffect, useState } from 'react';
import Select from 'react-dropdown-select';
import AuthLayout from '../../components/Layouts/AuthLayout';
import { ContentFullColumn, ContentRow, GeneralMdText, CustomButton, Content2Column2 } from '../../assets/styles/GlobalStyles';
import { FormWrapper, Form, Input, AuthSection, AuthContainer, AuthLogoContainter, AuthLogo, AuthStepCounter, AuthProgressbar, AuthProgressbarChild, AuthFormContainer, CountryPickerCard, CountryPicker, FormUpload, FormUploadContainer, FormUploadInput, FormUploadLabel, FormUploadIcon } from '../../assets/styles/FormStyles';
import { bankLogo, fileUploadIcon } from '../../assets/images/images';


const SignUp = () => {
    const [areaCode, setAreaCode] = useState([]);
    const [selectedAreaCode, setSelectedAreaCode] = useState("");
    const [stepCounter, setStepCounter] = useState(1);
    const validatedStep = () => {
        setStepCounter(cur => cur + 1)
    };
   
    const AccountOptions = [
        { value: 'Savings', label: 'Savings' },
        { value: 'Current', label: 'Currents' },
    ];

    useEffect(() => {
        fetch("https://restcountries.com/v3/all")
            .then((response) => response.json())
            .then((data) => {
                const areaCodeData = data.map((item) => {
                    return {
                        code: item.cca2,
                        name: item.name.common,
                        flag: item.flags[1],
                        dialCode: [item.idd.root, (item.idd.suffixes || [])[0]].join(""),
                    };
                });

                setAreaCode(areaCodeData);
                if (areaCodeData.length > 0) {
                    let defaultAreaData = areaCodeData.filter((a) => a.code === "NG");
                    if (defaultAreaData.length > 0) {
                        setSelectedAreaCode(defaultAreaData[0]);
                    }
                }
            })
            .catch((err) => {
                console.error("Request failed", err);
            });
    }, []);

    return (
        <AuthLayout>
            <AuthSection>
                <AuthContainer>
                    <AuthLogoContainter>
                        <AuthLogo src={bankLogo} alt="Bank One" />
                        <GeneralMdText fontWeight="600" margin="10px 0 5px" textTransform="unset" color="var(--orange)" fontSize="40px" lineHeight="48.72px" textAlign="center">Create account</GeneralMdText>
                    </AuthLogoContainter>

                    <AuthStepCounter>
                        <AuthProgressbar>
                            <AuthProgressbarChild className='active' />
                            <AuthProgressbarChild className={stepCounter >= 2 ? "active" : ""}/>
                            <AuthProgressbarChild className={stepCounter >= 3 ? "active" : ""}/>
                            <AuthProgressbarChild className={stepCounter >= 4 ? "active" : ""}/>
                        </AuthProgressbar>
                    </AuthStepCounter>
                    <AuthFormContainer>
                        {/* StepOne */}

                        <FormWrapper>
                            <Form>
                                {stepCounter === 1 && (
                                    <ContentRow>
                                        <Content2Column2>
                                            <Input
                                                className=""
                                                type='text'
                                                placeholder='First Name'
                                            />
                                        </Content2Column2>

                                        <Content2Column2>
                                            <Input
                                                className=""
                                                type='text'
                                                placeholder='Last Name'
                                            />
                                        </Content2Column2>

                                        <ContentFullColumn>
                                            <Input
                                                className=""
                                                type='text'
                                                placeholder='Email'
                                            />
                                        </ContentFullColumn>

                                        <ContentFullColumn>
                                            <CountryPickerCard>
                                                <CountryPicker>
                                                    <Select placeholder={selectedAreaCode.dialCode} options={areaCode.map(({ dialCode }) =>
                                                        ({ label: dialCode, value: dialCode })
                                                    )}
                                                    />
                                                </CountryPicker>
                                                <Input
                                                    className=""
                                                    type='text'
                                                    placeholder='Phone Number'
                                                />
                                            </CountryPickerCard>
                                        </ContentFullColumn>

                                        <ContentFullColumn>
                                            <Input
                                                className=""
                                                type='text'
                                                placeholder='Address'
                                            />
                                        </ContentFullColumn>

                                        <ContentFullColumn>
                                            <Select
                                                placeholder="Select Preferred Account Type"
                                                options={AccountOptions}
                                            />
                                        </ContentFullColumn>
                                    </ContentRow>
                                )}


                                {stepCounter === 2 && (
                                    <ContentRow>
                                        <ContentFullColumn>
                                            <FormUpload>
                                                <FormUploadContainer>
                                                    <FormUploadIcon src={fileUploadIcon} alt="Upload file" />
                                                    <FormUploadInput name="passport" id="file" type="file" accept=".jpg,.jpeg,.png,.tif,.tiff,.gif" />
                                                    <FormUploadLabel htmlFor="file">
                                                    Upload your picture from your storage or cloud or drive.
                                                    </FormUploadLabel>
                                                </FormUploadContainer>
                                            </FormUpload>
                                        </ContentFullColumn>
                                    </ContentRow>
                                )}

                                {stepCounter === 3 && (
                                    <ContentRow>
                                        <ContentFullColumn>
                                            <Input
                                                className=""
                                                type='text'
                                                placeholder='Enter BVN'
                                            />
                                        </ContentFullColumn>
                                    </ContentRow>
                                )}

                                {stepCounter === 4 && (
                                    <ContentRow>
                                    <ContentFullColumn>
                                        <FormUpload>
                                            <FormUploadContainer>
                                                <FormUploadIcon src={fileUploadIcon} alt="Upload file" />
                                                <FormUploadInput name="passport" id="file" type="file" accept=".jpg,.jpeg,.png,.tif,.tiff,.gif" />
                                                <FormUploadLabel htmlFor="file">
                                                Upload your utility bill from your storage or cloud or drive.
                                                </FormUploadLabel>
                                            </FormUploadContainer>
                                        </FormUpload>
                                    </ContentFullColumn>
                                </ContentRow>
                                )}


                               {stepCounter <= 4 && (
                                 <ContentRow>
                                 <ContentFullColumn>
                                     <CustomButton onClick={validatedStep} type="button" color="var(--white)" background="var(--orange)" border="1px solid var(--orange)" margin="10px 0">
                                         {stepCounter === 4 ? "Create Account" : "Continue"}
                                     </CustomButton>
                                 </ContentFullColumn>
                             </ContentRow>
                               )}
                            </Form>
                        </FormWrapper>
                    </AuthFormContainer>
                </AuthContainer>
            </AuthSection>
        </AuthLayout>
    )
}

export default SignUp;