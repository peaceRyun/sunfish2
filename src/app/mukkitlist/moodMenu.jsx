import { Grid, GridItem } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import MoodButton from './components/MoodButton';

const MoodMenu = () => {
    return (
        <>
            <Grid w='100%' h='100%' templateRows='repeat(2, 1fr)' templateColumns='repeat(2, 1fr)' gap={4}>
                <GridItem>
                    <Link href='/mukkitlist/sad'>
                        <MoodButton title='우울할때' subtitle='먹으면 좋은 음식' bgColor='blue' />
                    </Link>
                </GridItem>
                <GridItem>
                    <Link href='/mukkitlist/angry'>
                        <MoodButton title='화가날때' subtitle='먹으면 좋은 음식' bgColor='red' />
                    </Link>
                </GridItem>
                <GridItem>
                    <Link href='/mukkitlist/anxiety'>
                        <MoodButton title='불안할때' subtitle='먹으면 좋은 음식' bgColor='orange' />
                    </Link>
                </GridItem>
                <GridItem>
                    <Link href='/mukkitlist/tired'>
                        <MoodButton title='피곤할때' subtitle='먹으면 좋은 음식' bgColor='purple' />
                    </Link>
                </GridItem>
            </Grid>
        </>
    );
};

export default MoodMenu;
