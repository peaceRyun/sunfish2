import { Button, Flex, Grid, PinInput, PinInputField, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const PinCode = () => {
    const [step, setStep] = useState('set');
    const [pin, setPin] = useState('');
    const [correctPin, setCorrectPin] = useState(null);
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        const savedPin = localStorage.getItem('pin');
        if (savedPin) {
            setCorrectPin(JSON.parse(savedPin));
            setStep('enter');
        }
    }, []);

    useEffect(() => {
        if (pin.length === 4) {
            handleSubmit();
        }
    }, [pin]);

    const handleSetPin = () => {
        if (pin.length !== 4) {
            setError('PIN 코드는 4자리여야 합니다.');
            return;
        }
        localStorage.setItem('pin', JSON.stringify(pin));
        setCorrectPin(pin);
        setPin('');
        setStep('enter');
        setError('');
    };

    const handleEnterPin = () => {
        if (pin === correctPin) {
            setError('');
            setPin('');
            router.push('/diary/success');
        } else {
            setError('PIN 코드가 틀렸습니다.');
            setPin('');
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
                        {step === 'set' ? 'PIN 코드 설정' : 'PIN 코드 입력'}
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

                {error && (
                    <Text color='red.500' fontSize='sm' className='absolute top-36 left-1/2 -translate-x-2/4'>
                        {error}
                    </Text>
                )}

                <Grid templateColumns='repeat(3, 1fr)' gap='4' p='70px 40px'>
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0'].map((key) => (
                        <Button
                            key={key}
                            size='lg'
                            fontSize='3xl'
                            variant='ghost'
                            onClick={() => {
                                if (key === 'clear') {
                                    setPin((prev) => prev.slice(0, -1));
                                } else {
                                    setPin((prev) => (prev + key).slice(0, 4));
                                }
                            }}
                            w='80px'
                            h='80px'
                            mx='auto'
                        >
                            {key === 'clear' ? '<-' : key}
                        </Button>
                    ))}
                </Grid>
            </Flex>
        </>
    );
};

export default PinCode;
