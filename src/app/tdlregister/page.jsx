'use client';

import {
    Grid,
    HStack,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Stack,
    Textarea,
    useRadioGroup,
    VStack,
} from '@chakra-ui/react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import RadioCard from './components/RadioCard';

export default function TdlRegisterPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [termsChecked, setTermsChecked] = useState({ term1: false, term2: false });

    //step 1 radio 버튼
    const options = ['오늘까지', '이번주 0요일까지', '이번 달까지'];
    const { getRootProps: getRootProps1, getRadioProps: getRadioProps1 } = useRadioGroup({
        name: 'period',
        defaultValue: '오늘까지',
        onChange: console.log,
    });
    const group1 = getRootProps1();

    //step 2 radio 버튼
    const optionsTwo = ['Now! Hard.', 'Later. Hard.', 'Now! Easy!', 'Later. Easy!'];
    const { getRootProps: getRootProps2, getRadioProps: getRadioProps2 } = useRadioGroup({
        name: 'priority',
        defaultValue: 'Now! Easy!',
        onChange: console.log,
    });
    const group2 = getRootProps2();
    //step 관련
    const handleNext = () => {
        // if (currentStep === 0 && !emailError && email) {
        //     setCurrentStep(currentStep + 1);
        // } else if (currentStep === 1 && !passwordError && password) {
        //     setCurrentStep(currentStep + 1);
        // } else if (currentStep === 2 && termsChecked.term1 && termsChecked.term2) {
        //     setCurrentStep(currentStep + 1);
        // }
        if (currentStep === 0) {
            setCurrentStep(currentStep + 1);
        } else if (currentStep === 1) {
            setCurrentStep(currentStep + 1);
        } else if (currentStep === 2) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // 기본 Enter 동작 방지 (폼 제출 방지)
            handleNext();
        }
    };

    // 이메일 유효성 검사 함수
    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return '유효한 이메일 주소를 입력해주세요.';
        return '';
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        const error = validateEmail(value);
        setEmailError(error);
    };

    // 비밀번호 유효성 검사 함수
    const validatePassword = (value) => {
        const isValidLength = value.length <= 16;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        // const hasNumber = /\d/.test(value);

        if (!isValidLength) return '비밀번호는 16자 이하로 입력해주세요.';
        if (!hasSpecialChar) return '비밀번호에는 적어도 하나의 특수문자가 포함되어야 합니다.';
        // if (!hasNumber) return "비밀번호에는 적어도 하나의 숫자가 포함되어야 합니다.";

        return '';
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        const error = validatePassword(value);
        setPasswordError(error);
    };

    // 약관 체크박스 상태 업데이트
    const handleTermsChange = (e) => {
        const { name, checked } = e.target;
        setTermsChecked((prev) => ({ ...prev, [name]: checked }));
    };

    // Progress percentage calculation
    const progressPercentage = ((currentStep + 1) / 3) * 100;

    return (
        <div className='bg-white rounded-lg flex flex-col gap-4 flex-1 py-10'>
            {currentStep <= 2 && (
                <>
                    {/* Step Progress Bar */}
                    <div aria-hidden='true' className='mt-6'>
                        <div className='overflow-hidden rounded-full bg-gray-200'>
                            <div
                                style={{ width: `${progressPercentage}%` }}
                                className='h-2 rounded-full bg-indigo-600 transition-all duration-300'
                            />
                        </div>
                        <div className='mt-6 grid grid-cols-3 text-sm font-medium text-gray-600'>
                            <div className={`text-center ${currentStep >= 0 ? 'text-indigo-600' : 'text-gray-400'}`}>
                                Step 1
                            </div>
                            <div className={`text-center ${currentStep >= 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
                                Step 2
                            </div>
                            <div className={`text-center ${currentStep >= 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
                                Step 3
                            </div>
                        </div>
                    </div>

                    {/* Step Content */}
                    <div className='text-center mt-6 flex-1'>
                        {currentStep === 0 && (
                            <div>
                                <VStack {...group1}>
                                    {options.map((value) => {
                                        const radio = getRadioProps1({ value });
                                        return (
                                            <RadioCard key={value} {...radio}>
                                                {value}
                                            </RadioCard>
                                        );
                                    })}
                                </VStack>
                            </div>
                        )}
                        {currentStep === 1 && (
                            <div>
                                <Grid
                                    w='100%'
                                    h='100%'
                                    p='20px'
                                    templateRows='repeat(2, 1fr)'
                                    templateColumns='repeat(2, 1fr)'
                                    gap={4}
                                    {...group2}
                                >
                                    {optionsTwo.map((value) => {
                                        const radio = getRadioProps2({ value });
                                        return (
                                            <RadioCard key={value} {...radio}>
                                                {value}
                                            </RadioCard>
                                        );
                                    })}
                                </Grid>
                            </div>
                        )}
                        {currentStep === 2 && (
                            <div>
                                <Stack spacing={4} p='20px'>
                                    <InputGroup>
                                        <InputLeftAddon>제목</InputLeftAddon>
                                        <Input type='tel' placeholder='전광판에 보이지는 않아요!' />
                                    </InputGroup>

                                    {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
                                    <InputGroup size='sm'>
                                        <InputLeftAddon>지시한 사람</InputLeftAddon>
                                        <Input placeholder='직책을 적어주세요!' />
                                    </InputGroup>

                                    <Textarea isInvalid placeholder='내용을 적어주세요' />
                                </Stack>
                            </div>
                        )}
                    </div>
                </>
            )}

            {currentStep === 3 && (
                <div className='mt-4 text-center text-green-600 font-semibold flex flex-col justify-center items-center'>
                    <div>🎉</div>
                    등록이 완료되었습니다!
                </div>
            )}

            {/* Navigation Buttons */}
            {currentStep <= 2 && (
                <div className='bottom-0 left-0 right-0'>
                    <div className='flex justify-between p-4 bg-white border-t'>
                        <button
                            className={`px-4 py-2 rounded-md font-medium ${
                                currentStep === 0
                                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                            onClick={handlePrev}
                            disabled={currentStep === 0}
                        >
                            이전
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md font-medium ${
                                // (currentStep === 0 && (!email || emailError)) ||
                                // (currentStep === 1 && (!password || passwordError)) ||
                                // (currentStep === 2 && !(termsChecked.term1 && termsChecked.term2))
                                false
                                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                            onClick={handleNext}
                            // disabled={
                            //     (currentStep === 0 && (!email || emailError)) ||
                            //     (currentStep === 1 && (!password || passwordError)) ||
                            //     (currentStep === 2 && !(termsChecked.term1 && termsChecked.term2))
                            // }
                        >
                            {currentStep === 2 ? '완료' : '다음'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
