import { NextPage } from 'next';
import { MouseEvent } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'styles/constants';

const TopNavDesktop: NextPage = () => {
  const handleClick = (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    path: string
  ) => {
    e.preventDefault();
    if (window.location.pathname === path)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    else window.location.href = path;
  };

  return (
    <Wrapper>
      <A href='/' onClick={(e) => handleClick(e, '/')}>
        Harshit Verma
      </A>
      <RightNav>
        <Link href='/' onClick={(e) => handleClick(e, '/')}>
          Home
        </Link>
        <Link href='/work' onClick={(e) => handleClick(e, '/work')}>
          Work
        </Link>
      </RightNav>
    </Wrapper>
  );
};

export default TopNavDesktop;

const Wrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: 50px 3% 50px 5%;
    width: 100%;
    height: 40px;
    background: white;
    z-index: 100;
    display: flex;
    align-items: center;
  }
`;

const RightNav = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  line-height: 30px;
  font: normal normal normal 14px/1.79em raleway, sans-serif;
`;

const A = styled.a`
  width: 90%;
  font: normal normal normal 22px/1.41em cormorantgaramond-light,
    cormorantgaramond, 'cormorant garamond', serif;
  font-size: 18px;
  @media only screen and (min-width: 1440px) {
    font-size: 22px;
  }

  line-height: 1;
  letter-spacing: normal;
`;

const Link = styled.a`
  font: normal normal normal 14px/1.79em raleway, sans-serif;
  font-size: 12px;
  @media only screen and (min-width: 1440px) {
    font-size: 14px;
  }
  padding: 0 10px;
  font-weight: 100;
`;
