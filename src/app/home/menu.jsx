import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import MenuButton from './components/MenuButton';
import Image from 'next/image';

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
                        <MenuButton
                            label='전광판 등록하기'
                            bg='rgba(91,162,200,0.4)'
                            bgHover='rgba(91,162,200,0.6)'
                            url='url(/images/components/tdlregister.png)'
                        />
                    </Link>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Link href='/meditation' style={{ display: 'block', height: '100%' }}>
                        <MenuButton
                            label='Time for 명상'
                            bg='rgba(163,56,78,0.4)'
                            bgHover='rgba(163,56,78,0.6)'
                            url='url(/images/components/meditation.png)'
                        />
                    </Link>
                </GridItem>
                <GridItem rowSpan={2}>
                    <Link href='/encyclopedia' style={{ display: 'block', height: '100%' }}>
                        <MenuButton
                            label='증상별 Encyclopedia'
                            bg='rgba(116,167,71,0.4)'
                            bgHover='rgba(116,167,71,0.6)'
                            url='url(/images/components/encyclopedia.png)'
                        />
                    </Link>
                </GridItem>
                <GridItem rowSpan={2}>
                    <Link href='/mukkitlist' style={{ display: 'block', height: '100%' }}>
                        <MenuButton
                            label='먹킷 list'
                            bg='rgba(199,178,118,0.4)'
                            bgHover='rgba(199,178,118,0.6)
                        '
                            url='url(/images/components/mukkitlist.png)'
                        />
                    </Link>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Link href='/diary' style={{ display: 'block', height: '100%' }}>
                        <MenuButton
                            label='감정 Diary'
                            bg='rgba(204,102,132,0.4)'
                            bgHover='rgba(204,102,132,0.6)'
                            url='url(/images/components/diary.png)'
                        />
                    </Link>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                    <Link href='/entertain' style={{ display: 'block', height: '100%' }}>
                        <MenuButton
                            label='힐링 Entertainment'
                            bg='rgba(123,77,186,0.4)'
                            bgHover='rgba(123,77,186,0.6)'
                            url='url(/images/components/entertainment.png)'
                        />
                    </Link>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Menu;
