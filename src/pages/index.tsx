import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import TopNav from '../components/Navigation/TopNav';
import { Button, Image } from 'styles/layouts';
import Footer from 'components/Footer';
import { breakpoints } from 'styles/constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 85px;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    top: 100px;
  }
`;

const TwoColumnCell = styled.span`
  display: flex;
  flex-direction: column-reverse;
  width: 92%;
  max-width: 1920px;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    width: 100%;
  }
`;

const ImageCell = styled.div`
  width: 100%;
  display: flex;
  height: 92vw;
  max-height: 565px;
  justify-content: center;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    height: auto;
    padding-left: 2%;
    max-width: 50%;
    padding-right: 5%;
  }
  @media only screen and (min-width: 1440px) {
    padding-right: 10%;
  }
  @media only screen and (min-width: 1920px) {
    padding-right: 20%;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  max-width: 565px;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    border-right: 20px solid black;
    width: fit-content;
  }
`;

const TextCell = styled.div`
  text-align: center;
  padding: 50px 0 0;
  max-width: 451px;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    text-align: left;
    width: 50%;
    padding-left: 5%;
    max-width: none;
  }
  @media only screen and (min-width: 1440px) {
    padding-left: 10%;
  }
  @media only screen and (min-width: 1920px) {
    padding-left: 20%;
  }
`;

const Heading = styled.h1`
  font: normal normal normal 72px/1.25em cormorantgaramond-light,
    cormorantgaramond, 'cormorant garamond', serif;
  font-size: 28px;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 72px;
  }

  margin: 0;
`;

const SubHeading = styled.h2`
  font: normal normal normal 20px/1.67em raleway, sans-serif;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 20px;
  }
  font-weight: 100;
  padding: 25px 0;
  margin: 0;
`;

const Paragraph = styled.p`
  font: normal normal normal 15px/1.875em raleway, sans-serif;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 15px;
  }
  font-weight: 100;
  margin: 0;
`;

const ButtonContainer = styled.div`
  padding: 25px 0;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Harshit Verma | Portfolio</title>
      </Head>
      <Wrapper>
        <TwoColumnCell>
          <TextCell>
            <Heading>Harshit Verma</Heading>
            <SubHeading>
              Experienced Software Developer with a keen interest in HCI
            </SubHeading>
            <Paragraph>
              Hi there! Welcome to my portfolio. I’ve had the opportunity to
              work on a number of incredible projects that I’m pleased to share.
              Not only do I enjoy showcasing my work, but also sharing details
              about the creative process behind each project.
            </Paragraph>
            <ButtonContainer>
              <Button href='/work'>View my work</Button>
            </ButtonContainer>
          </TextCell>
          <ImageCell>
            <ImageWrapper>
              <Image
                objectFit='cover'
                src='/profile.jpg'
                alt='Profile photo of Harshit Verma'
                loading='eager'
              />
            </ImageWrapper>
          </ImageCell>
        </TwoColumnCell>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
