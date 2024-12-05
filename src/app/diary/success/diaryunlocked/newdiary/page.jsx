'use client';

import { Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import MoodModal from './components/MoodModal';
import 'react-calendar/dist/Calendar.css';
import CalendarModal from './components/CalendarModal';
import { useRouter } from 'next/navigation';

export default function NewDiaryPage() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const router = useRouter();

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeText = (event) => {
        setText(event.target.value);
    };

    const handleSave = () => {
        // 로컬 스토리지에 데이터 저장
        const diaries = JSON.parse(localStorage.getItem('diaries') || '[]');
        diaries.push({ title, text, date: new Date().toISOString() });
        localStorage.setItem('diaries', JSON.stringify(diaries));

        // DiaryUnlocked 페이지로 이동
        router.push('/diary-unlocked');
    };

    return (
        <>
            <Flex
                gap='2'
                direction='column'
                w='full'
                minHeight='100vh'
                p='60px 20px 15px'
                className='bg-custom-blue-100 rounded'
            >
                <Flex justify='space-between' align='center'>
                    <Flex gap='2' align='end'>
                        <CalendarModal />
                    </Flex>
                    <MoodModal fill='lightgreen' />
                </Flex>

                <input
                    type='text'
                    name='inputName'
                    placeholder='제목'
                    className='text-lg font-bold bg-custom-blue-100'
                    value={title}
                    onChange={handleChangeTitle}
                ></input>
                <textarea
                    name='description'
                    rows='4'
                    cols='50'
                    className='text-gray-600 text-sm bg-custom-blue-100'
                    placeholder='육하원칙(누가, 무엇을, 어떻게, 왜)가 포함되면 좋아요! 
                    e.g. 나는 오늘 상사에게 보고서를 잘못 썼다고 꾸짐을 당했다. 보고서의 내용이 성의없다고 혼이 났다.'
                    value={text}
                    onChange={handleChangeText}
                ></textarea>
            </Flex>
            <Link
                href='/diary/success/diaryunlocked'
                onClick={handleSave}
                className=' button-custom1 btnLightBlue btnPush'
            >
                저장
            </Link>
        </>
    );
}
