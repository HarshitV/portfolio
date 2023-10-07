import { Heading2 } from 'components/Text/Heading';
import React from 'react';
import styled, { css } from 'styled-components';

const MenuOverlay = ({ navbarOpen, setNavbarOpen }: any) => {
  return (
    <Nav navbarOpen={navbarOpen}>
      <Ul>
        <Li>
          <A href='/'>
            <Heading2 text='Home' />
          </A>
        </Li>
        <Li>
          <A href='/work'>
            <Heading2 text='Work' />
          </A>
        </Li>
      </Ul>
    </Nav>
  );
};

export default MenuOverlay;

const Nav = styled.nav<{ navbarOpen: any }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  z-index: 10;
  height: 100%;
  padding-top: 24px;
  background-color: white;
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 300ms, transform 300ms;

  ${({ navbarOpen }) =>
    navbarOpen &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 85px;
  position: relative;
  padding-left: 0;
`;

const Li = styled.li`
  list-style: none;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;
