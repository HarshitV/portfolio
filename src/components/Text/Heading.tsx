import styled from 'styled-components';

interface Props {
  text: string;
}

const HeadingContainer = styled.div`
  margin: 30px 0;
  h1 {
    font-size: 40px;
  }

`;

const Heading = ({ text }: Props) => {
  return (
    <HeadingContainer>
      <h1>{text}</h1>
    </HeadingContainer>
  );
};

export default Heading;
