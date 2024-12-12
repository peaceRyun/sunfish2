import { Flex } from '@chakra-ui/react';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { ChefHat, Star, UserRound } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const DishItem = () => {
    const [dishData, setDishData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // /api/food로 요청을 보냅니다 (Next.js API 라우트)
                const response = await axios.get('/api/food');
                setDishData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>에러 발생: {error}</div>;
    if (!dishData) return <div>데이터가 없습니다</div>;

    console.log(dishData);
    // API 응답 데이터 구조에 맞춰 접근
    const recipe = dishData.COOKRCP01?.row[0] || {};
    const recipeArr = dishData.COOKRCP01?.row;

    console.log(recipe);
    return (
        <>
            {recipeArr.map((item) => (
                <Flex key={item.INFO_CAR} className='relative' align='center' justify='space-between'>
                    <div className='relative w-[100px] h-[100px] rounded overflow-hidden'>
                        <Image
                            src={item.ATT_FILE_NO_MAIN}
                            alt='요리'
                            fill
                            style={{ objectFit: 'contain' }}
                            className='rounded'
                        />
                    </div>
                    <div className='flex flex-col gap-2 text-sm'>
                        <h3>{item.RCP_NM}</h3>
                        <div className='flex gap-1 items-center'>
                            <Star size={15} />
                            <strong>5.0</strong>
                            <span>· nickname</span>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex gap-1 items-center border rounded p-1 text-xs'>
                                <UserRound size={15} />
                                {item.INFO_WGT}인분
                            </div>
                            <div className='flex gap-1 items-center border rounded p-1 text-xs'>
                                <ChefHat size={15} />
                                {item.RCP_WAY2}
                            </div>
                        </div>
                    </div>
                    <div className='w-5 h-5'>
                        <BookmarkIcon size={15} />
                    </div>
                </Flex>
            ))}
        </>
    );
};

export default DishItem;
