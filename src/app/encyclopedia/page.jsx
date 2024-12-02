'use client';

import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import WaterButton from './components/WaterButton';

const EncyclopediaPage = () => {
    const symtoms = [
        { label: '여드름 관리', src: '/images/pattern/encyclopeida/pimple-icon.png', href: '/encyclopedia/pimple' },
        {
            label: '목/어깨 통증 관리',
            src: '/images/pattern/encyclopeida/musclePain-icon.png',
            href: '/encyclopedia/pimple',
        },
        {
            label: '소화장애 관리',
            src: '/images/pattern/encyclopeida/stomachache-icon.png',
            href: '/encyclopedia/pimple',
        },
    ];

    return (
        <>
            <div className="bg-[url('/images/pattern/encyclopeida/beach1.jfif')] bg-cover bg-center bg-no-repeat w-full min-h-screen relative">
                <Flex gap='8' direction='column' p='80px 20px'>
                    <Heading>증상별 Encyclopedia</Heading>
                    <Flex gap='4' direction='column'>
                        {symtoms.map((item, index) => {
                            return (
                                <WaterButton key={index} label={item.label} src={item.src} href={item.href} h='60px' />
                            );
                        })}
                    </Flex>
                    <Flex gap='8'></Flex>
                </Flex>
            </div>
        </>
    );
};

export default EncyclopediaPage;
