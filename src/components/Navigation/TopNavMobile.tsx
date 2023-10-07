import { NextPage } from 'next';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import { breakpoints } from 'styles/constants';
import MenuOverlay from './MenuOverlay';
import { useState } from 'react';

const TopNavMobile: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setNavbarOpen = (navbarState: boolean) => {
    setIsOpen(navbarState);
  };

  return (
    <>
      <Wrapper>
        <AnchorContainer>
          <A href='/'>Harshit Verma</A>
        </AnchorContainer>
        <Hamburger navbarOpen={isOpen} setNavbarOpen={setNavbarOpen} />
      </Wrapper>
      <MenuOverlay navbarOpen={isOpen} setNavbarOpen={setNavbarOpen} />
    </>
  );
};

export default TopNavMobile;

const Wrapper = styled.div`
  position: sticky;
  top: 0%;
  left: 0%;
  display: flex;
  padding: 30px;
  background: white;
  justify-content: center;
  z-index: 11;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const AnchorContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const A = styled.a`
  text-align: center;
  font: normal normal normal 22px/1.41em cormorantgaramond-light,
    cormorantgaramond, 'cormorant garamond', serif;
  font-size: 20px;
  padding-left: 25px;
  line-height: 1;
  letter-spacing: normal;
`;
