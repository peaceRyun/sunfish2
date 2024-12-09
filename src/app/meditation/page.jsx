'use client';

import { Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const MeditationPage = () => {
    return (
        <>
            <Flex direction='column' gap='2'>
                <Heading as='h2' className='m-auto px-5 py-[100px] font-custom2'>
                    아직 개발중입니다.
                </Heading>
                <Image
                    src='/images/pattern/fixing.jpg'
                    alt='fixing'
                    width={1000}
                    height={1000}
                    className='w-full m-auto'
                ></Image>
            </Flex>
        </>
    );
};

export default MeditationPage;
