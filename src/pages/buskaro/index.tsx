import FullWidthContainer from 'components/FullWidthContainer';
import Hero from 'components/Hero';
import Heading from 'components/Text/Heading';
import Text from 'components/Text/Text';
import styled, { css } from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
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
import { breakpoints } from 'styles/constants';
import CarouselContent from 'components/buskaro/CarouselContent';
import CarouselContentMobile from 'components/buskaro/CarouselContentMobile';

const BusKaro = () => {
  return (
    <>
      <Head>
        <title>Harshit Verma | busKaro</title>
      </Head>
      <PageContent>
        <Hero
          image={{
            src: '/buskaro/hero.webp',
            alt: 'buskaro hero style',
          }}
        />
        <ContentContainer>
          <TextContainer>
            <Heading
              text='A mobile application to provide real-time ETA for buses using
        crowdsourcing.'
            />
            <Text
              text='This project was done as part of the Designing Human-Centred Systems
          course at IIIT-Delhi. The team consisted of 6 students.'
            />
            <Text
              text='Buses take up 90% of the public transportation in Indian cities and
          have twice the number of commuters than the Metro. Yet, while Metro
          ridership is constantly rising, bus ridership is on the decline. The
          main reasons behind this decreasing popularity are: -'
            />
            <UnorderedList>
              <li>
                <b>Unreliable timings</b> of buses due to congestion and traffic
                jams
              </li>
              <li>
                Unavailability of <b>real-time</b> bus transit data{' '}
              </li>
              <li>
                Difficulty in onboarding new users due to unavailability of
                updated <b>routes & schedules</b>
              </li>
            </UnorderedList>
          </TextContainer>
        </ContentContainer>
        <FullWidthContainer>
          <Heading text='Design Thought Process' />
        </FullWidthContainer>
        <ImageContainer>
          <Image src='/buskaro/dtp.webp' alt='design thought process' />
        </ImageContainer>
        <ContentContainer>
          <TextContainer>
            <Heading text='I. Research & Empathize' />
            <Text
              bold
              fontSize='15px'
              text='Understanding the Problem (Survey and Contextual Inquiry)'
            />
            <Text text='The idea of the app came from a common problem faced by bus travelers- lack of real time bus transit data.' />
            <Text
              text={
                <span>
                  We <b>surveyed</b> almost 50 people to establish the validity
                  of the problem. Bus travelers felt that the long waiting times
                  at bus stops was a common problem.
                </span>
              }
            />
          </TextContainer>
          <ImageContainer aspectRatio='1.19'>
            <Image src='/buskaro/survey.webp' alt='survey' />
          </ImageContainer>
          <TextContainer>
            <Text
              text={
                <span>
                  We conducted a <b>contextual inquiry</b> to investigate this
                  problem further. We found that most people either know the bus
                  numbers by experience or find them out by asking people at the
                  bus stop. Some people also complained about the inaccuracy of
                  the scheduled timings in apps like Google Maps. Buses in a
                  particular route are infrequent, so the waiting time for
                  travelers sometimes stretch up to 30 minutes.
                </span>
              }
            />
          </TextContainer>
          <TextContainer>
            <Heading text='II. Synthesis & Insights' />
            <Text bold fontSize='15px' text='Defining the Problem' />
            <Text
              text={
                <span>
                  To make sense of the information received, we built an{' '}
                  <b>Affinity Diagram</b> to consolidate the findings: -
                </span>
              }
            />
          </TextContainer>
          <ImageGridContainer>
            {[
              '/buskaro/affinity1.jpeg',
              '/buskaro/affinity2.webp',
              '/buskaro/affinity3.webp',
              '/buskaro/affinity4.webp',
              '/buskaro/affinity5.webp',
            ].map((imgSrc, index) => (
              <ImageGridItem key={`affinity-${index}`} index={index}>
                <Image
                  objectFit='cover'
                  src={imgSrc}
                  alt={`affinity-${index}`}
                  width='100%'
                  height='100%'
                />
              </ImageGridItem>
            ))}
          </ImageGridContainer>
          <TextContainer>
            <Text text='Affinity Diagram helped us to narrow down several aspects of the problem and come up with a solution. It also provided us a better interface to gather & synchronize all data in one place.' />
            <Text
              text={
                <span>
                  We then listed down the most useful <b>insights</b> obtained
                  from the contextual inquiry: -
                </span>
              }
            />
          </TextContainer>
          <ImageContainer aspectRatio='2.13'>
            <Image src='/buskaro/insights.webp' alt='insights' />
          </ImageContainer>
        </ContentContainer>
        <FullWidthContainer>
          <>
            <Text bold fontSize='15px' text='Problem Statement' />
            <Text
              italic
              text='"How to provide bus travelers with reliable transit data along with updated routes and real-time ETA"'
            />
          </>
        </FullWidthContainer>
        <ContentContainer>
          <TextContainer>
            <Heading text='III. Ideation' />
            <Text bold fontSize='15px' text='Exploring Potential Solutions' />
          </TextContainer>
          <VideoContainer>
            <video
              src='/buskaro/ideation.mp4'
              autoPlay
              muted
              loop
              preload='none'
            />
          </VideoContainer>
          <TextContainer>
            <Text
              text={
                <span>
                  After defining the problem and <b>brainstorming</b>{' '}
                  thoroughly, we used <b>convergent thinking</b> to narrow down
                  to 3 ideas that we could possibly focus on: -
                </span>
              }
            />
            <OrderedList>
              <li>
                Using <b>pre-installed GPS devices</b> in DTC buses.
              </li>
              <li>
                Building our own <b>hardware device</b> for tracking the
                location of buses.
              </li>
              <li>
                <b>Crowdsourcing</b> bus transit data to get a real-time ETA.
              </li>
            </OrderedList>
            <Text text='Hardware installation would require infrastructure at large scale & government approvals at the same time. Not to mention the privacy concerns if GPS data was available in the public domain.' />
            <Text
              text={
                <span>
                  Considering the feasibility of the 3 options, we decided to go
                  ahead with the 3rd one i.e. <b>crowdsourcing</b>.
                </span>
              }
            />
            <Text bold fontSize='15px' text='How to crowd-source?' />
            <Text text='Using an anonymous platform to collect data, and use a credit system to maintain sustainability & data flow.' />
            <UnorderedList>
              <li>
                Incentivize users to share their location during bus rides &
                intimate user once you board the bus.
              </li>
              <li>Use credits to reveal ETA for your Bus routes.</li>
            </UnorderedList>
          </TextContainer>
          <ImageContainer aspectRatio='1.24'>
            <Image src='/buskaro/crowdsource.webp' alt='crowdsource' />
          </ImageContainer>
          <TextContainer>
            <Heading text='IV. Prototype & Testing' />
            <Text bold fontSize='15px' text='Creating Solution' />
            <Text
              text={
                <span>
                  The First Step towards designing the app was to define the{' '}
                  <b>user story</b>, and empathically think of the most
                  sustainable way to get ETA. We thought of <b>busKaro</b> &{' '}
                  <b>busKarli</b> as two use cases of the app: -
                </span>
              }
            />
            <UnorderedList>
              <li>
                <b>busKaro</b> (Translation - I want to board the bus) - To
                reveal ETA for a bus.
              </li>
              <li>
                <b>busKarli</b> (Translation - I have boarded the bus) To earn
                credits by updating the boarding information.
              </li>
            </UnorderedList>
            <Text bold fontSize='15px' text='Low Fidelity Prototype I' />
          </TextContainer>
          <ImageContainer aspectRatio='2.14'>
            <Image src='/buskaro/lofi1.webp' alt='lofi1' />
          </ImageContainer>
          <TextContainer>
            <Text
              bold
              fontSize='15px'
              text='Testing Low Fidelity Prototype I'
            />
            <Text
              text={
                <span>
                  After analyzing results from <b>Task Analysis</b> &{' '}
                  <b>Think Aloud Testing</b> conducted with 15+ subjects, we
                  narrowed down the following problem areas in our app: -
                </span>
              }
            />
            <UnorderedList>
              <li>Difficult to understand busKaro & busKarli</li>
              <li>
                Lack of any option to save favorite routes for frequent bus
                travelers
              </li>
              <li>Difficult to fetch ETAs(busKaro) & Board Bus (busKarli)</li>
            </UnorderedList>
            <Text bold fontSize='15px' text='Low Fidelity Prototype II' />
          </TextContainer>
          <CarouselContainer>
            <Carousel
              showStatus={false}
              infiniteLoop
              autoPlay
              showThumbs={false}
              showArrows={false}
            >
              <CarouselItem>
                <Image src='/buskaro/lofi2_1.png' alt='lofi2_1' />
              </CarouselItem>
              <CarouselItem>
                <Image src='/buskaro/lofi2_2.png' alt='lofi2_2' />
              </CarouselItem>
              <CarouselItem>
                <Image src='/buskaro/lofi2_3.png' alt='lofi2_3' />
              </CarouselItem>
              <CarouselItem>
                <Image src='/buskaro/lofi2_4.png' alt='lofi2_4' />
              </CarouselItem>
            </Carousel>
          </CarouselContainer>
        </ContentContainer>
        <FullWidthContainer>
          <TextContainer>
            <Text fontSize='22px' text='High Fidelity Prototype I' />
            <Text text='After having done two iterations of user testing on our low fidelity prototype, we had now gathered a lot of useful feedback. We would now use the final low fidelity prototype to build a high fidelity prototype for our Android app. We used proto.io for this as well' />
            <Text text='As can be observed from our interfaces, we have strictly followed the material design guidelines for Android to design the high fidelity prototype.' />
            <Text
              text={
                <span>
                  A fully functional high fidelity prototype of our app -&gt;{' '}
                  <b>
                    <a
                      style={{ textDecoration: 'underline' }}
                      href='https://khurranasagar.github.io/buskaro/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Open in another tab
                    </a>
                  </b>
                </span>
              }
            />
          </TextContainer>
        </FullWidthContainer>
        <ContentContainer>
          <TextContainer>
            <Text
              bold
              fontSize='15px'
              text='Testing High Fidelity Prototype I'
            />
            <Text text='The high fidelity prototype was further tested with users to get their feedback on the color scheme, font, readability, and learnability of the interface.' />
            <Text text='We then created another version of high fidelity prototype based on the feedback received from the 1st one.' />
            <Text bold fontSize='15px' text='High Fidelity Prototype  II' />
          </TextContainer>
          <ImageContainer aspectRatio='2.2'>
            <Image src='/buskaro/hifi_2.webp' alt='high fidelitiy 2' />
          </ImageContainer>
          <TextContainer>
            <Text
              text={
                <span>
                  We were now ready for the final development of the app. We
                  used <b>Android Studio</b> for the same.
                </span>
              }
            />
            <Text text='After the development was complete, it was time for one final round of testing. But this time, we would use the actual app.' />
            <Text bold fontSize='15px' text='Testing the Final App' />
            <Text text='Most of the users felt that the app was clear in terms of both the UI and interactions. With all the positive responses, the users also provided us with areas requiring scope of improvement such as improving the search bars and functioning of automatic detection of the current stop.' />
          </TextContainer>
        </ContentContainer>
        <FullWidthContainer display='block'>
          <>
            <TextContainer>
              <Text bold fontSize='15px' text='Final Screens' />
            </TextContainer>
            <FullWidthCarouselContainer>
              <CarouselContent />
              <CarouselContentMobile />
            </FullWidthCarouselContainer>
          </>
        </FullWidthContainer>
        <ContentContainer>
          <TextContainer>
            <Heading text='Color Scheme' />
            <Text
              text={
                <span>
                  We started our search for a color scheme by exploring the
                  website awwwards.com for award-winning interfaces. We also
                  used the material design tool (
                  <a
                    rel='noreferrer'
                    href='https://material.io'
                    target='_blank'
                  >
                    material.io
                  </a>
                  ) to test various color schemes.
                </span>
              }
            />
            <Text text='After multiple rounds of testing, we narrowed down on the scheme:' />
            <Text
              bold
              fontSize='15px'
              text='Primary Color: Turquoise (#00535B)'
            />
            <Text
              bold
              fontSize='15px'
              text='Secondary Color: Red-Orange (#C1403D)'
            />
          </TextContainer>
          <ImageContainer aspectRatio='1.6'>
            <Image
              src='/buskaro/color_scheme.webp'
              style={{
                width: '-webkit-fill-available',
                height: '-webkit-fill-available',
                objectFit: 'contain',
              }}
              alt='color scheme'
            />
          </ImageContainer>
        </ContentContainer>
        <Footer />
      </PageContent>
    </>
  );
};

export default BusKaro;

const UnorderedList = styled.ul`
  @media only screen and (min-width: ${breakpoints.tablet}) {
    list-style-position: inside;
  }
  font-size: 14px;
  padding-left: 10px;
  width: 100%;
`;

const OrderedList = styled.ol`
  @media only screen and (min-width: ${breakpoints.tablet}) {
    list-style-position: inside;
  }
  font-size: 14px;
  padding-left: 10px;
  width: 100%;
`;

const CarouselContainer = styled(ImageContainer)`
  top: -80px;
  li.dot {
    background: black !important;
  }
  .carousel .thumbs {
    display: flex;
    justify-content: center;
  }
  img,
  span {
    width: 100% !important;
    vertical-align: top;
    border: 0;
  }
  .slider-wrapper {
    img {
      width: 100% !important;
      aspect-ratio: 1.78 !important;
      @media only screen and (min-width: ${breakpoints.tablet}) {
        width: 940px !important;
        height: 528px !important;
      }
    }
  }
  margin-bottom: 0;
`;

const FullWidthCarouselContainer = styled.div`
  top: 0;
  li.dot {
    background: black !important;
  }
  .carousel .thumbs {
    display: flex;
    justify-content: center;
  }
  img,
  span {
    width: 100% !important;
    vertical-align: top;
    border: 0;
  }
`;

const CarouselItem = styled.div`
  aspect-ratio: 1.78 !important;
  width: 100% !important;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    height: 528px;
  }
`;

const ImageGridItem = styled.div<{ index?: number }>`
  position: relative;
  ${({ index }) =>
    index === 0 &&
    css`
      grid-row: span 2;
    `}
`;

const ImageGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 940px;
  margin: 0 auto 40px;
  gap: 10px;
`;
