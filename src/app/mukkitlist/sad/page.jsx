'use client';

import { Flex, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import FoodItem from './components/FoodItem';
import { sadfoodlist } from '@/data/foodlistData';

const SadPage = () => {
    const [search, setSearch] = useState('');

    const filterFoods = () => {
        return sadfoodlist.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    };

    return (
        <>
            <Flex direction='column' p='80px 20px 0' gap='10px'>
                <input
                    type='search'
                    value={search}
                    placeholder='검색어를 입력하세요.'
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <SimpleGrid as='ul' columns={[3, null, null, 4]} gap='4px'>
                    {filterFoods().map((item, index) => (
                        <FoodItem key={index} {...item} />
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    );
};

export default SadPage;
