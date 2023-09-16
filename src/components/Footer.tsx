import styled from 'styled-components';
import Text from './Text/Text';
import Image from 'next/image';

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

const Footer = () => (
  <>
    <Social>
      <Logo href='https://www.linkedin.com/in/harshit-verma-b27b1810a/'>
        <Image src='/Linkedin.webp' alt='LinkedIn' width={20} height={20} />
      </Logo>
      <Logo href='https://www.instagram.com/harshitv29/'>
        <Image src='/Instagram.webp' alt='Instagram' width={20} height={20} />
      </Logo>
      <Logo href='https://www.facebook.com/hvhvhv2012/'>
        <Image src='/Facebook.webp' alt='Facebook' width={20} height={20} />
      </Logo>
    </Social>
    <CopyRight text='©2022 by Harshit Verma.' />
  </>
);

export default Footer;
