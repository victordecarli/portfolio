import styled from 'styled-components';
import LinkedinIcon from './svgs/linkedinIcon';
import InstagramIcon from './svgs/instagram';
import WhatsappIcon from './svgs/whatsappIcon';
import GithubIcon from './svgs/githubIcon';

const Background = styled.div`
  background-color: #0c1d1a;

  width: 100%;
  padding-bottom: 2em;
`;

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  height: 100%;
  color: #fff;
  max-width: 1400px;
  padding: 0 1em;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Title = styled.h3`
  font-family: 'Montserrat alternates';
  color: #61f2aa;
  font-size: 2.5em;
  font-weight: 800;
  line-height: 1;
  align-self: flex-start;
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
`;

const FooterBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #182422;
  padding: 1em;
  margin-top: 2em;
  border-radius: 10px;

  @media screen and (max-width: 520px) {
    row-gap: 15px;
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
    text-align: left;
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
