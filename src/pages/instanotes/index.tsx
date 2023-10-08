import Hero from 'components/Hero';
import { Heading, Heading2 } from 'components/Text/Heading';
import Text from 'components/Text/Text';
import Head from 'next/head';
import {
  ContentContainer,
  FullWidthCarouselContainer,
  Image,
  ImageContainer,
  PageContent,
  TextContainer,
  TwoColumn,
  UnorderedList,
  VideoContainer,
} from 'styles/layouts';
import Footer from 'components/Footer';
import FullWidthContainer from 'components/FullWidthContainer';
import styled, { css } from 'styled-components';
import { breakpoints } from 'styles/constants';
import CarouselContent from 'components/buskaro/CarouselContent';
import CarouselContentMobile from 'components/buskaro/CarouselContentMobile';
import 'react-responsive-carousel/lib/styles/carousel.css';

const Busta = () => {
  return (
    <>
      <Head>
        <title>Harshit Verma | instaNotes</title>
      </Head>
      <PageContent>
        <Hero
          image={{
            src: '/instanotes/hero.webp',
            alt: 'instanotes hero',
          }}
        />
        <ContentContainer>
          <TextContainer>
            <Heading2
              fontSize='28px'
              text='An incentive-based mobile application that provides a unified platform for students to access class notes.'
            />
            <Text
              text={
                <span>
                  This project was done as part of the Mobile Computing course
                  at <a href='https://www.iiitd.ac.in/'>IIIT-Delhi</a>. The team
                  consisted of 5 students.
                </span>
              }
            />
            <Heading text='Idea' />
            <UnorderedList>
              <li>
                To have a platform for students of a particular course to upload
                their class notes.
              </li>
              <li>
                This will make it easier to access their notes anytime,
                anywhere.
              </li>
              <li>
                It will also help solve the problems where students ask each
                other for combined notes of the entire semester just before the
                exam.
              </li>
            </UnorderedList>
          </TextContainer>
        </ContentContainer>
        <FullWidthContainer display='block'>
          <>
            <TextContainer>
              <Heading text='Interactions and Design Evolution' />
              <Text text='After several iterations of user testing and feedback, we came up with the final series to interactions to provide users with the best user experience.' />
            </TextContainer>
            <ImageContainer aspectRatio='2.24'>
              <Image
                src='/instanotes/interactions.webp'
                alt='interactions and design evolution'
              />
            </ImageContainer>
            <TextContainer>
              <Text
                text={
                  <span>
                    During our testing, we provided users with different
                    versions of the app with different color schemes carefully
                    selected from <a href='https://material.io/'>material.io</a>
                    . Based on the feedback received, we finalized the primary
                    and secondary color combination as #212254 and #fe6443
                    respectively.
                  </span>
                }
              />
            </TextContainer>
            <Design>
              <DesignItem>
                <ImageContainer>
                  <Image
                    src='/instanotes/prototype.webp'
                    alt='prototype'
                    width='100%'
                    height='100%'
                  />
                </ImageContainer>
                <TextContainer>
                  <Heading2 text='Prototype' />
                </TextContainer>
              </DesignItem>
              <DesignItem>
                <ImageContainer>
                  <Image
                    src='/instanotes/final_design.webp'
                    alt='final design'
                    width='100%'
                    height='100%'
                  />
                </ImageContainer>
                <TextContainer>
                  <Heading2 text='Final Design' />
                </TextContainer>
              </DesignItem>
            </Design>
            <TextContainer>
              <Heading text='Final Screens' />
            </TextContainer>
            <FullWidthCarouselContainer>
              <CarouselContent page='instanotes' itemCount={5} />
              <CarouselContentMobile page='instanotes' itemCount={5} />
            </FullWidthCarouselContainer>
          </>
        </FullWidthContainer>
        <ContentContainer>
          <TextContainer>
            <Heading text='Incentive Based System' />
            <Text text='The app works on an incentive-based system to ensure that students are not only accessing the notes, but also uploading them for the benefit of others.' />
            <UnorderedList>
              <li>Earn credits by uploading notes.</li>
              <li>Use these credits to view notes.</li>
            </UnorderedList>
            <Heading text='Features' />
            <UnorderedList>
              <li>Download/Upload notes with just a few clicks.</li>
              <li>Add notes as public/private.</li>
              <li>Get notifications on latest uploads.</li>
              <li>Request notes for a particular lecture.</li>
              <li>Add notes to favorites.</li>
              <li>Ask doubts on a particular upload.</li>
              <li>Download the notes as PDF.</li>
            </UnorderedList>
          </TextContainer>
        </ContentContainer>
        <FullWidthContainer>
          <TwoColumn reverse>
            <TextContainer>
              <Heading text='High Fidelity Prototype' />
              <Text text='(Wireframe)' />
            </TextContainer>
            <TwoColumnVideoContainer aspectRatio='auto'>
              <video controls playsInline src='/instanotes/hifi.mp4' />
            </TwoColumnVideoContainer>
          </TwoColumn>
        </FullWidthContainer>
        <ContentContainer>
          <TextContainer>
            <Text
              fontSize='22px'
              text={
                <span>
                  Download the app <a href='https://bit.ly/instanotes'>here</a>.
                </span>
              }
            />
          </TextContainer>
        </ContentContainer>
        <Footer />
      </PageContent>
    </>
  );
};

export default Busta;

const Design = styled.div`
  width: 100%;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;

const DesignItem = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
  align-items: center;
  flex: 0 0 0;
  ${ImageContainer} {
    height: 460px;
    aspect-ratio: 0.56;
    margin: 0;
  }
`;

const TwoColumnVideoContainer = styled(VideoContainer)`
  margin: 0 auto;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    max-height: 600px;
  }
`;
