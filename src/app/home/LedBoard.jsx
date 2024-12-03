import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { LEDBoardsSwiperDaily, LEDBoardsSwiperMonthly, LEDBoardsSwiperWeekly } from './components/ledBoardsSwiper';

export const LedBoardDaily = () => {
    return (
        <>
            <Flex gap='2' direction='column'>
                <Heading fontSize='24px' style={{ letterSpacing: '-0.10em' }}>
                    오늘의 전광판
                </Heading>
                <Box
                    border='1px solid'
                    className='bg-gray-950 text-white rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md'
                >
                    <LEDBoardsSwiperDaily />
                </Box>
            </Flex>
        </>
    );
};

export const LedBoardWeekly = () => {
    return (
        <>
            <Flex gap='2' direction='column'>
                <Heading fontSize='24px' style={{ letterSpacing: '-0.10em' }}>
                    이번주 전광판
                </Heading>
                <Box className='bg-gray-950 text-white rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md'>
                    <LEDBoardsSwiperWeekly />
                </Box>
            </Flex>
        </>
    );
};

export const LedBoardMonthly = () => {
    return (
        <>
            <Flex gap='2' direction='column'>
                <Heading fontSize='24px' style={{ letterSpacing: '-0.10em' }}>
                    이번달 전광판
                </Heading>
                <Box className='bg-gray-950 text-white rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounded-br-md'>
                    <LEDBoardsSwiperMonthly />
                </Box>
            </Flex>
        </>
    );
};
