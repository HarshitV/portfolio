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
import FullWidthContainer from 'components/FullWidthContainer';
import styled, { css } from 'styled-components';
import { breakpoints } from 'styles/constants';

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
              <li>
                <Text
                  text={
                    <span>
                      <b>Multi-Currency pockets:</b> BUSta houses a pocket on
                      the front with separate compartments for different
                      denominations to reduce turn out time for each
                      transaction.
                    </span>
                  }
                />
              </li>
              <li>
                <Text
                  text={
                    <span>
                      <b>5 Buttons for printing tickets on the strap:</b> As
                      shown in the figure, BUSta requires only 5 buttons to
                      print tickets; other solutions require a numerical keypad
                      with over 20 buttons.
                    </span>
                  }
                />
              </li>
              <li>
                <Text
                  text={
                    <span>
                      <b>Printing facility in the bag:</b> BUSta gives easier
                      access to printed tickets by placing it at the end of the
                      bag, where printed tickets can be easily accessed with
                      different currencies.
                    </span>
                  }
                />
              </li>
              <li>
                <Text
                  text={
                    <span>
                      <b>Efficient Ticket Design:</b> A new ticket design not
                      only saves paper but also removes clutter by removing
                      unnecessary information.
                    </span>
                  }
                />
              </li>
              <li>
                <Text
                  text={
                    <span>
                      <b>GPS based location auto-update::</b> BUSta auto-updates
                      location through GPS and automatically uses current
                      location to print the ticket for the required destination,
                      and hence calculates fare too.
                    </span>
                  }
                />
              </li>
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
            <TwoColumn columnLayout='1fr 2fr' reverse>
              <TextContainer>
                <Heading2 text='Pockets and Bag Design' />
                <Text text='We visited different bag markets and shops like Decathlon to get inspiration for pocket design. Our first design had limited money capacity and was prone to money theft; all of which were fixed in the final iteration.' />
              </TextContainer>
              <TwoColumnImageContainer aspectRatio='auto'>
                <Image
                  src='/busta/bag_design.webp'
                  alt='bag design'
                  width='100%'
                  height='100%'
                />
              </TwoColumnImageContainer>
            </TwoColumn>
            <TwoColumn columnLayout='2fr 1fr'>
              <TextContainer>
                <Heading2 text='Strap Position' />
                <Text text='Our first prototype was a little loose from the side so we tried attaching straps at different positions and tested with bus conductors. The bus conductors finalised on the 3rd position as it was the most comfortable and kept the bag completely horizontal.' />
              </TextContainer>
              <TwoColumnImageContainer aspectRatio='auto'>
                <Image
                  src='/busta/strap_position.webp'
                  alt='strap position'
                  width='100%'
                  height='100%'
                />
              </TwoColumnImageContainer>
            </TwoColumn>
            <TwoColumn columnLayout='1fr 2fr' reverse>
              <TextContainer>
                <Heading2 text='Buttons' />
                <Text text='Bus conductors found our initial 2 cms buttons slightly small and often got confused between them. We fixed this by increasing button diameter to 2.5 cms and reinventing the button design.' />
              </TextContainer>
              <TwoColumnImageContainer aspectRatio='auto'>
                <Image
                  src='/busta/buttons.webp'
                  alt='buttons'
                  width='100%'
                  height='100%'
                />
              </TwoColumnImageContainer>
            </TwoColumn>
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
            <TechnologyItem>
              <ImageContainer>
                <Image
                  src='/busta/circuit.webp'
                  alt='circuit'
                  width='100%'
                  height='100%'
                />
              </ImageContainer>
              <TextContainer>
                <Heading2 text='Circuit' />
                <Text text='The circuit running through the strap consists of 2 wires - one for power and other for buttons. The circuit remains completely hidden inside the strap.' />
              </TextContainer>
            </TechnologyItem>
            <TechnologyItem>
              <ImageContainer>
                <Image
                  src='/busta/arduino.webp'
                  alt='arduino'
                  width='100%'
                  height='100%'
                />
              </ImageContainer>
              <TextContainer>
                <Heading2 text='Arduino, Smartphone and Powerbank' />
                <Text text='The arduino placed inside the bag is powered by a powerbank. All the connections through the buttons happen via the arduino. A bluetooth module allows the smartphone to interact with it.' />
              </TextContainer>
            </TechnologyItem>
            <TechnologyItem>
              <ImageContainer>
                <Image
                  src='/busta/printer.webp'
                  alt='printer'
                  width='100%'
                  height='100%'
                />
              </ImageContainer>
              <TextContainer>
                <Heading2 text='Printer' />
                <Text text='The side of this bag houses a small thermal printer for printing tickets. The android phone will also be attached to a powerbank to ensure an extended battery.' />
              </TextContainer>
            </TechnologyItem>
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

const TwoColumn = styled.div<{ columnLayout?: string; reverse?: boolean }>`
  margin: 30px 0;
  width: 100%;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: ${({ columnLayout }) => columnLayout || '1fr 1fr'};
    gap: 40px;
    ${({ reverse }) =>
      reverse
        ? css`
            ${TextContainer} {
              order: -1;
            }
          `
        : css`
            ${TextContainer} {
              order: 2;
            }
          `}
  }
`;

const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
`;

const TwoColumnImageContainer = styled(ImageContainer)`
  margin: 0 auto;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    max-height: 600px;
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
    // width: 301px;
    height: 240px;
    aspect-ratio: 1.25;
    margin: 0;
  }
`;
