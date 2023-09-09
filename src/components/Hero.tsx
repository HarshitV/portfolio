import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  image: {
    src: string;
    alt: string;
  };
}

const ImageContainer = styled.div`
  width: 92vw;
  aspect-ratio: 2;
  position: relative;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
`;

const Hero = ({ image }: Props) => {
  return (
    <ImageContainer>
      <Image src={image.src} alt={image.alt} layout='fill' objectFit='cover' loading='eager' />
    </ImageContainer>
  );
};

export default Hero;
