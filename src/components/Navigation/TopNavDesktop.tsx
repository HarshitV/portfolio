import { NextPage } from "next";
import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    padding: 5% 3% 5% 5%;
    width: 100%;
    height: 40px;
    background: transparent;
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
    cormorantgaramond, "cormorant garamond", serif;
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

const TopNavDesktop: NextPage = () => (
  <Wrapper>
    <A href='/'>Harshit Verma</A>
    <RightNav>
      <Link href='/'>Home</Link>
      <Link href='/work'>Work</Link>
    </RightNav>
  </Wrapper>
);

export default TopNavDesktop;
