import { WorkTilesProps } from 'data/work';
import Image from 'next/image';
import styled from 'styled-components';
import { breakpoints } from 'styles/constants';
import { Button } from 'styles/layouts';
import { Direction } from 'utils/constants';

const TilesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  flex-direction: column;
  @media only screen and (min-width: ${breakpoints.tablet}) {
  height: 620px;
    flex-direction: row;
    > * {
      flex: 0 0 auto;
    }
  }

`;

const ImageComponent = styled.div<{direction: Direction}>`
  position: relative;
  min-height: 400px;
  aspect-ratio: 1;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: 50%;
    height: auto;
    ${({direction}) => direction===Direction.REVERSE && 'order: 1'};
  }
`;

const Content = styled.div`
  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: 50%;
  background: rgb(247, 247, 247);
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 10%;
  box-sizing: border-box;
  gap: 40px;
  line-height: 26px;
`;

const ContentHeading = styled.h2`
  font-size: 22px;
`;

const ContentDescription = styled.div`
  font-size: 18px;
`;

const ContentFooter = styled.div`
  font-size: 15px;
`;

const WorkTiles = ({
  image,
  title,
  description,
  footer1,
  footer2,
  buttonLink,
  direction = Direction.NORMAL,
  loading='lazy',
}: WorkTilesProps) => {
  return (
    <TilesContainer>
      <ImageComponent direction={direction}>
        <Image
          src={image.src}
          alt={image.alt}
          layout='fill'
          objectFit='cover'
          loading={loading}
        />
      </ImageComponent>
      <Content>
        <ContentHeading>{title}</ContentHeading>
        <ContentDescription>{description}</ContentDescription>
        <ContentFooter>
          <div>{footer1}</div>
          <div>{footer2}</div>
        </ContentFooter>
        <Button href={buttonLink}>View more</Button>
      </Content>
    </TilesContainer>
  );
};

export default WorkTiles;
