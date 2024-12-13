import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
    try {
        const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

        // API 요청 URL을 콘솔에 출력하여 확인
        const url = `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/100`;
        console.log('Requesting URL:', url);

        const response = await axios.get(url);

        // 응답 데이터를 콘솔에 출력하여 확인
        console.log('API Response:', response.data);

        return NextResponse.json(response.data);
    } catch (error) {
        // 에러 상세 정보 출력
        console.error('API Error:', error.response?.data || error.message);

        return NextResponse.json(
            {
                error: 'Failed to fetch data',
                details: error.message,
            },
            { status: 500 }
        );
    }
}
