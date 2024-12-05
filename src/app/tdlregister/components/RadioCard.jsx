import { Box, useRadio } from '@chakra-ui/react';

const RadioCard = (props) => {
    const { getInputProps, getRadioProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getRadioProps();

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='2px'
                borderRadius='full'
                transition='all 0.3s ease'
                position='relative'
                overflow='hidden'
                _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: '#04B2D9',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                }}
                _checked={{
                    borderColor: 'transparent',
                    _before: {
                        opacity: 1,
                    },
                    _hover: {
                        transform: 'scale(1.05)',
                    },
                }}
                _hover={{
                    boxShadow: 'lg',
                }}
                px={6}
                py={4}
            >
                <Box position='relative' zIndex={1} color={checkbox.isChecked ? 'white' : 'inherit'}>
                    {props.children}
                </Box>
            </Box>
        </Box>
    );
};

export default RadioCard;
