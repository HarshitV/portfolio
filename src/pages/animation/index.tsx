import Hero from 'components/Hero';
import { Heading, Heading2 } from 'components/Text/Heading';
import Text from 'components/Text/Text';
import Head from 'next/head';
import {
  ContentContainer,
  Image,
  ImageContainer,
  PageContent,
  TextContainer,
  VideoContainer,
} from 'styles/layouts';
import Footer from 'components/Footer';
import styled, { css } from 'styled-components';
import { breakpoints } from 'styles/constants';

const Animation = () => {
  return (
    <>
      <Head>
        <title>Harshit Verma | Animation & Graphics</title>
      </Head>
      <PageContent>
        <Hero
          image={{
            src: '/animation/hero.webp',
            alt: 'animation hero',
          }}
        />
        <ContentContainer>
          <TextContainer>
            <Heading text='I. 3D Architectural Modelling' />
            <Text text='Modelling and Animation have been done as an Independent Project in IIIT-Delhi under the Guidance of Prof. Manohar Khushalani by students Harshit Verma and Ajit Singh.' />
            <Text text='The exterior shown is a model of an actual house in Canada.' />
            <Text
              text={
                <span>
                  Software used: 3DS Max 2017
                  <br /> Render Setup: Vray Adv 3.4 (Resolution: 1920 x 1080)
                  <br />
                  Rendering Time: On average, every 3 seconds of animation took
                  15-20 hours to render.
                </span>
              }
            />
            <Text text='A snippet from the video: -' />
          </TextContainer>
          <VideoContainer>
            <video controls playsInline src='/animation/architecture.mp4' />
          </VideoContainer>
          <TextContainer>
            <Heading text='II. Need For Speed' />
            <Text text='The Animation has been done as a Course Project in IIIT-Delhi under the Guidance of Prof. Manohar Khushalani by students Harshit Verma and Katyayani Singh.' />
            <Text text='A 3D animated car racing scene where the camera follows 2 cars: Lamborghini Murcielago and Mercedes SLS AMG as they race along a circuitous path of highways and by-lanes. We have shown multiple camera angles for instrumental scenes and used slow motion to capture the highlights.' />
            <Text text='Software used: 3DS Max 2017' />
            <Text text='A snippet from the video: -' />
          </TextContainer>
          <VideoContainer>
            <video controls playsInline src='/animation/nfs.mp4' />
          </VideoContainer>
          <TextContainer>
            <Heading text='III. Chandrayaan-2' />
            <Text text='The Animation has been done as an Independent Project in IIIT-Delhi under the Guidance of Prof. Manohar Khushalani by students Harshit Verma and Katyayani Singh.' />
            <Text text="Chandrayaan-2 is India's second lunar exploration mission after Chandrayaan-1. Through our film, we have artistically visualized the launch and landing of Chandrayaan 2." />
            <Text text='Software used: 3DS Max 2017' />
            <Text text='Screenshots from the video: -' />
          </TextContainer>
          <ChandrayaanImages>
            <ChandrayaanImage>
              <ImageContainer>
                <Image
                  src={`/animation/chandrayaan1.png`}
                  alt='chandrayaan 1'
                  width='100%'
                  height='100%'
                />
              </ImageContainer>
            </ChandrayaanImage>
            <ChandrayaanImage>
              <ImageContainer>
                <Image
                  src={`/animation/chandrayaan2.png`}
                  alt='chandrayaan 2'
                  width='100%'
                  height='100%'
                />
              </ImageContainer>
            </ChandrayaanImage>
            <ChandrayaanImage>
              <ImageContainer>
                <Image
                  src={`/animation/chandrayaan3.png`}
                  alt='chandrayaan 3'
                  width='100%'
                  height='100%'
                />
              </ImageContainer>
            </ChandrayaanImage>
          </ChandrayaanImages>
        </ContentContainer>
        <Footer />
      </PageContent>
    </>
  );
};

export default Animation;

const ChandrayaanImages = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ChandrayaanImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 0;
  ${ImageContainer} {
    aspect-ratio: auto;
    margin: 0;
  }
`;
