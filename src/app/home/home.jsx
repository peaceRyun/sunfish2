import React from 'react';
import Menu from './menu';
import { Flex } from '@chakra-ui/react';
import { LedBoardDaily, LedBoardMonthly, LedBoardWeekly } from './LedBoard';

const Home = () => {
    return (
        <>
            <div className='bg-custom-blue-200 min-h-screen w-full relative'>
                <Flex gap='4' direction='column' p='80px 20px'>
                    <LedBoardDaily />
                    <LedBoardWeekly />
                    <LedBoardMonthly />
                    <Menu p='30px 0px 30px'></Menu>
                </Flex>
            </div>
        </>
    );
};

export default Home;
