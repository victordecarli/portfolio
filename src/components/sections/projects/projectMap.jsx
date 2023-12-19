/* eslint-disable react/prop-types */
import styled from 'styled-components';
import projectData from './projectData';

const Project = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  margin: auto;
  gap: 45px;
  row-gap: 90px;
  padding: 5em 1em;

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, minmax(318px, 1fr));
  }
  @media screen and (max-width: 350px) {
    padding: 5em 0;
  }
`;

const ProjectContent = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5em;
  min-height: 300px;
  min-width: 320px;
  height: 100%;

  @media screen and (max-width: 350px) {
    width: 100%;
  }
`;

const ProjectSubTitle = styled.p`
  color: #7362f3;
  font-size: 13px;
  font-weight: 600;
`;

const ProjectTitle = styled.h4`
  color: #7362f3;
  font-size: 28px;
  font-weight: 800;
  margin: 0;
`;

const ProjectDesc = styled.p`
  font-size: 18px;
  max-width: 550px;
  color: #0c1d1a;
`;

const ProjectTechList = styled.div`
  display: inline-flex;
  gap: 20px;
`;

const ProjectTech = styled.p`
  font-size: 16px;
  color: #0c1d1a;
  line-height: 1;
  font-weight: bold;
`;

const ProjectButtons = styled.div`
  margin-top: 5px;
`;

const ProjectCta = styled.a`
  margin-left: 2em;
  stroke: #0c1d1a;
  transition: all 0.5s;
  stroke-dasharray: 0;

  &:hover {
    stroke-dasharray: 50px;
    stroke: #61f2aa;
  }
`;

const ProjectGithub = styled.a`
  stroke: #0c1d1a;
  transition: all 0.5s;
  stroke-dasharray: 0;
  &:hover {
    stroke-dasharray: 70px;
    stroke: #61f2aa;
  }
`;

const ProjectStatusBase = styled.h3`
  position: absolute;
  right: 0;
  bottom: -25px;
  margin: auto;
  text-align: center;
  color: #0c1d1a;
  padding: 8px;
  border-radius: 5px 0 10px 5px;
`;

const ProjectStatusCompleted = styled(ProjectStatusBase)`
  background-color: #61f2aa;
`;

const ProjectStatusInProgress = styled(ProjectStatusBase)`
  background-color: #f2de61;
`;

const ProjectStatusUpcoming = styled(ProjectStatusBase)`
  background-color: #f27161;
`;

const getStatus = (progresso) => {
  if (progresso === 100) {
    return <ProjectStatusCompleted>Projeto concluído</ProjectStatusCompleted>;
  }
  if (progresso > 0) {
    return (
      <ProjectStatusInProgress>Em desenvolvimento</ProjectStatusInProgress>
    );
  }
  return <ProjectStatusUpcoming>Em breve</ProjectStatusUpcoming>;
};

function ProjectMap() {
  return (
    <Project>
      {projectData.map((project) => (
        <ProjectContent key={project.id}>
          <ProjectSubTitle>{project.subTitle}</ProjectSubTitle>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDesc>{project.desc}</ProjectDesc>
          <ProjectTechList>
            {project.techs.map((tech, id) => (
              <ProjectTech key={id}>{tech}</ProjectTech>
            ))}
          </ProjectTechList>
          <ProjectButtons>
            <ProjectGithub href="#">{project.github}</ProjectGithub>
            <ProjectCta href="https://orcamentotexe.surge.sh/">
              {project.cta}
            </ProjectCta>
          </ProjectButtons>
          {getStatus(project.progresso)}
        </ProjectContent>
      ))}
    </Project>
  );
}

export default ProjectMap;
