import TopNavDesktop from "./TopNavDesktop";
import TopNavMobile from "./TopNavMobile";

import type { NextPage } from "next";

const TopNav: NextPage = () => (
    <>
        <TopNavDesktop />
        <TopNavMobile />
    </>
);
export default TopNav;
