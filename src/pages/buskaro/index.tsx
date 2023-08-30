import FullWidthContainer from 'components/FullWidthContainer';
import Hero from 'components/Hero';
import TopNav from 'components/Navigation/TopNav';
import Heading from 'components/Text/Heading';
import Text from 'components/Text/Text';
import Image from 'next/image';
import styled from 'styled-components';

const TextContainer = styled.section`
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
`;

const ImageContainer = styled.div`
  position: relative;
  width: 940px;
  aspect-ratio: 47/22;
  margin-left: auto;
  margin-right: auto;
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
            Unreliable timings of buses due to congestion and traffic jams
          </li>
          <li>Unavailability of real-time bus transit data </li>
          <li>
            Difficulty in onboarding new users due to unavailability of updated
            routes & schedules
          </li>
        </UnorderedList>
      </TextContainer>
      <FullWidthContainer>
        <Heading text='Design Thought Process' />
      </FullWidthContainer>
      <ImageContainer>
        <Image
          src='/buskaro/dtp.webp'
          layout='fill'
          objectFit='contain'
          alt='design thought process'
        />
      </ImageContainer>
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
              the problem. Bus travelers felt that the long waiting times at bus
              stops was a common problem.
            </span>
          }
        />
      </TextContainer>
    </>
  );
};

export default buskaro;
