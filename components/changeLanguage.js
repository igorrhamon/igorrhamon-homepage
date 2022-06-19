
// import {i18n } from "../i18n"

import {Button, Link} from '@chakra-ui/react'

import {useRouter} from 'next/router'


// Function to set the language on cache
// Function to change the default language
const ChangeLanguage = () =>{
    // const [language, setLanguage] = useState("en")
    const router = useRouter();
    const { locale } = router;
    const href = `${locale === 'en' ? 'pt' : 'en'}`;
    console.log(href)
    

    return <>
        <Button colorScheme='blue'  >
            <Link href={href} locale="en">
                <a>{locale === 'en'? 'PT' : 'EN'}</a>
            </Link>
        </Button>
    </>
}



export default ChangeLanguage