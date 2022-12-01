import {Button} from '@chakra-ui/react';

export const Btn = ({text,cv,mb,mt}) => {
    const isCv = cv;
    const cvUrl = '../../public/CV_Nicolas_Montero_2022_(ES).pdf';
    return (
        <>
            {
                isCv
                ? <Button mb={mb}  mt={mt} as="a" variant='outline' href={cvUrl} download>DESCARGAR CV</Button>
                :<Button mb={mb}  mt={mt} variant='outline'>{text}</Button>
            }
        </>
    )
}
