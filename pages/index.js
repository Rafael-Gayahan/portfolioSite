import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio.js'
import NextLink from 'next/link'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'

const Page = () => {
    return (
        <Container>
        <Box borderRadius='lg' bg = {useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
            Hello I'm a developer based in Dallas, Texas!
        </Box>
        <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant = "page-title">
                    Rafael Gayahan
                </Heading>
                <p>Learning to create more things </p>
            </Box>
            <Box flexShrink={0} mt={{base: 4, md: 0, }} ml={{md: 6}} align="center">
                <Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/profile-pic.png" alt="profile-img"/>
            </Box>
        </Box>

        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>I am a Computer Science graduate from the University of Texas at Dallas, where I developed a strong foundation in software development and programming. Proficient in languages such as C++, Java, JavaScript, and Python, I am passionate about creating innovative solutions and leveraging technology to tackle complex challenges.
                My most recent project was a resume website.
            <NextLink href="/works/resumeSite"><Link> Resume Site</Link></NextLink>"
            </Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">My Works</Button>
                </NextLink>
            </Box>
        </Section>
        <Section delay={.2}>
            <Heading as="h3" variant="section-title" >
                Bio
            </Heading>
            <BioSection>
                <BioYear>2000</BioYear>
                Born in Makati City, Philippines
            </BioSection>
            <BioSection>
                <BioYear>2018</BioYear>
                Graduated from Centennial High School in Frisco, Texas
            </BioSection>
            <BioSection>
                <BioYear>2018 - 2019</BioYear>
                Worked as a Shift Manager at Tapioca Express
            </BioSection>
            <BioSection>
                <BioYear>2023</BioYear>
                Completed a Bachelor&apos;s of Computer Science at the University of Texas at Dallas
            </BioSection>
        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">Interests</Heading>
        </Section>
        </Container>
    )
}


export default Page