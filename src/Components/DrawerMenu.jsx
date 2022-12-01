import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    DrawerHeader,
    useDisclosure,
    IconButton,
    Divider,
    VStack,
    Heading
} from '@chakra-ui/react';import React from 'react'
import { Btn } from './Btn';

const DrawerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <IconButton
                aria-label='open Menu'
                onClick={onOpen}
                variant='drawerBtn'
                icon={<HamburgerIcon w={6} h={6} ml={6} mt={6}/>}
            />
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                    <DrawerContent>
                        
                        <DrawerHeader>
                            <Heading variant='headline2'>NICOLAS MONTERO</Heading>
                            <DrawerCloseButton mt={2} w={6} h={6} variant='drawerBtn' />
                        </DrawerHeader>

                        <DrawerBody >
                            <Divider />
                            <Btn mb={8} mt={5} cv={true}/>
                            <VStack alignItems="start" spacing='4'>
                                {['Inicio', 'Sobre mi', 'Proyectos', 'Contacto'].map((item) => (
                                    <Button variant="navItem" key={item}>{item}</Button>
                                        
                                ))}
                                        
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerMenu