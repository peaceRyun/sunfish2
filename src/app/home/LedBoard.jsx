import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { LEDBoardsSwiperDaily, LEDBoardsSwiperMonthly, LEDBoardsSwiperWeekly } from './ledBoardsSwiper';

export const LedBoardDaily = () => {
    return (
        <>
            <Flex gap='2' direction='column'>
                <Heading>오늘의 전광판</Heading>
                <Box className='bg-black rounded text-white'>
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
                <Heading>이번주 전광판</Heading>
                <Box className='bg-black rounded text-white'>
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
                <Heading>이번달 전광판</Heading>
                <Box className='bg-black rounded text-white'>
                    <LEDBoardsSwiperMonthly />
                </Box>
            </Flex>
        </>
    );
};
