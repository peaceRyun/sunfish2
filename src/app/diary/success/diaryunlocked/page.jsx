'use client';

import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { CirclePlus } from 'lucide-react';
import DiaryCard from './components/DiaryCard';

const DiaryUnlockedPage = () => {
    return (
        <>
            <Box>
                <Box pt='50px'>
                    <Image
                        src='/images/pattern/main/main-bg1.png'
                        alt='bg1'
                        width={390}
                        height={180}
                        className='opacity-50'
                    />
                </Box>
                <Flex width='100%' gap='3' direction='column' p='0 20px' className='absolute top-48 left-0'>
                    <span className='text-xs text-gray-600'>2024</span>
                    <DiaryCard />
                    <DiaryCard />
                    <DiaryCard />
                </Flex>
                <Box className='fixed bottom-20 left-1/2 -translate-x-1/2'>
                    <CirclePlus color='white' fill='#4892E0' size={50} strokeWidth={1} />
                </Box>
            </Box>
        </>
    );
};

export default DiaryUnlockedPage;
