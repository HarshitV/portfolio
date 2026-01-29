import styled from 'styled-components';

interface Props {
  text: string | JSX.Element;
  fontSize?: string;
}

export const Heading = ({ text }: Props) => {
  return (
    <HeadingContainer>
      <h1>{text}</h1>
    </HeadingContainer>
  );
};

export const Heading2 = ({ text, fontSize }: Props) => {
  return (
    <HeadingContainer fontSize={fontSize}>
      <h2>{text}</h2>
    </HeadingContainer>
  );
};

const HeadingContainer = styled.div<{ fontSize?: string }>`
  margin: 30px 0;
  width: 100%;
  h1 {
    font-size: 40px;
  }
  h2 {
    font-weight: 700;
    ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  }
`;
