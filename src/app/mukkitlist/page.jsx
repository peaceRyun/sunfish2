'use client';

import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import MoodMenu from './moodMenu';
import BreadCrumb from './components/BreadCrumb';

const MukkitListPage = () => {
    return (
        <>
            <Flex direction='column' gap='10' p='80px 20px'>
                <MoodMenu />
            </Flex>
        </>
    );
};

export default MukkitListPage;
