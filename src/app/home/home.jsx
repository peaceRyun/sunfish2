import React from 'react';
import Menu from './menu';
import { Flex } from '@chakra-ui/react';
import { LedBoardDaily } from './LedBoard';
import Display from './components/Display';

const Home = () => {
    return (
        <>
            <div
                className='bg-cover bg-center bg-no-repeat min-h-screen w-full relative'
                style={{
                    backgroundImage: 'url(/images/pattern/main/투명화면1.png)',
                    backgroundAttachment: 'fixed',
                }}
            >
                <Flex gap='4' direction='column' p='100px 20px 250px'>
                    <Flex gap='4' direction='column'>
                        <LedBoardDaily />
                    </Flex>
                    <Menu></Menu>
                </Flex>
            </div>
        </>
    );
};

export default Home;
