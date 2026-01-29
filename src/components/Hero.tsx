import styled from 'styled-components';
import { breakpoints } from 'styles/constants';
import { Image } from 'styles/layouts';

interface Props {
  image: {
    src: string;
    alt: string;
  };
}

const Hero = ({ image }: Props) => {
  return (
    <ImageContainer>
      <Image
        src={image.src}
        alt={image.alt}
        objectFit='cover'
        loading='eager'
      />
    </ImageContainer>
  );
};

export default Hero;

const ImageContainer = styled.div`
  width: 100vw;
  aspect-ratio: 2;
  position: relative;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: 92vw;
  }
`;
