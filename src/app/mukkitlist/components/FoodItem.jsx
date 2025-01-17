'use client';

import { colormap } from '@/data/foodlistData';
import { Box, Flex, GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getFoodColor = (name) => {
    return colormap[name] || 'gray.50';
};

const FoodItem = ({ src, name, id }) => {
    const imageSize = name.includes('초콜릿') || name.includes('사과') ? 50 : 60;

    return (
        <>
            <Link href={`/mukkitlist/sad/${id}`}>
                <GridItem
                    as='li'
                    className='text-center flex flex-col gap-2'
                    bg={getFoodColor(name)}
                    colSpan={{ base: 1, md: 3 }}
                    rounded='xl'
                    p={4}
                    transition='all 0.2s'
                    _hover={{
                        shadow: 'lg',
                        transform: 'translateY(-2px)',
                    }}
                >
                    <Flex
                        direction='column'
                        gap='5px'
                        justify='center'
                        align='center'
                        className='w-full h-20 rounded-3xl  mx-auto'
                    >
                        <Image src={src} alt='#' width={imageSize} height={imageSize} />
                    </Flex>
                    <Box fontSize='sm' fontWeight='medium' textAlign='center'>
                        {name}
                    </Box>
                </GridItem>
            </Link>
        </>
    );
};

export default FoodItem;
