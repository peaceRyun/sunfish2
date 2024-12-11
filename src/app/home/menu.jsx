import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import MenuButton from './components/MenuButton';
import IconSprite from './components/IconSprite';

const Menu = () => {
    return (
        <Box width='100%' px={0} maxW='390px' mx='auto'>
            <Grid
                templateRows='repeat(4, minmax(80px, 1fr))'
                templateColumns='repeat(2, 1fr)'
                gap={2.5}
                height='360px'
                width='100%'
                p='0'
                className='font-custom2'
            >
                <GridItem rowSpan={1} colSpan={2}>
                    <Link href='/tdlregister' style={{ display: 'block', height: '100%' }}>
                        <MenuButton
                            label='전광판 등록하기'
                            bg='RGB(42, 158, 187)'
                            bgHover='rgba(0, 153, 255, 0.8)'
                            iconName='register'
                        />
                    </Link>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Link href='/diary' style={{ display: 'block', height: '100%' }}>
                        <MenuButton
                            label='감정'
                            label2='일기장'
                            bg=' RGB(141, 192, 188)'
                            bgHover='rgba(207, 0, 62, 0.8)'
                            iconName='diary'
                        />
                    </Link>
                </GridItem>
                <GridItem rowSpan={1}>
                    <Link href='/encyclopedia' style={{ display: 'block', height: '100%' }}>
                        <MenuButton
                            label='증상별'
                            label2='백과사전'
                            bg='RGB(4, 177, 184)'
                            bgHover='rgba(78, 167, 0,0.8)'
                            iconName='encyclopedia'
                            whiteSpace='pre'
                        />
                    </Link>
                </GridItem>
                <GridItem rowSpan={1}>
                    <Link href='/mukkitlist' style={{ display: 'block', height: '100%' }}>
                        <MenuButton
                            label='먹킷'
                            label2='리스트'
                            bg=' RGB(42, 158, 187)'
                            bgHover='rgba(202, 148, 0,0.8)
                        '
                            iconName='mukkit'
                        />
                    </Link>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Link href='/meditation' style={{ display: 'block', height: '100%' }}>
                        <MenuButton
                            label='명상의'
                            label2='시간'
                            bg=' RGB(141, 192, 188)'
                            bgHover='rgba(0, 255, 140,0.8)'
                            iconName='meditation'
                        />
                    </Link>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                    <Link href='/entertain' style={{ display: 'block', height: '100%' }}>
                        <MenuButton
                            label='힐링 엔터테인먼트'
                            bg='RGB(4, 177, 184)'
                            bgHover='rgba(77, 0, 185,0.8)'
                            iconName='entertain'
                        />
                    </Link>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Menu;
