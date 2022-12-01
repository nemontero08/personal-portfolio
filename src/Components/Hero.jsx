import React from 'react'
import { Text,Container,Center,VStack,Heading,Flex} from '@chakra-ui/react'
import { Btn } from './Btn'

export const Hero = () => {
    return (
            <Center h='85vh'>
                <Flex  alignItems='start' flexDirection='column'>
                    <Text variant='sub1'>Hola,soy</Text>
                    <Heading as='h1' variant='headline1'>NICOLAS MONTERO</Heading>
                    <Text variant='sub1'>Desarrollador Front-end</Text>
                    <Btn text={'CONTACTAME!'} mt={5}/>
                </Flex>
            </Center>


        
    )
}
