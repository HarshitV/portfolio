import type { NextPage } from 'next';
import TopNav from 'components/Navigation/TopNav';
import styled from 'styled-components';
import WorkTiles from 'components/work/WorkTiles';
import workTilesData from 'data/work';
import { breakpoints } from 'styles/constants';
import { PageContent } from 'styles/layouts';
import Footer from 'components/Footer';
import Head from 'next/head';

const WorkHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
`;

const WorkProjects = styled.div`
  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin: 100px 4%;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Harshit Verma | Work</title>
      </Head>
      <PageContent>
        <WorkHeading>
          <h1>Projects</h1>
          <h2>Showcase of Work</h2>
        </WorkHeading>
        <WorkProjects>
          {workTilesData.map((workTile, index) => {
            return <WorkTiles key={`work-${index}`} {...workTile} />;
          })}
        </WorkProjects>
        <Footer />
      </PageContent>
    </>
  );
};

export default Home;
