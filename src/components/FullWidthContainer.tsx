import styled from 'styled-components';
import { breakpoints } from 'styles/constants';
const Container = styled.div<{ flexOnRow: boolean; display: string }>`
  width: 100vw;
  padding: 40px 20px;
  background: rgb(247, 247, 247);
  display: ${({display}) => display && display};
  flex-direction: ${({flexOnRow}) => flexOnRow ? 'row' : 'column'};
  justify-content: center;
  align-items: flex-start;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    align-items: center;
  }
  margin-bottom: 40px;
`;

interface Props {
  children: JSX.Element;
  flexOnRow?: boolean;
  display?: string;
}

const FullWidthContainer = ({ children, flexOnRow = false, display='flex' }: Props) => {
  return <Container flexOnRow={flexOnRow} display={display}>{children}</Container>;
};

export default FullWidthContainer;
