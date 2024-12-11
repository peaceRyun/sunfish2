import { Button } from '@chakra-ui/react';
import React from 'react';
import IconSprite from './IconSprite';

const MenuButton = ({ label, label2 = '', bg, bgHover, iconName, whiteSpace = 'normal' }) => {
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
                '& .icon-wrapper': {
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
        >
            <div style={{ width: '60%', lineHeight: '1.4' }}>
                <div>{label}</div>
                <div>{label2}</div>
            </div>
            <div
                className='icon-wrapper'
                style={{
                    position: 'absolute',
                    bottom: '50%',
                    right: '0',
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                    zIndex: -1,
                    transform: 'translate(0, 50%)',
                }}
            >
                <IconSprite iconName={iconName} size={70} />
            </div>
        </Button>
    );
};

export default MenuButton;
