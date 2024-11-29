'use client';

import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import { BookMarked, UserRound } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-gray-100 fixed bottom-0 inset-x-0'>
            <Container className='w-full h-14 px-5 py-0'>
                <Flex justify='space-between' gap='5px' className='h-full'>
                    <Box className='m-auto'>
                        <UserRound />
                    </Box>
                    <Box className='m-auto'>2</Box>
                    <Box className='m-auto'>3</Box>
                    <Box className='m-auto'>
                        <BookMarked />
                    </Box>
                </Flex>
            </Container>
        </footer>
    );
};

export default Footer;
