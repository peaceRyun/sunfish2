'use client';

import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Filter } from 'lucide-react';
import { tiredfoodlist } from '@/data/foodlistData';
import { useParams } from 'next/navigation';
import DishItem from '../../components/DishItem';

const DishDetail = () => {
    const params = useParams();
    const id = parseInt(params.id);

    const food = tiredfoodlist.find((item) => item.id === id);

    if (!food) {
        return <div>찾을 수 없는 음식입니다.</div>;
    }

    return (
        <>
            <div className='border-t my-4'>
                <Flex gap='1' justify='end' className='px-5 text-sm'>
                    <span>최신순</span>
                    <Filter size={15} />
                </Flex>
            </div>
            <Flex direction='column' gap='1' p='80px 20px'>
                <DishItem filterId={food.name} />
            </Flex>
        </>
    );
};

export default DishDetail;
