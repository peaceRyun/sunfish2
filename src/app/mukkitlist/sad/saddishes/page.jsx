'use client';

import React from 'react';
import DropDown from './components/DropDown';
import { Flex } from '@chakra-ui/react';

const SadDishesPage = () => {
    return (
        <>
            <Flex direction='column' gap='10' p='80px 20px'>
                <DropDown />
            </Flex>
        </>
    );
};

export default SadDishesPage;
