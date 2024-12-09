'use client';

import React from 'react';
import { Flex } from '@chakra-ui/react';
import AccordionFood from '../../components/AccordionFood';

const AngryDishesPage = () => {
    return (
        <>
            <Flex direction='column' gap='1' p='80px 20px'>
                <AccordionFood />
            </Flex>
        </>
    );
};

export default AngryDishesPage;
