import styled from 'styled-components';

interface Props {
  text: string;
}

export const Heading = ({ text }: Props) => {
  return (
    <HeadingContainer>
      <h1>{text}</h1>
    </HeadingContainer>
  );
};

export const Heading2 = ({ text }: Props) => {
  return (
    <HeadingContainer>
      <h2>{text}</h2>
    </HeadingContainer>
  );
};

const HeadingContainer = styled.div`
  margin: 30px 0;
  h1 {
    font-size: 40px;
  }
  h2 {
    font-weight: 700;
  }
`;
