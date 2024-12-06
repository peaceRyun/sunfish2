import { Box, useRadio } from '@chakra-ui/react';

const RadioCard = (props) => {
    const { getInputProps, getRadioProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getRadioProps();

    const getBackgroundColor = (value) => {
        switch (value) {
            case '중요하지만 급하지 않음':
                return '#2ECC71'; // 초록색
            case '중요하고 급합':
                return '#E74C3C'; // 빨간색
            case '급하지 않거나 중요하지 않음':
                return '#95A5A6'; // 회색
            case '급하지만 중요하지 않음':
                return '#F1C40F'; // 노란색
            default:
                return '#04B2D9'; // 기본색
        }
    };

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
                    background: getBackgroundColor(props.value),
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                }}
                _checked={{
                    borderColor: 'transparent',
                    _before: {
                        opacity: 1,
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
