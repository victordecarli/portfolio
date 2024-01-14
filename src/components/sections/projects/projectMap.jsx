/* eslint-disable react/prop-types */
import styled from 'styled-components';
import projectData from './projectData';

const Project = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  flex-flow: column wrap;
  margin: auto;
  gap: 45px;
  row-gap: 90px;
  padding: 3em 0;

  @media screen and (max-width: 1190px) {
    padding: 0;
  }

  @media screen and (max-width: 900px) {
    padding-top: 2em;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, minmax(318px, 1fr));
  }
  @media screen and (max-width: 350px) {
    padding: 5em 0;
  }
`;

const ProjectContent = styled.div`
  display: grid;
  align-content: center;
  position: relative;
  flex-direction: column;
  border-radius: 10px;
  color: #fff;
  min-width: 320px;
  height: 100%;

  @media screen and (max-width: 900px) {
    justify-items: center;
  }

  @media screen and (max-width: 350px) {
    width: 100%;
  }
  @media screen and (max-width: 350px) {
  }
`;

const ProjectImage = styled.img`
  width: 550px;
  object-fit: contain;
  height: auto;
  border-radius: 10px;

  @media screen and (max-width: 1190px) {
    width: 450px;
    transform: translateY(50px);
  }
  @media screen and (max-width: 485px) {
    width: 380px;
  }
  @media screen and (max-width: 395px) {
    width: 300px;
  }
`;

const ProjectTitle = styled.h4`
  font-size: 28px;
  font-weight: 800;
  margin: 0;

  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;

const ProjectDesc = styled.p`
  font-size: 16px;
  max-width: 550px;
  @media screen and (max-width: 900px) {
    text-align: center;
    font-size: 14px;
    padding: 10px;
  }
`;

const ProjectButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  gap: 30px;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }

  @media screen and (max-width: 410px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`;

const ProjectCta = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 180px;
  height: 55px;
  font-family: 'Montserrat alternates';
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
  background-color: #8a2be2;
  stroke: #fff;
  transition: all 0.5s;

  &:hover {
    box-shadow: 3px 3px 0 #c6a0ff;
    transform: translateY(-4px);
    letter-spacing: 0.5px;
  }
`;

const ProjectGithub = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 5px;
  width: 180px;
  height: 55px;
  color: #d5b3ff;
  font-family: 'Montserrat alternates';
  font-size: 16px;
  border: 2px solid #d5b3ff;
  border-radius: 5px;
  transition: all 0.5s;
  stroke: #d5b3ff;

  &:hover {
    box-shadow: 3px 3px 0 #c6a0ff;
    transform: translateY(-4px);
    letter-spacing: 0.5px;
  }
`;

const ProjectStatusBase = styled.h3`
  display: none;
  position: absolute;
  right: 0;
  margin: auto;
  padding: 6px;
  font-size: 14px;
  text-align: center;
  color: #0c1d1a;
  border-radius: 5px;
`;

const ProjectStatusCompleted = styled(ProjectStatusBase)`
  background-color: #7dffab;
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
        <>
          <ProjectImage
            alt={`Projeto ${project.title}`}
            width={800}
            height={500}
            src={project.image}
          />
          <ProjectContent key={project.id}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDesc>{project.desc}</ProjectDesc>
            <ProjectButtons>
              <ProjectCta href="https://orcamentotexe.surge.sh/">
                Visitar projeto {project.cta}
              </ProjectCta>
              <ProjectGithub href="#">
                Código fonte{project.github}
              </ProjectGithub>
            </ProjectButtons>
            {getStatus(project.progresso)}
          </ProjectContent>
        </>
      ))}
    </Project>
  );
}

export default ProjectMap;
