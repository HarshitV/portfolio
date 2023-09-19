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
