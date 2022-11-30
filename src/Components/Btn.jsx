import {Button} from '@chakra-ui/react';

export const Btn = ({text,cv}) => {
    const isCv = cv;
    const cvUrl = '../../public/CV_Nicolas_Montero_2022_(ES).pdf';
    return (
        <>
            {
                isCv
                ? <Button as="a" variant='outline' href={cvUrl} download>Descargar CV</Button>
                :<Button variant='outline'>{text}</Button>
            }
        </>
    )
}
