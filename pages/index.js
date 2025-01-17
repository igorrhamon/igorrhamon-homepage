import NextLink from 'next/link'
import {useRouter} from 'next/router'


import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
import en from '../locales/index/en.js'
import pt from '../locales/index/pt.js'



const Home = function (){
  
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'pt' ? pt :  en;

  return (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in Brazil!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            {t.name}
          </Heading>
          <p>{t.title} ( {t.subtitle} )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/igor.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.05}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          
          {t.bio}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="#" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <BioSection>
          <BioYear>1993</BioYear>
          Born in Brasília , Brazil.
        </BioSection>
        {/* <BioSection>
          <BioYear>2010</BioYear>
          Initiated the Master&apos;s Program in the Graduate School of
          Computer Engineering at University of Brasília (UNB).
        </BioSection> */}
        <BioSection>
          <BioYear>2012</BioYear>
          Worked at Senado Federal.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at {' '}
            <NextLink href="https://www.caixa.gov.br/" passHref scroll={false}>
              <Link>Caixa Econômica Federal</Link>
            </NextLink>
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Working as Software Developer at {' '}
          <NextLink href="http://www.bb.com.br" passHref scroll={false}>
            <Link>Banco do Brazil</Link>
          </NextLink>
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Machine Learning, Dogs, Games, and the Outdoor Adventure.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/igorrhamon" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @igorrhamon
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/ig_rha" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @igorrhamon (Portuguese)
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="https://instagram.com/igorrhamon" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @igorrhamon
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/igorrhamon/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @igorrhamon
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {/* <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem> */}
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="#" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
  )
}
export default Home
export { getServerSideProps } from '../components/chakra'
