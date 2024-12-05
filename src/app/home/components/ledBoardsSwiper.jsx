import React, { useEffect, useRef, useState } from 'react';
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
    const [eboardData, setEboardData] = useState([]);

    useEffect(() => {
        const storedEboardData = JSON.parse(localStorage.getItem('eboarddata') || '[]');
        setEboardData(storedEboardData);
    }, []);

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
                className='LEDBoardsSwiperDaily !h-10 font-custom1 flex flex-col justify-center'
            >
                <SwiperSlide style={{ display: 'flex', alignItems: 'center' }}>
                    <Box width='100%' textAlign='center'>
                        {eboardData[1].valueText}부터 시작하면 됩니다!
                    </Box>
                </SwiperSlide>
                <SwiperSlide style={{ display: 'flex', alignItems: 'center' }}>
                    <Box width='100%' textAlign='center'>
                        000을 첫 번째로 해보시죠.
                    </Box>
                </SwiperSlide>
                <SwiperSlide style={{ display: 'flex', alignItems: 'center' }}>
                    <Box width='100%' textAlign='center'>
                        000을 두 번째로 하셔야 합니다.
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
                height='30px'
                direction='horizontal'
                slidesPerView={1}
                speed={8000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className='LEDBoardsSwiperMonthly !h-7 font-custom1 w-full'
            >
                <SwiperSlide>
                    <Box display='flex' alignItems='center' justifyContent='center' className='whitespace-nowrap'>
                        이번달에는 000, 000, 000, 000이 있어요.
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box display='flex' alignItems='center' justifyContent='center' className='whitespace-nowrap'>
                        이번달에는 000, 000, 000, 000이 있어요.
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box display='flex' alignItems='center' justifyContent='center' className='whitespace-nowrap'>
                        이번달에는 000, 000, 000, 000이 있어요.
                    </Box>
                </SwiperSlide>
            </Swiper>

            <style jsx global>{`
                .LEDBoardsSwiperMonthly .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
        </>
    );
}
