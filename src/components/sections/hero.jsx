import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Element } from 'react-scroll';
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from 'framer-motion';
import EmailButton from '../emailButton';

import GithubIcon from '../svgs/githubIcon';
import InstagramIcon from '../svgs/instagram';
import LinkedinIcon from '../svgs/linkedinIcon';
import WhatsappIcon from '../svgs/whatsappIcon';
import ResumeButton from '../resumeButton';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Main = styled.main`
  margin: auto;
  height: 100%;
`;

const Container = styled(Element)`
  display: flex;
  max-width: 1190px;
  flex-direction: row;
  min-height: 100vh;
  height: 100%;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  padding-bottom: 6em;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    justify-content: center;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    background-color: #61f2aa;
    width: 320px;
    height: 115%;
    z-index: -2;

    @media screen and (max-width: 1130px) {
      width: 280px;
    }
    @media screen and (max-width: 980px) {
      display: none;
    }
  }
`;

const ReactLogo = styled.svg`
  position: absolute;
  right: 180px;
  width: 280px;

  @media screen and (max-width: 1130px) {
    width: 200px;
  }

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

const SubTitle = styled(motion.h4)`
  font-family: 'Montserrat Alternates';
  font-size: 1.2em;
  border-radius: 10px;
  margin-top: 5em;
  color: #0c1d1a;
  text-align: left;

  b {
    font-weight: 800;
  }

  @media screen and (max-width: 370px) {
    font-size: 1em;
  }
`;

const TitleContent = styled.div`
  position: relative;
`;

const Title = styled(motion.h2)`
  font-family: 'Montserrat Alternates';
  font-size: 6em;
  max-width: 200px;
  line-height: 0.9;
  font-weight: 900;
  color: #0c1d1a;
  margin: 0;

  @media screen and (max-width: 590px) {
    font-size: 4.5em;
  }
  @media screen and (max-width: 480px) {
    font-size: 3.5em;
  }
  @media screen and (max-width: 370px) {
    font-size: 3.2em;
  }
`;

const SocialIcons = styled.div`
  position: absolute;
  display: flex;
  top: 22%;
  left: 340px;
  gap: 20px;
  fill: #0c1d1a;

  @media screen and (max-width: 980px) {
    position: unset;
    margin-top: 2em;
  }
`;

const Desc = styled(motion.p)`
  color: #0c1d1a;
  font-family: 'Montserrat';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  max-width: 500px;
  margin-top: 1.5em;

  @media screen and (max-width: 480px) {
    max-width: 380px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 40px;

  @media screen and (max-width: 590px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

function Header() {
  return (
    <Main>
      <Container variants={container} name="inicio">
        <ReactLogo
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 304 300"
        >
          <path
            fill="#0C1D1A"
            d="M20 0h264c11 0 20 9 20 20v260c0 11-9 20-20 20H20c-11 0-20-9-20-20V20C0 9 9 0 20 0z"
          />
          <path
            fill="#FFF"
            d="M226.4 113.9c-2.5-.8-4.9-1.6-7.4-2.3.4-1.7.8-3.4 1.1-5.1 5.6-27.3 1.9-49.2-10.6-56.4-12.1-6.9-31.8.3-51.7 17.6-2 1.7-3.9 3.5-5.8 5.3-1.3-1.2-2.5-2.4-3.8-3.5-20.9-18.5-41.8-26.3-54.3-19-12 7-15.6 27.6-10.5 53.4.5 2.6 1.1 5.1 1.7 7.6-3 .8-5.8 1.7-8.5 2.7-24.5 8.5-40.1 21.8-40.1 35.7 0 14.3 16.8 28.6 42.2 37.3 2.1.7 4.1 1.4 6.2 1.9-.7 2.7-1.3 5.5-1.8 8.2-4.8 25.4-1.1 45.5 10.9 52.4 12.4 7.1 33.2-.2 53.5-17.9 1.6-1.4 3.2-2.9 4.8-4.4 2 2 4.1 3.8 6.2 5.7 19.6 16.9 39 23.7 51 16.7 12.4-7.2 16.4-28.8 11.2-55.1-.4-2.1-.9-4.1-1.4-6.2 1.5-.4 2.9-.9 4.3-1.3 26.5-8.8 43.7-22.9 43.7-37.4.2-13.9-15.9-27.3-40.9-35.9zm-5.7 63.9-3.9 1.2c-2.9-9.2-6.9-19-11.7-29.2 4.6-9.9 8.4-19.6 11.2-28.8 2.4.7 4.7 1.4 6.9 2.2 21.4 7.3 34.4 18.2 34.4 26.6 0 8.9-14 20.5-36.9 28zm-9.5 18.8c2.3 11.6 2.6 22.2 1.1 30.4-1.4 7.4-4.1 12.3-7.6 14.3-7.3 4.2-22.8-1.3-39.6-15.7-2-1.7-3.9-3.5-5.8-5.3 6.5-7.1 13-15.4 19.4-24.5 11.2-1 21.7-2.6 31.3-4.8.4 1.9.8 3.7 1.2 5.6zm-95.9 44c-7.1 2.5-12.8 2.6-16.2.6-7.3-4.2-10.3-20.4-6.2-42.1.5-2.6 1.1-5.1 1.7-7.6 9.5 2.1 19.9 3.6 31.1 4.5 6.4 9 13.1 17.2 19.8 24.4-1.4 1.4-2.9 2.7-4.4 4-9 7.8-17.9 13.4-25.8 16.2zm-33.4-62.8C70.6 174 61.3 169 55 163.5c-5.7-4.9-8.6-9.8-8.6-13.7 0-8.4 12.5-19.1 33.5-26.4 2.5-.9 5.2-1.7 8-2.5 2.9 9.4 6.7 19.2 11.3 29.1-4.6 10.1-8.5 20-11.4 29.5-2.1-.5-4-1.1-5.9-1.7zm11.2-75.9c-4.3-22.1-1.5-38.8 5.8-43 7.7-4.5 24.8 1.9 42.8 17.9 1.2 1 2.3 2.1 3.5 3.2-6.7 7.2-13.3 15.4-19.7 24.3-10.9 1-21.3 2.6-30.8 4.8-.6-2.4-1.1-4.8-1.6-7.2zm99.6 24.6c-2.3-3.9-4.6-7.7-7-11.5 7.4.9 14.4 2.2 21.1 3.7-2 6.4-4.5 13-7.4 19.8-2.1-4.1-4.4-8.1-6.7-12zM152.1 87c4.6 4.9 9.1 10.4 13.6 16.4-9.1-.4-18.2-.4-27.3 0 4.5-5.9 9.1-11.4 13.7-16.4zm-40.9 39.6c-2.3 3.9-4.4 7.9-6.5 11.9-2.9-6.8-5.3-13.5-7.3-19.9 6.6-1.5 13.6-2.7 20.9-3.6-2.5 3.8-4.8 7.6-7.1 11.6zm7.3 58.8c-7.6-.8-14.7-2-21.3-3.4 2-6.6 4.6-13.4 7.5-20.3 2.1 4 4.3 8 6.5 11.9 2.4 4 4.8 7.9 7.3 11.8zm33.9 27.9c-4.7-5-9.3-10.6-13.9-16.6 4.4.2 8.9.3 13.5.3 4.7 0 9.4-.1 13.9-.3-4.5 6.1-9 11.6-13.5 16.6zm47.1-52c3.1 7 5.7 13.8 7.8 20.3-6.7 1.5-13.9 2.8-21.5 3.7 2.4-3.9 4.8-7.8 7.1-11.7l6.6-12.3zm-15.3 7.3c-3.5 6.1-7.2 12-11.1 17.8-7 .5-14.1.7-21.2.7-7.2 0-14.2-.2-20.9-.7-4-5.8-7.8-11.8-11.3-17.9-3.5-6.1-6.8-12.3-9.9-18.6 3-6.3 6.3-12.5 9.8-18.6a253 253 0 0 1 11.2-17.8c6.9-.5 13.9-.8 21-.8 7.2 0 14.2.3 21.1.8 3.9 5.8 7.6 11.7 11.1 17.7 3.5 6.1 6.8 12.2 10 18.5-2.9 6.5-6.2 12.8-9.8 18.9zm20.4-110c7.7 4.4 10.7 22.4 5.9 45.9-.3 1.5-.7 3-1 4.6-9.6-2.2-20-3.8-30.9-4.9-6.3-9-12.9-17.2-19.5-24.3 1.7-1.7 3.5-3.3 5.3-4.9 17-14.7 32.9-20.5 40.2-16.4zM152 129.2c11.4 0 20.6 9.2 20.6 20.6s-9.2 20.6-20.6 20.6-20.6-9.2-20.6-20.6 9.2-20.6 20.6-20.6z"
          />
        </ReactLogo>
        <div>
          <SubTitle variants={item}>
            Oi, eu sou o <b>Victor</b>
          </SubTitle>
          <TitleContent>
            <Title variants={item}>React Developer</Title>{' '}
            <SocialIcons>
              <LinkedinIcon />
              <InstagramIcon />
              <WhatsappIcon />
              <GithubIcon />
            </SocialIcons>
          </TitleContent>
          <Desc variants={item}>
            <b>Desenvolvedor Júnior React</b> com conhecimento em tecnologias
            como <b>Vite,</b> <b>Next.js,</b> <b>Node.js,</b> <b>Strapi,</b>{' '}
            <b>GraphQL,</b> <b>Styled Components</b> e <b>Tailwind.</b> Além
            disso, possuo conhecimentos em UX/UI.
          </Desc>

          <ButtonsContainer>
            <EmailButton variants={item} />
            <ResumeButton />
          </ButtonsContainer>
        </div>
      </Container>
    </Main>
  );
}

export default Header;
