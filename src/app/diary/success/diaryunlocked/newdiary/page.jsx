'use client';

import { Button, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';

export default function NewDiaryPage() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeText = (event) => {
        setText(event.target.value);
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
                <Flex justify='space-between'>
                    <Flex gap='2' align='end'>
                        <strong className='text-lg leading-none'>02</strong>
                        <span className='text-xs text-gray-500 leading-none'>12월</span>
                    </Flex>
                </Flex>

                <input
                    type='text'
                    name='inputName'
                    placeholder='제목'
                    className='text-lg font-bold'
                    value={title}
                    onChange={handleChangeTitle}
                ></input>
                <textarea
                    name='description'
                    rows='4'
                    cols='50'
                    className='text-gray-600 text-sm'
                    placeholder='육하원칙(누가, 언제, 어디서, 무엇을, 어떻게, 왜)가 포함되면 좋아요!'
                    value={text}
                    onChange={handleChangeText}
                ></textarea>
            </Flex>
            <Button className='absolute top-3 right-5 px-4 rounded text-sm'>저장</Button>
        </>
    );
}
