import React, { useState } from 'react';
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

const moodIcons = [
    { name: 'Smile', Component: Smile, fill: 'lightgreen' },
    { name: 'Angry', Component: Angry, fill: 'tomato' },
    { name: 'Frown', Component: Frown, fill: '#4892E0' },
    { name: 'Annoyed', Component: Annoyed, fill: '#e0d648' },
    { name: 'Meh', Component: Meh, fill: 'lightgray' },
];
function BasicModal({ onMoodSelect }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedMood, setSelectedMood] = useState(moodIcons[0]);

    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
        onMoodSelect({
            name: mood.name,
            fill: mood.fill,
        });
        onClose();
    };

    // const SelectedIcon = selectedMood.Component;

    return (
        <>
            <Button variant='plain' onClick={onOpen} className='w-12 h-12 p-0'>
                {React.createElement(selectedMood.Component, { fill: selectedMood.fill })}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size='xs'>
                <ModalOverlay />
                <ModalContent className='absolute w-64 bg-white rounded-2xl shadow-lg top-10 right-8'>
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
                            {moodIcons.map((mood, index) => {
                                const Icon = mood.Component;
                                return (
                                    <GridItem key={index} className='text-center'>
                                        <Button
                                            variant='plain'
                                            className='p-0 hover:bg-gray-100 rounded-full'
                                            onClick={() => handleMoodSelect(mood)}
                                        >
                                            {React.createElement(mood.Component, {
                                                fill: mood.fill,
                                                width: '36px',
                                                height: '36px',
                                            })}
                                        </Button>
                                    </GridItem>
                                );
                            })}
                        </Grid>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default BasicModal;
