/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { Element } from 'react-scroll';
import ProjectMap from './projectMap';

const ProjectInner = styled.div`
  background-color: #0c1d1a;
  padding-top: 2em;
`;

const Header = styled(Element)`
  color: #0c1d1a;
  max-width: 1190px;
  min-height: 100dvh;
  height: 100%;
  margin: 0 auto;
  color: #0c1d1a;

  @media screen and (max-width: 576px) {
    max-width: 500px;
  }
`;

const Title = styled.h2`
  font-family: 'Montserrat';
  font-size: 4.5em;
  margin-bottom: 0;
  font-style: normal;
  font-weight: 900;
  color: #fff;

  @media screen and (max-width: 1190px) {
    padding-left: 10px;
  }
  @media screen and (max-width: 980px) {
    font-size: 4em;

    /* text-align: center; */
  }
  @media screen and (max-width: 350px) {
    font-size: 3.2em;
  }
`;

function Projects() {
  return (
    <ProjectInner>
      <Header name="projetos">
        <Title>Projetos</Title>
        {/* <TitleProjects /> */}
        <ProjectMap />
      </Header>
    </ProjectInner>
  );
}

export default Projects;
