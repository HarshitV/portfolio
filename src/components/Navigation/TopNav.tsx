import type { NextPage } from 'next';
import TopNavDesktop from './TopNavDesktop';
import TopNavMobile from './TopNavMobile';

const TopNav: NextPage = () => (
  <>
    <TopNavDesktop />
    <TopNavMobile />
  </>
);
export default TopNav;
