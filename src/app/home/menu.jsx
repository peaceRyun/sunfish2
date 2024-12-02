import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import WaterButton from './components/WaterButton';
import Link from 'next/link';

const Menu = () => {
    return (
        <>
            <Grid w='100%' h='600px' templateRows='repeat(5, 1fr)' templateColumns='repeat(2, 1fr)' gap={4}>
                <GridItem rowSpan={1} colSpan={2}>
                    <Link href='/tdlregister'>
                        <WaterButton label='Todolist 등록하기' />
                    </Link>
                </GridItem>
                <GridItem>
                    <Link href='/meditation'>
                        <WaterButton label='Time for 명상' />
                    </Link>
                </GridItem>
                <GridItem rowSpan={2}>
                    <Link href='/encyclopedia'>
                        <WaterButton label='증상별 Encyclopedia' />
                    </Link>
                </GridItem>
                <GridItem rowSpan={2}>
                    <Link href='/mukkitlist'>
                        <WaterButton label='먹킷 list' />
                    </Link>
                </GridItem>
                <GridItem>
                    <Link href='/diary'>
                        <WaterButton label='감정 Diary' />
                    </Link>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                    <Link href='/entertain'>
                        <WaterButton label='힐링 Entertainment' />
                    </Link>
                </GridItem>
            </Grid>
        </>
    );
};

export default Menu;
