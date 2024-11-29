'use client';

import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import BreadCrumb from './components/BreadCrumb';
import FoodList from './components/FoodList';

const SadPage = () => {
    return (
        <>
            <Flex direction='column' p='80px 20px 0' gap='10px'>
                <BreadCrumb />
                <FoodList />
            </Flex>
        </>
    );
};

export default SadPage;
