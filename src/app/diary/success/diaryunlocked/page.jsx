'use client';

import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const DiaryUnlockedPage = () => {
    return (
        <>
            <Flex gap='8' direction='column' p='80px 20px'>
                <Image
                    src='/images/pattern/main/main-bg1.png'
                    alt='bg1'
                    width={350}
                    height={180}
                    className='opacity-50'
                />
            </Flex>
        </>
    );
};

export default DiaryUnlockedPage;
