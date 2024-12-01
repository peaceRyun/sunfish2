import { Button, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';

export default function WaterButton({ w = '100%', h = '100%', label, src }) {
    return (
        <Button
            w={w}
            h={h}
            bg='rgba(255, 255, 255, 0.2)' // 반투명한 흰색 배경
            color='black'
            border='2px solid rgba(255, 255, 255, 0.5)' // 반투명 테두리
            backdropFilter='blur(10px)' // 유리 같은 효과
            _hover={{
                bg: 'rgba(255, 255, 255, 0.4)', // 호버 시 더 밝아짐
                transform: 'scale(1.1)', // 살짝 확대
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)', // 빛나는 효과
            }}
            transition='all 0.3s ease-in-out'
            p='0'
            whiteSpace='pre-wrap'
            textAlign='left'
        >
            <Flex align='center' mr='auto' p='7px 14px' gap='6'>
                <Image src={src} alt='icon' width='45' height='45' />
                <Heading size='md' fontWeight='normal' _hover={{ fontWeight: 'bold' }}>
                    {label}
                </Heading>
            </Flex>
        </Button>
    );
}
