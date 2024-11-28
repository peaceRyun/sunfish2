import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { Box } from '@chakra-ui/react';

export function LEDBoardsSwiperDaily() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                direction='vertical'
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className='LEDBoardsSwiperDaily !h-7 font-custom1'
            >
                <SwiperSlide>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        000부터 시작하면 돼요!!!
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        000을 첫 번째로 하면 돼요
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        000을 두 번째로 하면 돼요
                    </Box>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export function LEDBoardsSwiperWeekly() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                direction='vertical'
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className='LEDBoardsSwiperWeekly !h-7 font-custom1'
            >
                <SwiperSlide>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        000부터 시작하면 돼요!!!
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        0요일까지 0 해야되는거 있지 않으셨죠??
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        0요일까지 0 도 하셔야 해요!!
                    </Box>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export function LEDBoardsSwiperMonthly() {
    return (
        <>
            <Swiper
                width='100%'
                height='30px'
                slidesPerView={1}
                spaceBetween={30}
                direction='vertical'
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className='LEDBoardsSwiperMonthly !h-7 font-custom1'
            >
                <SwiperSlide>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        이번달에는 000, 000, 000, 000이 있어요.
                    </Box>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
