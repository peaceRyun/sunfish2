import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import MenuButton from './components/MenuButton';

const Menu = () => {
    return (
        <Box px={0} maxW='390px' mx='auto'>
            <Grid
                templateRows='repeat(5, minmax(80px, 1fr))'
                templateColumns='repeat(2, 1fr)'
                gap={2.5}
                height='600px'
                width='100%'
                p='0'
            >
                <GridItem rowSpan={1} colSpan={2}>
                    <Link href='/tdlregister' style={{ display: 'block', height: '100%' }}>
                        <MenuButton label='Todolist 등록하기' />
                    </Link>
                </GridItem>
                <GridItem>
                    <Link href='/meditation' style={{ display: 'block', height: '100%' }}>
                        <MenuButton label='Time for 명상' />
                    </Link>
                </GridItem>
                <GridItem rowSpan={2}>
                    <Link href='/encyclopedia' style={{ display: 'block', height: '100%' }}>
                        <MenuButton label='증상별 Encyclopedia' />
                    </Link>
                </GridItem>
                <GridItem rowSpan={2}>
                    <Link href='/mukkitlist' style={{ display: 'block', height: '100%' }}>
                        <MenuButton label='먹킷 list' />
                    </Link>
                </GridItem>
                <GridItem>
                    <Link href='/diary' style={{ display: 'block', height: '100%' }}>
                        <MenuButton label='감정 Diary' />
                    </Link>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                    <Link href='/entertain' style={{ display: 'block', height: '100%' }}>
                        <MenuButton label='힐링 Entertainment' />
                    </Link>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Menu;
