import { Box, Flex, GridItem, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const FoodList = () => {
    const foodlist = [
        { src: '/images/pattern/mukkitlist/menu/모둠버섯.png', name: '버섯' },
        { src: '/images/pattern/mukkitlist/menu/호두.png', name: '호두' },
        { src: '/images/pattern/mukkitlist/menu/연어.png', name: '연어' },
        { src: '/images/pattern/mukkitlist/menu/오리고기.png', name: '오리고기' },
        { src: '/images/pattern/mukkitlist/menu/시금치.png', name: '시금치' },
        { src: '/images/pattern/mukkitlist/menu/굴.png', name: '굴' },
        { src: '/images/pattern/mukkitlist/menu/초콜릿.png', name: '초콜릿' },
        { src: '/images/pattern/mukkitlist/menu/콩.png', name: '콩' },
        { src: '/images/pattern/mukkitlist/menu/카레.png', name: '카레' },
        { src: '/images/pattern/mukkitlist/menu/사과.png', name: '사과' },
    ];
    return (
        <>
            <SimpleGrid as='ul' columns={[3, null, null, 4]} gap='40px'>
                {foodlist.map((item, index) => (
                    <GridItem
                        key={index}
                        as='li'
                        colSpan={{ base: 1, md: 3 }}
                        className='text-center flex flex-col gap-2'
                    >
                        <Flex
                            direction='column'
                            gap='5px'
                            justify='center'
                            align='center'
                            className='w-20 h-20 rounded-3xl bg-gray-200 mx-auto'
                        >
                            <Image src={item.src} alt='#' width='60' height='60' />
                        </Flex>
                        <Box className='text-xl font-bold '>{item.name}</Box>
                    </GridItem>
                ))}
            </SimpleGrid>
        </>
    );
};

export default FoodList;
