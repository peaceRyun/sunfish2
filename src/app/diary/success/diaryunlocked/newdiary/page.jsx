'use client';

import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';

export default function Home() {
    return (
        <Container maxW='container.sm' py={16}>
            <Box bg='cyan.50' p={6} rounded='xl' shadow='md'>
                <Heading size='lg' mb={6} color='cyan.600'>
                    감정 Diary
                </Heading>

                <SimpleGrid columns={2} spacing={4} mb={4}>
                    <Box p={4} bg='white' rounded='md' shadow='sm' _hover={{ shadow: 'md' }}>
                        <Text>누가</Text>
                    </Box>
                    <Box p={4} bg='white' rounded='md' shadow='sm' _hover={{ shadow: 'md' }}>
                        <Text>언제</Text>
                    </Box>
                </SimpleGrid>

                <SimpleGrid columns={2} spacing={4} mb={4}>
                    <Box p={4} bg='white' rounded='md' shadow='sm' _hover={{ shadow: 'md' }}>
                        <Text>어디서</Text>
                    </Box>
                    <Box p={4} bg='white' rounded='md' shadow='sm' _hover={{ shadow: 'md' }}>
                        <Text>무엇을</Text>
                    </Box>
                </SimpleGrid>

                <Box p={4} bg='white' rounded='md' shadow='sm' mb={4} _hover={{ shadow: 'md' }}>
                    <Text>이렇게</Text>
                </Box>

                <Box p={4} bg='white' rounded='md' shadow='sm' _hover={{ shadow: 'md' }}>
                    <Text>왜</Text>
                </Box>
            </Box>
        </Container>
    );
}
