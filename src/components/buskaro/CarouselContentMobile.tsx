import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { breakpoints } from 'styles/constants';
import { Image } from 'styles/layouts';

interface Props {
  page: 'buskaro' | 'instanotes';
  itemCount: number;
}

const CarouselContentMobile = ({ page, itemCount }: Props) => {
  const renderItems = () => {
    const carouselItems = [];
    for (let i = 1; i <= itemCount; i++)
      carouselItems.push(
        <FullWidthCarouselItem>
          <Image
            src={`/${page}/screen${i}.png`}
            alt={`screen${i}`}
            objectFit='cover'
          />
        </FullWidthCarouselItem>
      );
    return carouselItems;
  };

  return (
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
        centerSlidePercentage={100}
      >
        {renderItems()}
      </Carousel>
    </Container>
  );
};

export default CarouselContentMobile;

const FullWidthCarouselItem = styled.div`
  aspect-ratio: 1.26 !important;
  width: 100% !important;
`;

const Container = styled.div`
  display: block;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
