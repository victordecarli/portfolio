/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Element } from 'react-scroll';
import Perfil from '../../images/perfil.webp';
import ResumeButton from '../resumeButton';

const Container = styled(Element)`
  position: relative;
  max-width: 1190px;
  height: 100%;
  margin: 0 auto;
  padding: 1em;
  padding-bottom: 6em;
  color: #000;
`;

const FooterSvg = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
  margin-top: 0;
`;

const FooterSvgContent = styled.svg`
  width: 100%;
  height: auto;
  fill: #222222;
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
  @media screen and (max-width: 426px) {
    align-items: center;
    text-align: center;
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

  @media screen and (max-width: 426px) {
    align-items: center;
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
    <>
      <FooterSvg>
        <FooterSvgContent
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1185 248"
        >
          <path d="M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193c15 4.2 31.6 6.8 50.5 6.8zM1109 106.9c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm-738.5-49c13.5 0 24.5 11 24.5 24.5s-11 24.5-24.5 24.5-24.5-11-24.5-24.5 11-24.5 24.5-24.5zm-55.5-22c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11 4.9-11 11-11z" />
        </FooterSvgContent>
      </FooterSvg>
      <Container name="sobre">
        <AboutContainer>
          <Content>
            <Title>Sobre</Title>
            <AboutDesc>
              Olá! Sou o <b>Victor de Carli</b>, tenho <b>21 anos</b>, e venho
              dedicando os últimos <b>dois anos</b> ao estudo e prática
              intensiva de <b>programação.</b> Minha jornada começou com{' '}
              <b>cursos</b>, nos quais absorvi os conceitos de <b>HTML</b>,{' '}
              <b>CSS</b> e <b>JS.</b>
              <br />
              <br />A <b>evolução</b> do meu conhecimento foi marcada pela
              aprendizagem de <b>tecnologias avançadas</b>, incluindo{' '}
              <b>React</b>, <b>Next</b>, <b>Vite</b>, <b>Nodejs</b>,{' '}
              <b>Strapi</b>,<b> GraphQL</b>, <b>Typescript</b>. <b>Tailwind</b>{' '}
              e <b>Styled Componentes.</b> Além disso, possuo conhecimento em{' '}
              <b>UX/UI</b>, uma área que planejo explorar ainda mais no futuro.
              Meu próximo passo inclui aprofundar meu conhecimento em <b>Vue</b>
              , após dominar o <b>React.</b> Estou animado para seguir
              expandindo minhas habilidades e contribuir para projetos no
              universo da programação.
              <br />
              <br /> Para <b>saber mais</b>, clique no botão{' '}
              <b>Ver Currículo</b> para ver mais detalhes sobre mim!
            </AboutDesc>
            <ResumeButton />
          </Content>
          <Photo src={Perfil} width="auto" height="auto" />
        </AboutContainer>
      </Container>
    </>
  );
}

export default About;
