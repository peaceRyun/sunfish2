'use client';

import React from 'react';
import { Flex } from '@chakra-ui/react';
import DropDown from './components/DropDown';

const SadDishesPage = () => {
    return (
        <>
            <Flex direction='column' gap='1' p='80px 20px'>
                <DropDown />
                <DropDown />
            </Flex>
        </>
    );
};

export default SadDishesPage;
