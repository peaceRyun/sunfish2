import { Button } from '@chakra-ui/react';
import React from 'react';

const MenuButton = ({ label }) => {
    return (
        <Button
            width='full'
            height='full'
            display='flex'
            alignItems='center'
            justifyContent='center'
            bg='rgba(0, 0, 0, 0.3)'
            backdropFilter='blur(12px)'
            border='1px solid'
            borderColor='whiteAlpha.100'
            rounded='xl'
            color='whiteAlpha.800'
            fontSize='lg'
            fontWeight='medium'
            padding='3'
            position='relative'
            transition='all 0.3s'
            _hover={{
                bg: 'rgba(0, 0, 0, 0.4)',
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
        >
            {label}
        </Button>
    );
};

export default MenuButton;
