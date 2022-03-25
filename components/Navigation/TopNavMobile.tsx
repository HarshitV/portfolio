import { NextPage } from "next";
import styled from "styled-components";
import Hamburger from "./Hamburger";

const Wrapper = styled.div`
  position: sticky;
  top: 0%;
  left: 0%;
  display: flex;
  padding: 30px;
  background: white;
  justify-content: center;
`;

const A = styled.a`
  width: 100vw;
  text-align: center;
  font: normal normal normal 22px/1.41em cormorantgaramond-light,
    cormorantgaramond, "cormorant garamond", serif;
  font-size: 20px;
  padding-left: 25px;
  line-height: 1;
  letter-spacing: normal;
`;  

const TopNavMobile: NextPage = () => (
  <Wrapper>
    <A href='/'>Harshit Verma</A>
    <Hamburger onClick={() => console.log("xx")} />
  </Wrapper>
);

export default TopNavMobile;
