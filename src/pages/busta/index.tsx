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
  TwoColumn,
  VideoContainer,
} from 'styles/layouts';
import Footer from 'components/Footer';
import FullWidthContainer from 'components/FullWidthContainer';
import styled, { css } from 'styled-components';
import { breakpoints } from 'styles/constants';
import { designProcess, salientFeatures, technology } from 'data/busta';

const Busta = () => {
  return (
    <>
      <Head>
        <title>Harshit Verma | busta</title>
      </Head>
      <PageContent>
        <Hero
          image={{
            src: '/busta/hero.webp',
            alt: 'bustra hero',
          }}
        />
        <ContentContainer>
          <TextContainer>
            <Heading text='A Custom-Designed Wearable Bag to speed up the ticketing process for bus conductors in Delhi' />
            <Text text='In a country like India, bus conductors play a crucial role in the ticketing process of buses. They not only have to print and hand over the tickets to passengers but also have to manage the money and have change in hand at all times. And to do all this with each continuous onboarding passenger is not an easy job.' />
            <Text text='It is thus practical to think of assisting the conductors so that they can fulfill their roles and responsibilities more efficiently. After stepping on these public buses and interacting with the bus conductors, we were able to identify the following set of problems: -' />
          </TextContainer>
          <ImageContainer aspectRatio='2.14'>
            <Image src='/busta/problems.webp' alt='bus conductor problems' />
          </ImageContainer>
          <ImageContainer aspectRatio='3'>
            <Image src='/busta/problems2.webp' alt='bus conductor problems 2' />
          </ImageContainer>
          <TextContainer>
            <Heading text='Introduction' />
            <Text text='BUSta is a wearable device built to provide hands-free usage for bus conductors in public transport buses. BUSta provides a wearable solution for printing tickets and managing money. All features have been integrated into one wearable solution. The strap has 5 buttons: 3 for tickets of Rs.5, Rs.10, and Rs.15; print and reset. When a passenger arrives, the conductor first presses the 5/10/15 button. This is followed by the press of a print button which results in ticket printing out from the side of the bag.' />
          </TextContainer>
          <VideoContainer>
            <video controls playsInline src='/busta/intro.mp4' />
          </VideoContainer>
          <TextContainer>
            <Text text="This invention brings the multiple tasks of the conductor in one place. The device updates the current destination automatically using GPS. Due to its wearability, the conductor doesn't need to confine to his seat with the bulky device with 30+ buttons. He can carry his operations single-handedly and efficiently using this device. The technology is easy to learn and simple to use. It has been tested with bus conductors and has received a positive reception from the users." />
          </TextContainer>
          <ImageContainer aspectRatio='0.75'>
            <Image src='/busta/busta.webp' alt='busta' />
          </ImageContainer>
          <TextContainer>
            <Heading text='Salient Features' />
            <Text text='BUSTA is the first known wearable solution for bus conductors. It gives the conductor an easy access to all the things required to do his/her duty efficiently. The novel features that make our product unique includes the following:' />
          </TextContainer>
        </ContentContainer>
        <FullWidthContainer>
          <TwoColumn>
            <TwoColumnImageContainer aspectRatio='0.7'>
              <Image
                src='/busta/salient_features.webp'
                alt='salient features'
                width='100%'
                height='100%'
              />
            </TwoColumnImageContainer>
            <UnorderedList>
              {salientFeatures.map((feature, index) => (
                <li key={`feature-${index}`}>
                  <Text
                    text={
                      <span>
                        <b>{feature.title}:</b> {feature.description}
                      </span>
                    }
                  />
                </li>
              ))}
            </UnorderedList>
          </TwoColumn>
        </FullWidthContainer>
        <ContentContainer>
          <TextContainer>
            <Text text='The plan was to succeed in creating a wearable which is more robust and more comfortable than the current device. Our aim was to follow a systematic design process, conduct several user studies and improve our product following an iterative plan to ensure that we don’t leave any rooms for failure and the bus conductors can easily adjust to our device.' />
            <Heading text='Design Process' />
          </TextContainer>
          <ImageContainer aspectRatio='1.59'>
            <Image src='/busta/iterative.webp' alt='iterative design' />
          </ImageContainer>
          <TextContainer>
            <Text text='The plan was to succeed in creating a wearable which is more robust and more comfortable than the current device. Our aim was to follow a systematic design process, conduct several user studies and continuously improve our product to ensure that we don’t leave any rooms for failure and the bus conductors can easily adjust to our device.' />
            <Text text='We followed an iterative process (keeping bus conductors always in loop) and brainstormed several design solutions for the following major components of the bag -' />
          </TextContainer>
        </ContentContainer>
        <FullWidthContainer>
          <>
            {designProcess.map(
              (
                { columnLayout, title, description, imgSrc, imgAlt, reverse },
                index
              ) => (
                <TwoColumn
                  columnLayout={columnLayout}
                  reverse={reverse}
                  key={`process-${index}`}
                >
                  <TextContainer>
                    <Heading2 text={title} />
                    <Text text={description} />
                  </TextContainer>
                  <TwoColumnImageContainer aspectRatio='auto'>
                    <Image
                      src={`/busta/${imgSrc}.webp`}
                      alt={imgAlt}
                      width='100%'
                      height='100%'
                    />
                  </TwoColumnImageContainer>
                </TwoColumn>
              )
            )}
          </>
        </FullWidthContainer>
        <ContentContainer>
          <TextContainer>
            <Heading text='User Testing' />
            <Text text='After designing the first iteration of the bag, we wanted to find out more about the current device being used and the advantages/disadvantages of it. So, we conducted a user study and listed all the pros and cons of the current device. The idea was to ensure we’re creating a better product in every aspect. By taking into account the feedback from the conductors on the current machines, we did some changes on our initial prototype to ensure that the problems there in the earlier devices aren’t a source of disadvantage in our product too.' />
            <Text text='This was followed by another round of user testing, but on our initial prototype this time. When we had gathered enough feedback on our initial design, we started with an idea to create a complete workable product, which can be used by bus conductors in their daily trips; the ideal product which has enough practical implementations; where we could not only see the budget/cost of the product but also consider the comforts and usability. So, we followed a product based approach. We wanted to ensure that the design is ”Rough’n’Tough”. We focused a lot on even minute design details and wanted to make sure our product can survive real life scenarios.' />
          </TextContainer>
          <ImageContainer aspectRatio='2.58'>
            <Image src='/busta/user_testing.webp' alt='user testing' />
          </ImageContainer>
          <TextContainer>
            <Text text='After several iterations of designing, prototyping and evaluating, BUSta had undergone a total overhaul in terms of the design and technology, while the basic idea still being the same - a wearable to speed up the ticketing process for bus conductors in Delhi.' />
            <Heading text='Technology' />
            <Text text='BUSta incorporates the following components in a single wearable: -' />
          </TextContainer>
        </ContentContainer>
        <FullWidthContainer>
          <Technology>
            {technology.map((item, index) => (
              <TechnologyItem key={`tech-${index}`}>
                <ImageContainer>
                  <Image
                    src={`/busta/${item.imgSrc}.webp`}
                    alt={item.imgAlt}
                    width='100%'
                    height='100%'
                  />
                </ImageContainer>
                <TextContainer>
                  <Heading2 text={item.title} />
                  <Text text={item.description} />
                </TextContainer>
              </TechnologyItem>
            ))}
          </Technology>
        </FullWidthContainer>
        <ContentContainer>
          <TextContainer>
            <Text text='Check out this video of our initial prototype: -' />
          </TextContainer>
          <VideoContainer>
            <video controls playsInline src='/busta/prototype.mp4' />
          </VideoContainer>
        </ContentContainer>
        <Footer />
      </PageContent>
    </>
  );
};

export default Busta;

const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  p {
    text-align: left;
  }
`;

const TwoColumnImageContainer = styled(ImageContainer)`
  margin: 0 auto 40px;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    max-height: 600px;
    margin: 0 auto;
  }
`;

const Technology = styled.div`
  width: 100%;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
`;

const TechnologyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 0;
  ${ImageContainer} {
    height: 240px;
    aspect-ratio: 1.25;
    margin: 0;
  }
`;
