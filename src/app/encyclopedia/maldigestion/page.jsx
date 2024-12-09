'use client';

import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const MaldigestionPage = () => {
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
                        소화불량 원인의 3분의 1은 위궤양, 역류성식도염, 위종양, 췌담도질환, 헬리코박터균에 의한 위염 등
                        질환 때문입니다. 나머지 3분의 2는 소화불량을 일으킬 만한 원인 질환이 없는 경우인데, 대다수가
                        스트레스 때문에 발생합니다. 의학적으로는 ‘기능성 소화불량증’, 일반인들이 이해하기 쉽게 ‘신경성
                        위장병’이라고 부르기도 합니다. 스트레스에 의한 소화불량은 수 년 또는 수십 년 동안 지속적으로
                        나타납니다. 증상이 좋아졌다 나빠졌다 되풀이하는데, 신경 쓰는 일이 있으면 소화불량 증상이
                        심해집니다. 일반적으로 예민한 성격을 가진 사람이 소화불량을 호소하는 경우가 많습니다.
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
                        신경성 위장병에 스트레스 관리 조언 1 - 식습관
                    </Heading>
                    <Box>
                        식이요법의 원칙은 어느 음식이 좋고 어느 음식은 해가 된다는 식보다는 환자 개개인마다 섭취하면
                        속이 불편해지는 음식이 있으므로 자신이 판단해서 자신에게 맞는 음식을 먹고, 맞지 않는 음식은
                        피해야 합니다. 식사는 규칙적으로 하고, 음식은 천천히 오래 씹어 먹어야 합니다. 침 속에는
                        아밀라아제라는 당분 분해 효소가 있어 음식물과 침이 잘 섞이면 소화에 도움이 됩니다. 위에 부담이
                        되므로 과식을 하거나 잠들기 2∼3시간 전에 음식 섭취를 하는 것을 피해야 합니다. 자극적인 음식이나
                        지방이 많은 음식, 술, 담배 등도 삼가야 합니다.
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
                        신경성 위장병에 스트레스 관리 조언 2 - 운동
                    </Heading>
                    <Box>
                        소화불량에 과식을 하지 말라는 이유는 많이 먹으면 위가 확장 돼 위가 얇아지고 위에 혈액 순환이
                        충분히 되지 않으면서 소화불량 증세가 심해질 수 있습니다. 그만큼 위장 건강에 혈액 순환이
                        중요합니다. 일주일에 5회는 1시간 30분씩 걸으려고 노력합니다. 걸을 때는 가급적 햇볕을 쬐면서
                        걷습니다.
                    </Box>
                </Flex>
                <Box>출처: https://m.health.chosun.com/svc/news_view.html?contid=2018042401539</Box>
            </Flex>
        </>
    );
};

export default MaldigestionPage;
