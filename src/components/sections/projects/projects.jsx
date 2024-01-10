/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { Element } from 'react-scroll';
import ProjectMap from './projectMap';

const ProjectInner = styled.div`
  background-color: #252525;
  padding-top: 2em;
  padding-bottom: 5em;
`;

const Header = styled(Element)`
  max-width: 1190px;
  min-height: 100dvh;
  height: 100%;
  margin: 0 auto;
  padding: 1em;
  padding-bottom: 5em;
  color: #252525;

  @media screen and (max-width: 576px) {
    padding: 0;
    max-width: 500px;
  }
`;

const Title = styled.h2`
  font-family: 'Montserrat';
  font-size: 4.5em;
  font-style: normal;
  font-weight: 900;
  color: #fff;

  @media screen and (max-width: 1190px) {
    padding-left: 10px;
  }
  @media screen and (max-width: 900px) {
    font-size: 4em;
    text-align: center;
    margin: 0;
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
        <ProjectMap />
      </Header>
    </ProjectInner>
  );
}

export default Projects;
