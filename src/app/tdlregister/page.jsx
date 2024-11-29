'use client';
import React from 'react';
import { Basic } from './components/Steps';
import { Flex, Heading } from '@chakra-ui/react';

const TdlRegisterPage = () => {
    return (
        <>
            <Flex direction='column' gap='10px' p='80px 20px 0'>
                <Basic />
                <Heading>TdlRegisterPage</Heading>
            </Flex>
        </>
    );
};

export default TdlRegisterPage;
