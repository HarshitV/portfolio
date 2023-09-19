import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { breakpoints } from 'styles/constants';
import { Image } from 'styles/layouts';

const FullWidthCarouselItem = styled.div`
  height: 528px;
  width: 33vw;
`;

const Container = styled.div`
  display: none;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const CarouselContent = () => (
  <Container>
    <Carousel
      showStatus={false}
      infiniteLoop
      autoPlay
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      interval={2500}
      centerMode={true}
      centerSlidePercentage={33.33}
    >
      <FullWidthCarouselItem>
        <Image src='/buskaro/screen1.png' alt='screen1' objectFit='cover' />
      </FullWidthCarouselItem>
      <FullWidthCarouselItem>
        <Image src='/buskaro/screen2.png' alt='screen2' objectFit='cover' />
      </FullWidthCarouselItem>
      <FullWidthCarouselItem>
        <Image src='/buskaro/screen3.png' alt='screen3' objectFit='cover' />
      </FullWidthCarouselItem>
      <FullWidthCarouselItem>
        <Image src='/buskaro/screen4.png' alt='screen4' objectFit='cover' />
      </FullWidthCarouselItem>
      <FullWidthCarouselItem>
        <Image src='/buskaro/screen5.png' alt='screen5' objectFit='cover' />
      </FullWidthCarouselItem>
      <FullWidthCarouselItem>
        <Image src='/buskaro/screen6.png' alt='screen6' objectFit='cover' />
      </FullWidthCarouselItem>
      <FullWidthCarouselItem>
        <Image src='/buskaro/screen7.png' alt='screen7' objectFit='cover' />
      </FullWidthCarouselItem>
    </Carousel>
  </Container>
);

export default CarouselContent;
