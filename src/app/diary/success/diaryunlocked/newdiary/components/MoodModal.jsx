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
            <Button onClick={onOpen}>
                <MoodIcon fill={fill} />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader className='text-md'>오늘의 기분</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(5, 1fr)'>
                            <GridItem mx='auto'>
                                <Smile fill='lightgreen' />
                            </GridItem>
                            <GridItem mx='auto'>
                                <Angry fill='tomato' />
                            </GridItem>
                            <GridItem mx='auto'>
                                <Frown fill='#4892E0' />
                            </GridItem>
                            <GridItem mx='auto'>
                                <Annoyed fill='#e0d648' />
                            </GridItem>
                            <GridItem mx='auto'>
                                <Meh fill='lightgray' />
                            </GridItem>
                        </Grid>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default BasicModal;
