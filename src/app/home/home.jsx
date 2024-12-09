import React from 'react';
import Menu from './menu';
import { Flex, Heading } from '@chakra-ui/react';
import { LedBoardDaily } from './LedBoard';
import 'animate.css';

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
                <Flex gap='4' direction='column' p='100px 20px 20px'>
                    <Flex gap='4' direction='column'>
                        <LedBoardDaily />
                    </Flex>
                    <Menu p='30px 0px 30px'></Menu>
                    <Heading as='h2' size='lg' className='animate__animated animate__flip font-custom2'>
                        스트레스를 날려봅시다!
                    </Heading>
                </Flex>
            </div>
        </>
    );
};

export default Home;
