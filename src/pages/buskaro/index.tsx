import FullWidthContainer from 'components/FullWidthContainer';
import Hero from 'components/Hero';
import TopNav from 'components/Navigation/TopNav';
import Heading from 'components/Text/Heading';
import Text from 'components/Text/Text';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

const TextContainer = styled.section`
  position: relative;
  z-index: 1;
  margin: 0 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`;

const UnorderedList = styled.ul`
  list-style-position: inside;
  font-size: 14px;
`;

const OrderedList = styled.ol`
  list-style-position: inside;
  font-size: 14px;
`;

const ImageContainer = styled.div<{ aspectRatio?: string }>`
  position: relative;
  max-width: 940px;
  max-height: 450px;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio || '47/22'};
  margin: 0 auto 40px;
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
  margin-bottom: 0;
`;

const VideoContainer = styled(ImageContainer)`
  video {
    width: 100%;
  }
`;

const ImageGridItem = styled.div<{ index?: number }>`
  position: relative;
  aspect-ratio: 1.35;
  ${({ index }) =>
    index === 0 &&
    css`
      aspect-ratio: auto;
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

const ContentContainer = styled.div`
  width: 100vw;
  padding-left: 20px;
  padding-right: 20px;
`;

const IframeContainer = styled.div`
  width: 308px;
  height: 538px;
`;

const buskaro = () => {
  return (
    <>
      <TopNav />
      <Hero
        image={{
          src: '/buskaro/hero.webp',
          alt: 'buskaro hero image',
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
        <Image
          src='/buskaro/dtp.webp'
          layout='fill'
          objectFit='cover'
          alt='design thought process'
        />
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
                We <b>surveyed</b> almost 50 people to establish the validity of
                the problem. Bus travelers felt that the long waiting times at
                bus stops was a common problem.
              </span>
            }
          />
        </TextContainer>
        <ImageContainer aspectRatio='1.19'>
          <Image
            src='/buskaro/survey.webp'
            layout='fill'
            objectFit='contain'
            alt='design thought process'
          />
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
                src={imgSrc}
                layout='fill'
                objectFit='cover'
                alt={`affinity-${index}`}
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
        <ImageContainer>
          <Image
            src='/buskaro/insights.webp'
            layout='fill'
            objectFit='contain'
            alt='insights'
          />
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
          <video src='/buskaro/ideation.mp4' autoPlay muted loop />
        </VideoContainer>
        <TextContainer>
          <Text
            text={
              <span>
                After defining the problem and <b>brainstorming</b> thoroughly,
                we used <b>convergent thinking</b> to narrow down to 3 ideas
                that we could possibly focus on: -
              </span>
            }
          />
          <OrderedList>
            <li>
              Using <b>pre-installed GPS devices</b> in DTC buses.
            </li>
            <li>
              Building our own <b>hardware device</b> for tracking the location
              of buses.
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
        <ImageContainer>
          <Image
            src='/buskaro/crowdsource.webp'
            layout='fill'
            objectFit='contain'
            alt='crowdsource'
          />
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
              <b>busKaro</b> (Translation - I want to board the bus) - To reveal
              ETA for a bus.
            </li>
            <li>
              <b>busKarli</b> (Translation - I have boarded the bus) To earn
              credits by updating the boarding information.
            </li>
          </UnorderedList>
          <Text bold fontSize='15px' text='Low Fidelity Prototype I' />
        </TextContainer>
        <ImageContainer>
          <Image
            src='/buskaro/lofi1.webp'
            layout='fill'
            objectFit='contain'
            alt='lofi1'
          />
        </ImageContainer>
        <TextContainer>
          <Text bold fontSize='15px' text='Testing Low Fidelity Prototype I' />
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
          <Carousel showStatus={false} infiniteLoop autoPlay>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/buskaro/lofi2_1.png' alt='lofi2_1' />
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/buskaro/lofi2_2.png' alt='lofi2_2' />
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/buskaro/lofi2_3.png' alt='lofi2_3' />
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/buskaro/lofi2_4.png' alt='lofi2_4' />
            </div>
          </Carousel>
        </CarouselContainer>
      </ContentContainer>
      <FullWidthContainer>
        <IframeContainer>
          <iframe
            title='Embedded Content'
            src='https://khurranasagar.github.io/buskaro/'
            width='100%'
            height='100%'
            name='htmlComp-iframe'
            data-src
          />
        </IframeContainer>
      </FullWidthContainer>
    </>
  );
};

export default buskaro;
