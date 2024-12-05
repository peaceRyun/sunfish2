'use client';

import { Flex, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const SuccessPage = () => {
    const router = useRouter();

    return (
        <Flex direction='column' align='center' justify='center' h='100vh' gap='4'>
            <Text fontSize='2xl' fontWeight='bold' color='green.500'>
                PIN 인증에 성공했습니다!
            </Text>
            <Button colorScheme='blue' size='lg' onClick={() => router.push('/diary/success/diaryunlocked')}>
                감정일기 쓰러 가기
            </Button>
        </Flex>
    );
};

export default SuccessPage;
