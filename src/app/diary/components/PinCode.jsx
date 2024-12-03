import { Button, Flex, Grid, PinInput, PinInputField, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const PinCode = () => {
    const [step, setStep] = useState('set'); // 현재 단계: 'set', 'confirm', 'enter'
    const [pin, setPin] = useState(''); // 현재 입력값
    const [correctPin, setCorrectPin] = useState(null); // 설정된 PIN
    const [error, setError] = useState(''); // 에러 메시지
    const router = useRouter(); // Next.js의 라우터

    // 로컬 스토리지에서 PIN 불러오기
    useEffect(() => {
        const savedPin = localStorage.getItem('pin');
        if (savedPin) {
            setCorrectPin(JSON.parse(savedPin)); // 저장된 PIN 불러오기
            setStep('enter'); // PIN이 이미 설정된 경우 입력 단계로 이동
        }
    }, []);

    const handleSetPin = () => {
        if (pin.length !== 4) {
            setError('PIN 코드는 4자리여야 합니다.');
            return;
        }
        localStorage.setItem('pin', JSON.stringify(pin)); // 로컬 스토리지에 PIN 저장
        setCorrectPin(pin); // 설정된 PIN 업데이트
        setPin(''); // 입력 초기화
        setStep('enter'); // PIN 입력 단계로 이동
        setError('');
    };

    const handleEnterPin = () => {
        if (pin === correctPin) {
            setError('');
            setPin('');
            router.push('/diary/success'); // PIN이 맞으면 다른 페이지로 이동
        } else {
            setError('PIN 코드가 틀렸습니다.');
            setPin('');
        }
    };

    const handleKeyClick = (value) => {
        if (value === 'clear') {
            setPin((prev) => prev.slice(0, -1)); // 마지막 입력 삭제
        } else {
            setPin((prev) => (prev + value).slice(0, 4)); // 최대 4자리 제한
        }
    };

    const handleSubmit = () => {
        if (step === 'set') handleSetPin();
        else if (step === 'enter') handleEnterPin();
    };
    return (
        <>
            <Flex direction='column' gap='10px' p='100px 0'>
                <div className='absolute top-7 left-1/2 -translate-x-1/2 p-10'>
                    <Text fontSize='lg' fontWeight='bold'>
                        {step === 'set' && 'PIN 코드 설정'}
                        {step === 'enter' && 'PIN 코드 입력'}
                    </Text>
                </div>

                <Flex gap='4' justify='space-between' p='80px 40px 0'>
                    <PinInput mask size='lg' onChange={setPin} value={pin} isInvalid={!!error}>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </Flex>

                {/* 에러 메시지 */}
                {error && (
                    <Text color='red.500' fontSize='sm' className='absolute top-36 left-1/2 -translate-x-2/4'>
                        {error}
                    </Text>
                )}

                {/* Number Pad */}
                <Grid templateColumns='repeat(3, 1fr)' gap='4' p='70px 40px'>
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0'].map((key) => (
                        <Button
                            key={key}
                            size='lg'
                            colorScheme='blue'
                            onClick={() => {
                                if (key === 'clear') {
                                    setPin((prev) => prev.slice(0, -1)); // 마지막 입력 삭제
                                } else {
                                    setPin((prev) => (prev + key).slice(0, 4)); // 최대 4자리 제한
                                }
                            }}
                            w='80px'
                            h='80px'
                            mx='auto'
                        >
                            {key === 'clear' ? 'DEL' : key}
                        </Button>
                    ))}
                </Grid>

                {/* Submit 버튼 */}
                <Button
                    colorScheme='blue'
                    size='lg'
                    onClick={handleSubmit}
                    w='80px'
                    h='80px'
                    className='absolute bottom-56 right-14'
                >
                    {step === 'set' ? 'PIN 설정' : '확인'}
                </Button>
            </Flex>
        </>
    );
};

export default PinCode;
