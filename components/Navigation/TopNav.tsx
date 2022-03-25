import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import TopNavDesktop from "./TopNavDesktop";
import TopNavMobile from "./TopNavMobile";

const useMediaQuery = () => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    media.addEventListener("change", (e) => updateTarget(e));

    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener("change", (e) => updateTarget(e));
  }, []);

  return targetReached;
};

const TopNav: NextPage = () => {
  const isDesktop = useMediaQuery();
  return isDesktop ? (
    <TopNavDesktop />
  ) : (
    <TopNavMobile />
  );
};

export default TopNav;
