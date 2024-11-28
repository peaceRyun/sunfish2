'use client';

import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import MoodButton from './components/MoodButton';

const MukkitListPage = () => {
    return (
        <>
            <Flex direction='column' gap='10' px='20px'>
                <Heading>먹킷 List</Heading>
                <Grid w='100%' h='100%' templateRows='repeat(2, 1fr)' templateColumns='repeat(2, 1fr)' gap={4}>
                    <GridItem>
                        <Link href='/sad'>
                            <MoodButton title='우울할때' subtitle='먹으면 좋은 음식' bgColor='blue' />
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link href='/meditation'>
                            <MoodButton title='화가날때' subtitle='먹으면 좋은 음식' bgColor='red' />
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link href='/encyclopedia'>
                            <MoodButton title='불안할때' subtitle='먹으면 좋은 음식' bgColor='orange' />
                        </Link>
                    </GridItem>
                    <GridItem>
                        <Link href='/mukkitlist'>
                            <MoodButton title='피곤할때' subtitle='먹으면 좋은 음식' bgColor='purple' />
                        </Link>
                    </GridItem>
                </Grid>
            </Flex>
        </>
    );
};

export default MukkitListPage;
