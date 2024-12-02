import { Flex, Heading } from '@chakra-ui/react';
import { Smile } from 'lucide-react';
import React from 'react';

const DiaryCard = ({ MoodIcon = Smile, fill }) => {
    return (
        <>
            <Flex gap='2' direction='column' p='20px 10px 15px' className='bg-custom-blue-100 rounded'>
                <Flex justify='space-between'>
                    <Flex gap='2' align='end'>
                        <strong className='text-lg leading-none'>02</strong>
                        <span className='text-xs text-gray-500 leading-none'>12월</span>
                    </Flex>
                    <div>
                        <MoodIcon fill={fill} />
                    </div>
                </Flex>
                <Heading as='h2' className='text-sm font-bold'>
                    제목
                </Heading>
                <div className='text-gray-600 text-sm'>내용</div>
            </Flex>
        </>
    );
};
export default DiaryCard;
