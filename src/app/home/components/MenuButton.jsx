import { Button } from '@chakra-ui/react';
import React from 'react';

const MenuButton = ({ label, bg, bgHover, url }) => {
    return (
        <Button
            width='full'
            height='full'
            display='flex'
            alignItems='center'
            justifyContent='center'
            bg={bg}
            backdropFilter='blur(12px)'
            border='1px solid'
            borderColor='whiteAlpha.100'
            borderTopLeftRadius='md'
            borderTopRightRadius='3xl'
            borderBottomLeftRadius='2xl'
            borderBottomRightRadius='md'
            color='white'
            fontSize='xl'
            fontWeight='medium'
            padding='3'
            position='relative'
            transition='all 0.3s'
            whiteSpace='normal'
            textAlign='left'
            overflow='hidden'
            _hover={{
                bg: bgHover,
                transform: 'scale(1.02)',
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
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
                width: '200px',
                height: '170px',
                top: '0',
                right: '0',
                bgImage: url,
                bgSize: 'cover',
                bgRepeat: 'no-repeat',
                bgPosition: 'center',
                borderRadius: 'md',
                zIndex: -1,
                opacity: 0.6,
            }}
        >
            {label}
        </Button>
    );
};

export default MenuButton;
