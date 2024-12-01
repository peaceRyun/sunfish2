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
            <Button colorScheme='teal' size='lg' onClick={() => router.push('/')}>
                홈으로 돌아가기
            </Button>
        </Flex>
    );
};

export default SuccessPage;
