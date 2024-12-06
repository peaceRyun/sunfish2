'use client';

import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Grid,
    Stack,
    Textarea,
    useRadioGroup,
    VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import RadioCard from './components/RadioCard';
import InputError from '@/components/pattern/form/InputError';
import Link from 'next/link';
import ArrowMatrix from './components/ArrowMatrix';

export default function TdlRegisterPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [titleValue, setTitleValue] = useState('');
    const [assignedByValue, setAssignedByValue] = useState('');
    const [valueText, setValueText] = useState('');
    const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);
    const CHARACTER_LIMIT = 20;

    //step 1 radio 버튼
    const options = ['오늘까지', '이번주 0요일까지', '이번 달까지'];
    const { getRootProps: getRootProps1, getRadioProps: getRadioProps1 } = useRadioGroup({
        name: 'period',
        defaultValue: '오늘까지',
        onChange: console.log,
    });
    const group1 = getRootProps1();

    //step 2 radio 버튼
    const optionsTwo = [
        '중요하지만\n급하지 않음',
        '중요하고\n급함',
        '급하지 않거나\n중요하지 않음',
        '급하지만\n중요하지 않음',
    ];
    const { getRootProps: getRootProps2, getRadioProps: getRadioProps2 } = useRadioGroup({
        name: 'priority',
        defaultValue: '중요하고 급합',
        onChange: console.log,
    });
    const group2 = getRootProps2();

    //step 3 input & textarea
    const handleChangeText = (event) => {
        const text = event.target.value;
        if (text.length <= CHARACTER_LIMIT) {
            setValueText(text);
        }
    };

    //step 4 완료 문구 3초간 보여주기
    useEffect(() => {
        if (currentStep === 3) {
            const timer = setTimeout(() => {
                window.location.href = '/';
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [currentStep]);

    //step 관련
    const handleNext = () => {
        if (currentStep === 2) {
            setIsSubmitAttempted(true);

            // 유효성 검사
            const isValid = titleValue && assignedByValue && valueText;
            if (!isValid) {
                return;
            }

            // 데이터 저장 및 다음 단계
            const eboarddata = JSON.parse(localStorage.getItem('eboarddata') || '[]');
            const newData = {
                id: Date.now(),
                title: titleValue,
                assignedBy: assignedByValue,
                valueText: valueText,
            };
            eboarddata.push(newData);
            localStorage.setItem('eboarddata', JSON.stringify(eboarddata));
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
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
                                className='h-2 rounded-full bg-custom-deepsea-500 transition-all duration-300'
                            />
                        </div>
                        <div className='mt-6 grid grid-cols-3 text-sm font-medium text-gray-600'>
                            <div
                                className={`text-center ${
                                    currentStep >= 0 ? 'text-custom-deepsea-500' : 'text-gray-400'
                                }`}
                            >
                                Step 1. <br />
                                기간
                            </div>
                            <div
                                className={`text-center ${
                                    currentStep >= 1 ? 'text-custom-deepsea-500' : 'text-gray-400'
                                }`}
                            >
                                Step 2. <br />
                                우선순위
                            </div>
                            <div
                                className={`text-center ${
                                    currentStep >= 2 ? 'text-custom-deepsea-500' : 'text-gray-400'
                                }`}
                            >
                                Step 3. <br />
                                전광판 등록
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
                            <div className='w-80 m-auto'>
                                <ArrowMatrix />
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
                                    <InputError
                                        label='제목'
                                        type='text'
                                        isSubmit={isSubmitAttempted}
                                        value={titleValue}
                                        onChange={setTitleValue}
                                    />
                                    <InputError
                                        label='지시한 사람'
                                        type='text'
                                        isSubmit={isSubmitAttempted}
                                        value={assignedByValue}
                                        onChange={setAssignedByValue}
                                    />
                                    <FormControl isInvalid={isSubmitAttempted && valueText === ''}>
                                        <FormLabel>내용</FormLabel>
                                        <Textarea
                                            value={valueText}
                                            onChange={handleChangeText}
                                            placeholder='내용을 적어주세요 (최대 20자)'
                                            maxLength={CHARACTER_LIMIT}
                                        />
                                        {!(isSubmitAttempted && valueText === '') ? (
                                            <FormHelperText className='text-left'>
                                                전광판에 표시될 내용을 입력합니다. ({valueText.length}/{CHARACTER_LIMIT}
                                                자)
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage>내용이 필요합니다.</FormErrorMessage>
                                        )}
                                    </FormControl>
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
                    <div className='mt-2 text-sm text-gray-500'>잠시 후 홈으로 이동합니다...</div>
                </div>
            )}

            {/* Navigation Buttons */}
            {currentStep <= 2 && (
                <div className='bottom-0 left-0 right-0 z-10'>
                    <div className='flex justify-between p-4 bg-white border-t'>
                        <button
                            className={`px-4 py-2 rounded-md font-medium ${
                                currentStep === 0
                                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                    : 'bg-custom-deepsea-500 text-white hover:bg-custom-deepsea-600'
                            }`}
                            onClick={handlePrev}
                            disabled={currentStep === 0}
                        >
                            이전
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md font-medium bg-custom-deepsea-500 text-white hover:bg-custom-deepsea-600`}
                            onClick={handleNext}
                        >
                            {currentStep === 2 ? '완료' : '다음'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
