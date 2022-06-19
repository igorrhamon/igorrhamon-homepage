

import {Button} from '@chakra-ui/react'

import {useRouter} from 'next/router'


// Function to change the default language


// Function to change the default language
const ChangeLanguage = () =>{
    
    const router = useRouter();
    const { locale } = router;


    return <>
        <Button colorScheme='blue' >{locale.toUpperCase()}</Button>
    </>
}



export default ChangeLanguage