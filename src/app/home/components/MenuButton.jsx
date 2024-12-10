import { Button } from '@chakra-ui/react';
import React from 'react';

const MenuButton = ({ label, bg, bgHover, url, whiteSpace = 'normal' }) => {
    return (
        <Button
            width='full'
            height='full'
            display='flex'
            alignItems='center'
            justifyContent='start'
            bg={bg}
            backdropFilter='blur(12px)'
            border='2px solid'
            borderColor='whiteAlpha.300'
            borderTopLeftRadius='md'
            borderTopRightRadius='3xl'
            borderBottomLeftRadius='2xl'
            borderBottomRightRadius='md'
            color='white'
            fontSize='lg'
            fontWeight='semibold'
            padding='3'
            position='relative'
            transition='all 0.3s'
            whiteSpace={whiteSpace}
            textAlign='left'
            _hover={{
                bg: bgHover,
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
                _after: {
                    transform: 'scale(1.1)',
                },
            }}
            _before={{
                content: '""',
                position: 'absolute',
                inset: '0',
                bgGradient: 'linear(to-br, whiteAlpha.50, transparent, blackAlpha.200)',
                pointerEvents: 'none',
                zIndex: '0',
            }}
            _after={{
                content: '""',
                position: 'absolute',
                width: '130px',
                height: '86px',
                bottom: '0',
                right: '0',
                bgImage: url,
                bgSize: 'contain',
                bgRepeat: 'no-repeat',
                bgPosition: 'right',
                borderRadius: 'md',
                zIndex: -1,
                transition: 'transform 0.3s ease',
            }}
        >
            {label}
        </Button>
    );
};

export default MenuButton;
