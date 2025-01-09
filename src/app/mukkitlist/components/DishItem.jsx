import { Flex } from '@chakra-ui/react';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { ChefHat, Star, UserRound } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const DishItem = ({ filterId }) => {
    const [dishData, setDishData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    // 재료 문자열에서 실제 재료만 추출하는 함수
    const extractIngredients = (partsString) => {
        if (!partsString) return [];

        // 재료 부분만 추출 (첫 번째 콜론이나 관련 문자 이후의 텍스트)
        const ingredientPart = partsString.split(/[:]|\s-\s/)[0];

        // 재료들을 개별적으로 분리
        return ingredientPart
            .split(/[,()]/)
            .map((item) => item.trim())
            .filter((item) => item.length > 0);
    };

    // 재료가 포함되어 있는지 확인하는 함수
    const hasIngredient = (partsString, searchIngredient) => {
        if (!partsString || !searchIngredient) return false;

        // 재료 목록 추출
        const ingredients = extractIngredients(partsString);

        // 검색할 재료 이름 정규화
        const normalizedSearch = searchIngredient.toLowerCase().trim();

        // 각 재료에 대해 검색
        return ingredients.some(
            (ingredient) =>
                ingredient.toLowerCase().includes(normalizedSearch) ||
                ingredient.toLowerCase().includes(searchIngredient.toLowerCase())
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/food');
                console.log('Searching for ingredient:', filterId);
                setDishData(response.data);

                const recipes = response.data.COOKRCP01?.row || [];
                const filtered = recipes.filter((recipe) => {
                    const included = hasIngredient(recipe.RCP_PARTS_DTLS, filterId);
                    if (included) {
                        console.log('Found match:', recipe.RCP_NM);
                    }
                    return included;
                });

                console.log(`Found ${filtered.length} recipes with ${filterId}`);
                setFilteredRecipes(filtered);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        if (filterId) {
            fetchData();
        }
    }, [filterId]);

    if (!filterId) return <div>필터 ID가 없습니다.</div>;
    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>에러 발생: {error}</div>;
    if (!dishData) return <div>데이터가 없습니다</div>;
    if (filteredRecipes.length === 0) return <div>해당하는 레시피가 없습니다</div>;

    return (
        <>
            {filteredRecipes.map((item) => (
                <Flex key={item.RCP_SEQ} className='relative' align='center' justify='space-between'>
                    <div className='relative w-[100px] h-[100px] rounded overflow-hidden'>
                        <Image
                            src={item.ATT_FILE_NO_MAIN}
                            alt={item.RCP_NM}
                            fill
                            style={{ objectFit: 'contain' }}
                            className='rounded'
                        />
                    </div>
                    <div className='flex flex-col gap-2 text-sm w-[200px]'>
                        <h3>{item.RCP_NM}</h3>
                        <div className='flex gap-1 items-center'>
                            <Star size={15} />
                            <strong>5.0</strong>
                            <span className='text-gray-500 text-xs'>· (1)</span>
                            <span className='text-gray-500 text-xs'>· 닉네임</span>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex gap-1 items-center border rounded p-1 text-xs'>
                                <UserRound size={15} />
                                {item.INFO_WGT || '1'}인분
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
