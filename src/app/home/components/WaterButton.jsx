import { Button, Heading } from '@chakra-ui/react';

export default function WaterButton({ w = '100%', h = '100%', label }) {
    return (
        <Button
            w={w}
            h={h}
            bg='rgba(255, 255, 255, 0.2)' // 반투명한 흰색 배경
            color='white'
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
            <Heading size='md'>{label}</Heading>
        </Button>
    );
}
