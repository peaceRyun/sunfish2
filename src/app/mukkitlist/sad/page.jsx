'use client';

import { Flex, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import FoodItem from './components/FoodItem';
import { sadfoodlist } from '@/data/foodlistData';
import { Search } from 'lucide-react';

const SadPage = () => {
    const [search, setSearch] = useState('');

    const filterFoods = () => {
        return sadfoodlist.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    };

    return (
        <>
            <Flex direction='column' p='80px 20px 0' gap='10px'>
                <form className='relative w-full'>
                    <Search size={18} className='text-gray-700 absolute top-1/2 -translate-y-1/2 left-4' />
                    <input
                        type='search'
                        value={search}
                        placeholder='검색어를 입력하세요.'
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        className='!rounded-3xl bg-gray-100  pt-2 pr-4 pb-2 pl-11 text-lg text-white'
                    />
                </form>
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
