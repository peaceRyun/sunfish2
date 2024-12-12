'use client';

import React from 'react';
import { Flex } from '@chakra-ui/react';
import AccordionFood from '../../components/AccordionFood';
import DishItem from '../../components/DishItem';
import { Filter } from 'lucide-react';

const SadDishesPage = () => {
    return (
        <>
            <div className='border-t my-4'>
                <Flex gap='1' justify='end' className='px-5 text-sm'>
                    <span>최신순</span>
                    <Filter size={15} />
                </Flex>
            </div>
            <Flex direction='column' gap='1' p='80px 20px'>
                <DishItem />
            </Flex>
        </>
    );
};

export default SadDishesPage;
