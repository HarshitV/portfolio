import styled from 'styled-components';
import { breakpoints } from 'styles/constants';

interface Props {
  children: JSX.Element;
  flexOnRow?: boolean;
  display?: string;
}

const FullWidthContainer = ({
  children,
  flexOnRow = false,
  display = 'flex',
}: Props) => {
  return (
    <Container flexOnRow={flexOnRow} display={display}>
      {children}
    </Container>
  );
};

export default FullWidthContainer;

const Container = styled.div<{ flexOnRow: boolean; display: string }>`
  width: 100vw;
  padding: 40px 20px;
  background: rgb(247, 247, 247);
  display: ${({ display }) => display && display};
  flex-direction: ${({ flexOnRow }) => (flexOnRow ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  p,
  h1,
  h2 {
    text-align: center;
  }
  margin-bottom: 40px;
`;
