import styled from 'styled-components';
const Container = styled.div`
  width: 100vw;
  padding: 40px 0;
  background: rgb(247, 247, 247);
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  children: JSX.Element;
}

const FullWidthContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default FullWidthContainer;
