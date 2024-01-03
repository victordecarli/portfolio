/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Element } from 'react-scroll';
import Perfil from '../../images/perfil.webp';
import PictureBackground from '../../assets/teste.svg';
import ResumeButton from '../resumeButton';

const Container = styled(Element)`
  position: relative;
  max-width: 1190px;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 6em;
  color: #000;
`;
const AboutContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    flex-direction: column-reverse;
  }
`;

const Title = styled.h2`
  position: relative;
  font-family: 'Montserrat';
  font-size: 4.5em;
  font-weight: 900;
  color: #0c1d1a;
  @media screen and (max-width: 410px) {
    font-size: 4em;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  &::after {
    content: url(${PictureBackground});
    position: absolute;
    z-index: -2;
    right: 2%;
    top: -15%;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

const Photo = styled.img`
  object-fit: contain;
  width: auto;
  height: 450px;
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    margin-top: 2em;
    height: 400px;
  }

  @media screen and (max-width: 645px) {
    max-width: 300px;
  }
`;

const AboutDesc = styled.p`
  max-width: 500px;
  font-size: 1em;
  line-height: 1.5;

  @media screen and (max-width: 1024px) {
    max-width: 600px;
  }
  @media screen and (max-width: 645px) {
    max-width: 300px;
  }
`;

function About() {
  return (
    <Container name="sobre">
      <AboutContainer>
        <Content>
          <Title>Sobre</Title>
          <AboutDesc>
            Olá! Sou o <b>Victor de Carli</b>, tenho <b>21 anos</b>, e venho
            dedicando os últimos <b>dois anos</b> ao estudo e prática intensiva
            de <b>programação.</b> Minha jornada começou com <b>cursos</b>, nos
            quais absorvi os conceitos de <b>HTML</b>, <b>CSS</b> e <b>JS.</b>
            <br />
            <br />A <b>evolução</b> do meu conhecimento foi marcada pela
            aprendizagem de <b>tecnologias avançadas</b>, incluindo <b>React</b>
            , <b>Next</b>, <b>Vite</b>, <b>Nodejs</b>, <b>Strapi</b>,
            <b> GraphQL</b>, <b>Typescript</b>. <b>Tailwind</b> e{' '}
            <b>Styled Componentes.</b> Além disso, possuo conhecimento em{' '}
            <b>UX/UI</b>, uma área que planejo explorar ainda mais no futuro.
            Meu próximo passo inclui aprofundar meu conhecimento em <b>Vue</b>,
            após dominar o <b>React.</b> Estou animado para seguir expandindo
            minhas habilidades e contribuir para projetos no universo da
            programação.
            <br />
            <br /> Para <b>saber mais</b>, clique no botão <b>Ver Currículo</b>{' '}
            para ver mais detalhes sobre mim!
          </AboutDesc>
          <ResumeButton />
        </Content>
        <Photo src={Perfil} width="auto" height="auto" />
      </AboutContainer>
    </Container>
  );
}

export default About;
