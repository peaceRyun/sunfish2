import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import WaterButton from './components/WaterButton';
import Link from 'next/link';

const Menu = () => {
    return (
        <>
            <Grid w='100%' h='500px' templateRows='repeat(4, 1fr)' templateColumns='repeat(2, 1fr)' gap={4}>
                <GridItem rowSpan={1} colSpan={2}>
                    <Link href='/tdlregister'>
                        <WaterButton label='Todolist 등록하기' />
                    </Link>
                </GridItem>
                <GridItem colSpan={1}>
                    <WaterButton label='Time for 명상' />
                </GridItem>
                <GridItem rowSpan={2}>
                    <WaterButton label='증상별 Encyclopedia' />
                </GridItem>
                <GridItem rowSpan={2}>
                    <WaterButton label='먹킷 list' />
                </GridItem>
                <GridItem colSpan={1}>
                    <WaterButton label='감정 Diary' />
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                    <WaterButton label='힐링 Entertainment' />
                </GridItem>
            </Grid>
        </>
    );
};

export default Menu;
