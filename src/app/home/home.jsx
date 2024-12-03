import React from 'react';
import Menu from './menu';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { LedBoardDaily, LedBoardMonthly, LedBoardWeekly } from './LedBoard';

const Home = () => {
    return (
        <>
            <div className=' min-h-screen w-full relative'>
                <Flex gap='4' direction='column' p='100px 20px'>
                    <Flex gap='4' direction='column'>
                        <LedBoardDaily />
                        <LedBoardWeekly />
                        <LedBoardMonthly />
                    </Flex>
                    <Menu p='30px 0px 30px'></Menu>
                </Flex>
            </div>
        </>
    );
};

export default Home;
