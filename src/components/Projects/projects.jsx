/* eslint-disable import/no-unresolved */
import { Element } from 'react-scroll'
import styled from 'styled-components'
import ProjectMap from './projectMap'

const ProjectInner = styled.div`
  background-color: #252525;
  padding-top: 2em;
`

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
`

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
`

const FooterSvg = styled.div`
  width: 100%;
  display: flex;
  background-color: #252525;
  justify-content: center;
  margin-top: 0;
`

const FooterSvgContent = styled.svg`
  width: 100%;
  height: auto;
  transform: rotate(180deg);
  @media screen and (max-width: 900px) {
    background-position: center;
    margin-bottom: 0;
  }
`

function Projects() {
  return (
    <ProjectInner>
      <Header name="projetos">
        <Title>Projetos</Title>
        <ProjectMap />
      </Header>
      <FooterSvg>
        <FooterSvgContent
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1185 248"
        >
          <path
            fill="#222222"
            d="M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193c15 4.2 31.6 6.8 50.5 6.8zM1109 106.9c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm-738.5-49c13.5 0 24.5 11 24.5 24.5s-11 24.5-24.5 24.5-24.5-11-24.5-24.5 11-24.5 24.5-24.5zm-55.5-22c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11 4.9-11 11-11z"
          />
        </FooterSvgContent>
      </FooterSvg>
    </ProjectInner>
  )
}

export default Projects
