'use client';

import { Box, Flex, GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodItem = ({ src, name }) => {
    return (
        <>
            <Link href='/mukkitlist/sad/saddishes'>
                <GridItem as='li' colSpan={{ base: 1, md: 3 }} className='text-center flex flex-col gap-2'>
                    <Flex
                        direction='column'
                        gap='5px'
                        justify='center'
                        align='center'
                        className='w-full h-20 rounded-3xl bg-gray-200 mx-auto'
                    >
                        <Image src={src} alt='#' width='60' height='60' />
                    </Flex>
                    <Box className='text-xl font-bold '>{name}</Box>
                </GridItem>
            </Link>
        </>
    );
};

export default FoodItem;
