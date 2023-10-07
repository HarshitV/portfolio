import styled from 'styled-components';
import Text from './Text/Text';
import { Image } from 'styles/layouts';

const Footer = () => (
  <>
    <Social>
      <Logo href='https://www.linkedin.com/in/hvermah/'>
        <Image src='/Linkedin.webp' alt='LinkedIn' width='20px' height='20px' />
      </Logo>
      <Logo href='https://www.instagram.com/harshitv29/'>
        <Image
          src='/Instagram.webp'
          alt='Instagram'
          width='20px'
          height='20px'
        />
      </Logo>
      <Logo href='https://www.github.com/harshitv'>
        <Image src='/github.png' alt='Github' width='19px' height='19px' />
      </Logo>
    </Social>
    <CopyRight text='©2022 by Harshit Verma.' />
  </>
);

export default Footer;

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Logo = styled.a`
  padding-left: 4px;
  padding-right: 4px;
`;

const CopyRight = styled(Text)`
  margin-top: 0;
  display: flex;
  justify-content: center;
`;
