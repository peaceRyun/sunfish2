import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarModal = () => {
    const [value, onChange] = useState(new Date());
    const { isOpen, onOpen, onClose } = useDisclosure();

    function formatDateParts(date) {
        const day = format(date, 'dd'); // 날짜
        const month = format(date, 'MM월'); // 월
        const year = format(date, 'yyyy'); // 연도
        return { day, month, year };
    }

    const { day, month, year } = formatDateParts(value);

    const handleDateSelect = (date) => {
        onChange(date);
        onClose();
    };
    return (
        <>
            <Button onClick={onOpen} variant='plain' w='full' p='0'>
                <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{day}</span>
                <span style={{ fontSize: '0.8rem', margin: '0 4px' }}>{month}</span>
                <span style={{ fontSize: '0.8rem' }}>{year}</span>
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size='md'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>날짜 선택</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Calendar onChange={handleDateSelect} value={value} className='mx-auto' />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CalendarModal;
