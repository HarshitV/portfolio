import styled from 'styled-components';
import { breakpoints } from './constants';

export const Button = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 50px;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 15px;
  }
  font-weight: 100;
  transition: 0.3s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const PageContent = styled.div`
  position: relative;
  padding-bottom: 85px;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    top: 100px;
    padding-bottom: 100px;
  }
`;

export const Image = styled.img<{
  objectFit?: 'cover' | 'contain';
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width || '-webkit-fill-available'};
  height: ${({ height }) => height || '-webkit-fill-available'};
  object-fit: ${({ objectFit }) => objectFit || 'contain'};
`;

export const TextContainer = styled.section`
  position: relative;
  z-index: 1;
  margin: 0 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  a {
    text-decoration: underline;
  }
  @media only screen and (min-width: ${breakpoints.tablet}) {
    text-align: center;
    align-items: center;
  }
`;

export const ImageContainer = styled.div<{ aspectRatio?: string }>`
  position: relative;
  max-width: 940px;
  max-height: 450px;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio || '47/22'};
  margin: 0 auto 40px;
`;


export const VideoContainer = styled(ImageContainer)`
  video {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  width: 100vw;
  padding-left: 20px;
  padding-right: 20px;
`;