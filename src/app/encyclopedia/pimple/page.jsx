'use client';

import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const PimplePage = () => {
    return (
        <>
            <Flex
                direction='column'
                gap='3'
                p='80px 20px'
                className="bg-[url('/images/pattern/encyclopeida/beach1.jfif')] bg-cover bg-center bg-no-repeat w-full min-h-screen relative"
            >
                <Flex
                    direction='column'
                    gap='2'
                    bg='rgba(255, 255, 255, 0.2)'
                    color='black'
                    border='2px solid rgba(255, 255, 255, 0.5)'
                    backdropFilter='blur(10px)'
                    p='20px'
                >
                    <Heading as='h2' size='md'>
                        대표적인 증상
                    </Heading>
                    <Box>
                        염증성 여드름으로 나타난다. 상열감이 극심해지면서, 피지 분비가 필요 이상 급증하며 마치
                        유전적으로 타고난 여드름 피부처럼 변화할 가능성이 있다.
                    </Box>
                </Flex>
                <Flex
                    direction='column'
                    gap='2'
                    bg='rgba(255, 255, 255, 0.2)'
                    color='black'
                    border='2px solid rgba(255, 255, 255, 0.5)'
                    backdropFilter='blur(10px)'
                    p='20px'
                >
                    <Heading as='h2' size='md'>
                        스트레스성 여드름에 대처하기 위한 조언 1
                    </Heading>
                    <Box>
                        심호흡, 명상, 반신욕, 운동, 스트레칭 숙면 등으로 초점을 돌리고 잔잔한 음악을 듣거나 일기를 쓰는
                        등회복을 위한 나만의 시간을 갖는 것이 좋다.
                    </Box>
                </Flex>
                <Flex
                    direction='column'
                    gap='2'
                    bg='rgba(255, 255, 255, 0.2)'
                    color='black'
                    border='2px solid rgba(255, 255, 255, 0.5)'
                    backdropFilter='blur(10px)'
                    p='20px'
                >
                    <Heading as='h2' size='md'>
                        스트레스성 여드름에 대처하기 위한 조언 2
                    </Heading>
                    <Box>
                        피부에 열로 인한 스트레스가 누적되면 피부 속 수분이 고갈되어 피지 분비가 급증하게 되는데, 이때
                        유수분 밸런스가 무너지면서 여드름이 발생하기 쉬운 환경이 만 들어진다. 붉게달아오른 열감과 염증성
                        징후를 동시에 가라앉혀주는 알로에베라, 아줄렌, 라벤더 등을 스킨케어에 추가한다. 쿨링 아로마
                        오일을 바르고 마사지하는 것도 좋은 방법이다.
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};

export default PimplePage;
