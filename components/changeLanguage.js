
// import {i18n } from "../i18n"

import {Button, Link, useState, Text} from '@chakra-ui/react'

import {useRouter} from 'next/router'


// Function to set new language on navbar
const onChangeLanguage = (lang) => (e) => {
    e.preventDefault()
    router.push(router.asPath, undefined, { locale: lang })
}

// Function to change the default language
const ChangeLanguage = () =>{
    const router = useRouter();
    const { locale } = router;
    // const [lang, setLang] = useState(locale);

    // const [lang, setLang] = useState("en");
    
    const href = `${locale === 'en' ? 'pt-BR': 'en'}`.concat(router.route) ;
    // console.log(router.route)
    console.log(locale)
    

    return <>
        {/* <Button colorScheme='blue'  >
            <Link href={router.route} locale={locale === 'en' ? 'en': 'pt-BR'}>
                <a><Text>{locale === 'en' ? 'PT-BR': 'en'}</Text></a>
            </Link>
        </Button> */}
    </>
}



export default ChangeLanguage