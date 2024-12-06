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
        '중요하지만 급하지 않음',
        '중요하고 급합',
        '급하지 않거나 중요하지 않음',
        '급하지만 중요하지 않음',
    ];
    const { getRootProps: getRootProps2, getRadioProps: getRadioProps2 } = useRadioGroup({
        name: 'priority',
        defaultValue: '중요하고 급합',
        onChange: console.log,
    });
    const group2 = getRootProps2();

    //step 3 input & textarea
    //input
    const [value, setValue] = useState('');
    const [isInvalid, setIsInvalid] = useState(true);

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        setIsInvalid(inputValue.length === 0);
    };
    //textarea
    const [valueText, setValueText] = useState('');
    const [isInvalidText, setIsInvalidText] = useState(true);

    const handleChangeText = (event) => {
        const textAreaValue = event.target.value;
        setValueText(textAreaValue);
        setIsInvalidText(textAreaValue.length === 0);
    };
    //title
    const [valueTitle, setValueTitle] = useState('');
    const [isInvalidTitle, setIsInvalidTitle] = useState(true);

    const handleChangeTitle = (event) => {
        const textAreaValue = event.target.value;
        setValueTitle(textAreaValue);
        setIsInvalidTitle(textAreaValue.length === 0);
    };

    //step 관련
    const handleNext = () => {
        if (currentStep === 0) {
            setCurrentStep(currentStep + 1);
        } else if (currentStep === 1) {
            setCurrentStep(currentStep + 1);
        } else if (currentStep === 2) {
            setCurrentStep(currentStep + 1);
            const eboarddata = JSON.parse(localStorage.getItem('eboarddata') || '[]');
            const newData = {
                id: Date.now(), // 고유 ID 추가
                // period: group1.value, // 기간 정보
                // priority: group2.value, // 우선순위 정보
                title: valueTitle,
                // assignedBy: value, // 지시한 사람
                valueText: valueText, // 내용
                // createdAt: new Date().toISOString(),
            };
            eboarddata.push(newData);
            localStorage.setItem('eboarddata', JSON.stringify(eboarddata));
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
                                Step 1. 기간
                            </div>
                            <div
                                className={`text-center ${
                                    currentStep >= 1 ? 'text-custom-deepsea-500' : 'text-gray-400'
                                }`}
                            >
                                Step 2. 우선순위
                            </div>
                            <div
                                className={`text-center ${
                                    currentStep >= 2 ? 'text-custom-deepsea-500' : 'text-gray-400'
                                }`}
                            >
                                Step 3. 전광판 등록
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
                                        <InputLeftAddon className='bg-custom-deepsea-500 text-white'>
                                            제목
                                        </InputLeftAddon>
                                        <Input
                                            value={valueTitle}
                                            onChange={handleChangeTitle}
                                            isInvalid={isInvalidTitle}
                                            placeholder='전광판에 보이지는 않아요!'
                                        />
                                    </InputGroup>

                                    {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
                                    <InputGroup size='sm'>
                                        <InputLeftAddon className='bg-custom-deepsea-500 text-white'>
                                            지시한 사람
                                        </InputLeftAddon>
                                        <Input
                                            value={value}
                                            onChange={handleChange}
                                            isInvalid={isInvalid}
                                            placeholder='직책을 적어주세요!'
                                        />
                                    </InputGroup>

                                    <Textarea
                                        value={valueText}
                                        onChange={handleChangeText}
                                        isInvalid={isInvalidText}
                                        placeholder='내용을 적어주세요'
                                    />
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
                                    : 'bg-custom-deepsea-500 text-white hover:bg-custom-deepsea-600'
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
                                currentStep === 2 && !(value && valueText && valueTitle)
                                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                    : 'bg-custom-deepsea-500 text-white hover:bg-custom-deepsea-600'
                            }`}
                            onClick={handleNext}
                            disabled={
                                //     (currentStep === 0 && (!email || emailError)) ||
                                //     (currentStep === 1 && (!password || passwordError)) ||
                                currentStep === 2 && !(value && valueText && valueTitle)
                            }
                        >
                            {currentStep === 2 ? '완료' : '다음'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
