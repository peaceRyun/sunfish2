import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import { Angry, Annoyed, Frown, Meh, Smile } from 'lucide-react';

function BasicModal({ MoodIcon = Smile, fill }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button variant='plain' onClick={onOpen}>
                <MoodIcon fill={fill} />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size='xs'>
                <ModalOverlay />
                <ModalContent className='relative w-64 bg-white rounded-2xl shadow-lg'>
                    <div
                        className='absolute w-4 h-4 bg-white transform rotate-45'
                        style={{
                            top: '-8px',
                            right: '16px',
                        }}
                    />
                    <ModalHeader className='text-sm pt-3 pb-2 px-4'>오늘의 기분</ModalHeader>
                    <ModalCloseButton className='top-2 right-2' />

                    <ModalBody className='p-2'>
                        <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(5, 1fr)' gap={1}>
                            <GridItem className='text-center'>
                                <Button variant='plain' className='p-0 hover:bg-gray-100 rounded-full'>
                                    <Smile fill='lightgreen' width='36px' height='36px' />
                                </Button>
                            </GridItem>
                            <GridItem className='text-center'>
                                <Button variant='plain' className='p-0 hover:bg-gray-100 rounded-full'>
                                    <Angry fill='tomato' width='36px' height='36px' />
                                </Button>
                            </GridItem>
                            <GridItem className='text-center'>
                                <Button variant='plain' className='p-0 hover:bg-gray-100 rounded-full'>
                                    <Frown fill='#4892E0' width='36px' height='36px' />
                                </Button>
                            </GridItem>
                            <GridItem className='text-center'>
                                <Button variant='plain' className='p-0 hover:bg-gray-100 rounded-full'>
                                    <Annoyed fill='#e0d648' width='36px' height='36px' />
                                </Button>
                            </GridItem>
                            <GridItem className='text-center'>
                                <Button variant='plain' className='p-0 hover:bg-gray-100 rounded-full'>
                                    <Meh fill='lightgray' width='36px' height='36px' />
                                </Button>
                            </GridItem>
                        </Grid>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default BasicModal;
