import styled from 'styled-components';
const Container = styled.div<{ flexOnRow: boolean }>`
  width: 100vw;
  padding: 40px 0;
  background: rgb(247, 247, 247);
  display: flex;
  flex-direction: ${({flexOnRow}) => flexOnRow ? 'row' : 'column'};
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

interface Props {
  children: JSX.Element;
  flexOnRow?: boolean;
}

const FullWidthContainer = ({ children, flexOnRow = false }: Props) => {
  return <Container flexOnRow={flexOnRow}>{children}</Container>;
};

export default FullWidthContainer;
