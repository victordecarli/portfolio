import styled from 'styled-components';
import LinkedinIcon from '@assets/svgs/components/linkedinIcon';
import InstagramIcon from '@assets/svgs/components/instagram';
import WhatsappIcon from '@assets/svgs/components/whatsappIcon';
import GithubIcon from '@assets/svgs/components/githubIcon';

const Background = styled.div`
  background-color: #252525;
  width: 100%;
  padding-bottom: 2em;
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
  fill: #fff;
  @media screen and (max-width: 900px) {
    background-position: center;
    margin-bottom: 0;
  }
`;

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  height: 100%;
  color: #fafaff;
  max-width: 1400px;
  padding: 0 1em;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Title = styled.h3`
  font-family: 'Montserrat alternates';
  color: #fafaff;
  font-size: 2.5em;
  font-weight: 800;
  line-height: 1;
  align-self: flex-start;

  @media screen and (max-width: 610px) {
    margin: 1em auto;
  }
`;

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-self: flex-start;
  justify-content: space-between;
  gap: 50px;

  @media screen and (max-width: 610px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 10px;
  align-items: flex-start;
`;

const FooterLink = styled.a`
  color: #fff;
  margin: 0;
  text-decoration: underline;
  @media screen and (max-width: 610px) {
    display: block;
    margin: auto;
    text-align: center;
  }
`;

const FooterBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #2d2d2e;
  padding: 1em;
  margin-top: 2em;
  border-radius: 10px;

  @media screen and (max-width: 520px) {
    row-gap: 15px;
    justify-content: center;
  }
`;

const FooterDesc = styled.p`
  max-width: 450px;
  margin: 0;
  font-size: 14px;
  text-align: right;

  @media screen and (max-width: 735px) {
    max-width: 320px;
  }

  @media screen and (max-width: 610px) {
    text-align: center;
  }
`;

const CreateBy = styled.p`
  font-size: 14px;
  align-self: flex-start;
  text-align: left;

  b {
    font-size: 14px;
    font-weight: 800;
  }
`;
const SocialIcons = styled.div`
  display: flex;
  gap: 30px;
  align-self: center;
  fill: #fff;
`;

function Footer() {
  return (
    <Background>
      <FooterSvg>
        <FooterSvgContent
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1185 248"
        >
          <path d="M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193c15 4.2 31.6 6.8 50.5 6.8zM1109 106.9c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm-738.5-49c13.5 0 24.5 11 24.5 24.5s-11 24.5-24.5 24.5-24.5-11-24.5-24.5 11-24.5 24.5-24.5zm-55.5-22c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11 4.9-11 11-11z" />
        </FooterSvgContent>
      </FooterSvg>
      <Container>
        <Title>Alguns links</Title>
        <Header>
          <FooterLinkContainer>
            <FooterLink href="#">Conheça minha empresa</FooterLink>
            <FooterLink href="#">Ver currículo</FooterLink>
          </FooterLinkContainer>
          <FooterDesc>
            Elaborado no <b>Figma</b> e implementado com{' '}
            <b>Visual Studio Code</b> por mim mesmo. Desenvolvido com{' '}
            <b>React.js</b> e <b>Styled Components.</b> A tipografia usada é
            <b> Montserrat.</b>
          </FooterDesc>
        </Header>
        <FooterBar>
          <CreateBy>
            © 2023 Criado por <b>Victor de Carli</b>
          </CreateBy>
          <SocialIcons>
            <LinkedinIcon />
            <InstagramIcon />
            <WhatsappIcon />
            <GithubIcon />
          </SocialIcons>
        </FooterBar>
      </Container>
    </Background>
  );
}

export default Footer;
