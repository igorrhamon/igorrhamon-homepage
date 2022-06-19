import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

import {useRouter} from 'next/router'
import en from '../locales/404/en'
import pt from '../locales/404/pt'



const NotFound = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en :  pt;

  return (
    <Container>
      <Heading as="h1">{t.title}</Heading>
      <Text>{t.message}</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">{t.return}</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
