import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { breakpoints } from 'styles/constants';
import { Image } from 'styles/layouts';

interface Props {
  page: 'buskaro' | 'instanotes';
  itemCount: number;
}

const CarouselContent = ({ page, itemCount }: Props) => {
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
        centerSlidePercentage={33.33}
      >
        {renderItems()}
      </Carousel>
    </Container>
  );
};

export default CarouselContent;

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
