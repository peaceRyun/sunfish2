'use client';

import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const MusclePainPage = () => {
    return (
        <>
            <Flex
                direction='column'
                gap='3'
                p='80px 20px'
                className="bg-[url('/images/pattern/main/화이트책배경.png')] bg-cover bg-center bg-no-repeat w-full min-h-screen relative"
                style={{
                    backgroundAttachment: 'fixed',
                }}
            >
                <Heading as='h2' size='md'>
                    지압법 2가지를 소개합니다!
                </Heading>

                <Flex
                    direction='column'
                    gap='2'
                    bg='rgba(255, 255, 255, 0.2)'
                    color='black'
                    border='2px solid rgba(255, 255, 255, 0.5)'
                    backdropFilter='blur(10px)'
                    p='20px'
                >
                    <Heading as='h3' size='lg'>
                        지압법1 - 어깨, 등
                    </Heading>
                    <Image
                        src='/images/pattern/encyclopeida/musclepain1.png'
                        alt='목 어깨 지압위치'
                        width={500}
                        height={500}
                    />
                    <Flex direction='column' gap='4'>
                        <Flex direction='column' gap='1'>
                            <Heading
                                as='h4'
                                size='md'
                                className='bg-red-600 px-2 py-1 text-gray-100 inline-block w-fit'
                            >
                                견정
                            </Heading>
                            <Box>뒷목 중앙선과 어깨 끝점의 중간에 있는 약간 튀어나온 지점</Box>
                        </Flex>
                        <Flex direction='column' gap='1'>
                            <Heading
                                as='h4'
                                size='md'
                                className='bg-blue-600 px-2 py-1 text-gray-100 inline-block w-fit'
                            >
                                신주
                            </Heading>
                            <Box>
                                고객를 앞으로 숙이면 목 끝부분에 튀어나오는 뼈를 기준(1번)으로, 아래쪽 3~4번째 척추뼈
                                사이의 옴폭 파인 곳
                            </Box>
                        </Flex>
                        <Flex direction='column' gap='1'>
                            <Heading
                                as='h4'
                                size='md'
                                className='bg-green-600 px-2 py-1 text-gray-100 inline-block w-fit'
                            >
                                단중
                            </Heading>
                            <Box>양쪽 젖꼭지를 이은 선의 가운데 부분</Box>
                        </Flex>
                    </Flex>
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
                    <Heading as='h3' size='lg'>
                        지압법2 - 손바닥
                    </Heading>
                    <Image
                        src='/images/pattern/encyclopeida/musclepain2.png'
                        alt='손바닥 지압위치'
                        width={500}
                        height={500}
                    />
                    <Flex direction='column' gap='4'>
                        <Flex direction='column' gap='1'>
                            <Heading
                                as='h4'
                                size='md'
                                className='bg-red-600 px-2 py-1 text-gray-100 inline-block w-fit'
                            >
                                소부
                            </Heading>
                            <Box>4~5번째 손가락 사이에서 아래로 내려왔을 때 첫 번째 손금과 만나는 곳</Box>
                            <Box>주먹을 쥘 때 새끼 손가락 끝이 닿는 부분</Box>
                        </Flex>
                        <Flex direction='column' gap='1'>
                            <Heading
                                as='h4'
                                size='md'
                                className='bg-blue-600 px-2 py-1 text-gray-100 inline-block w-fit'
                            >
                                노궁
                            </Heading>
                            <Box>손바닥의 정중앙으로 주먹을 쥐었을 때 3~4번째 손가락이 만나 접히는 부분</Box>
                        </Flex>
                        <Flex direction='column' gap='1'>
                            <Heading
                                as='h4'
                                size='md'
                                className='bg-green-600 px-2 py-1 text-gray-100 inline-block w-fit'
                            >
                                신문
                            </Heading>
                            <Box>
                                새끼손가락 쪽의 손목 안쪽 가로무늬 끝부분에 살짝 들어간 곳으로 잡으면 맥이 뛰는 것이
                                느껴짐
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default MusclePainPage;
