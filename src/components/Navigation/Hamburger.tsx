import { ReactEventHandler, useState } from 'react';
import styled from 'styled-components';

interface Props {
  onClick: ReactEventHandler;
}

const Container = styled.div`
  position: sticky;
  top: 30px;
  right: 30px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
`;

const Line1 = styled.div<{ isActive: boolean }>`
  width: 25px;
  height: 1px;
  border-radius: 10px;
  background-color: black;
  transform-origin: 1px;
  transition: all 0.3s linear;
  transform: ${({ isActive }) => (isActive ? 'rotate(45deg)' : 'rotate(0)')};
`;

const Line2 = styled(Line1)`
  transform: ${({ isActive }) => (isActive ? 'rotate(45deg)' : 'rotate(0)')};
  opacity: ${({ isActive }) => (isActive ? 0 : 1)};
`;

const Line3 = styled(Line1)`
  transform: ${({ isActive }) => (isActive ? 'rotate(-45deg)' : 'rotate(0)')};
`;

const Hamburger = ({ onClick }: Props) => {
  const [isActive, setActive] = useState(false);

  const clickHandler = (onClick: ReactEventHandler) => {
    setActive(!isActive);
  };

  return (
    <Container onClick={() => clickHandler(onClick)}>
      <Line1 isActive={isActive} />
      <Line2 isActive={isActive} />
      <Line3 isActive={isActive} />
    </Container>
  );
};

export default Hamburger;
