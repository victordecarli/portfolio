import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Element } from 'react-scroll';

const Container = styled.div`
  position: relative;
  color: #252525;
`;

const ContactContainer = styled(Element)`
  max-width: 1190px;
  display: flex;
  min-height: 100vh;
  height: 100%;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media screen and (max-width: 735px) {
    padding-top: 0;
    justify-content: center;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    background-color: #6814a5;
    border-radius: 0 0 0 260px;
    width: 320px;
    height: 110%;
    z-index: -2;

    @media screen and (max-width: 1130px) {
      width: 280px;
    }
    @media screen and (max-width: 980px) {
      display: none;
    }
  }
`;

const QuestionLogo = styled.svg`
  position: relative;
  right: 17px;
  bottom: 20px;
  height: 320px;
  @media screen and (max-width: 735px) {
    display: none;
  }
`;

const Content = styled.div`
  display: block;
  padding-top: 2em;
  padding-bottom: 2em;
`;

const SubTitle = styled.p`
  font-family: 'Montserrat alternates';
  font-size: 16px;
  font-weight: 600;
  color: #8a2be2;
`;

const Title = styled.h3`
  font-size: 5em;
  font-weight: 900;
  max-width: 350px;
  line-height: 1;
  margin: 0;
  b {
    font-weight: 900;
    color: #6814a5;
  }

  @media screen and (max-width: 1024px) {
    font-size: 3em;
    max-width: 300px;
  }

  @media screen and (max-width: 855px) {
    font-size: 2.6em;
    max-width: 250px;
  }

  @media screen and (max-width: 575px) {
    font-size: 3em;
  }
`;

const Desc = styled.p`
  max-width: 420px;
  margin-top: 2em;

  @media screen and (max-width: 575px) {
    max-width: 260px;
  }
`;

const SvgElementMobile = styled.svg`
  display: none;
  position: relative;
  top: 0;
  width: 100%;

  @media screen and (max-width: 735px) {
    display: block;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  padding-top: 1em;

  @media screen and (max-width: 280px) {
    flex-flow: row wrap;
    gap: 12px;
  }
`;

const SvgIcon = styled.svg`
  height: 20px;
`;

const Email = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  height: 50px;
  font-family: 'Montserrat';
  font-size: 1.2em;
  padding: 0.5em;
  background: #8a2be2;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 800;
  margin-right: 2em;
  transition: all 0.4s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-radius: 10px;
    box-shadow: 3px 3px 0 #c6a0ff;
    transform: translateY(-4px);
    letter-spacing: 0.5px;
  }

  @media screen and (max-width: 855px) {
    font-size: 1em;
    width: 100px;
  }
`;

const Whatsapp = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: auto;
  height: 50px;
  font-family: 'Montserrat';
  font-size: 1.2em;
  padding: 0.5em;
  border: 2px solid #8a2be2;
  border-radius: 5px;
  color: #8a2be2;
  font-weight: 800;
  transition: all 0.4s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-radius: 10px;
    box-shadow: 3px 3px 0 #c6a0ff;
    transform: translateY(-4px);
    letter-spacing: 0.5px;
  }

  @media screen and (max-width: 855px) {
    font-size: 1em;
    width: 130px;
  }
`;

function Contact() {
  const email = 'vonorvictor@gmail.com';
  const phoneNumber = '(69)992326914';

  return (
    <Container>
      <ContactContainer name="contato">
        <SvgElementMobile
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          id="Camada_1"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 432 379.4"
        >
          <path
            d="M0 0h432v224a117 117 0 0 1-117 117H117A117 117 0 0 1 0 224V0z"
            fill="#252525"
          />
          <path
            d="M149.5 168.6a97.5 97.5 0 0 1 134.3 141.3l-67.6 65.5c-1.1 1-3 1-3.9-.1l-65.8-67.9a97.1 97.1 0 0 1-27.5-69.2 95.8 95.8 0 0 1 30.5-69.6z"
            fill="#fff"
            stroke="#252525"
            strokeWidth={7}
          />
          <path d="M216 189.7a44.9 44.9 0 0 0 0 89.6h2.6v15.8c25.6-12.3 42.1-36.9 42.1-60.6.1-24.7-20-44.8-44.7-44.8zm5.3 76.4h-10.5v-10.5h10.5v10.5zm0-18.4h-10.5c0-17.2 15.8-15.8 15.8-26.3a10.5 10.5 0 1 0-21 0H195c0-11.7 9.4-21.1 21.1-21.1s21.1 9.4 21.1 21.1c-.1 13.1-15.9 14.4-15.9 26.3z" />
        </SvgElementMobile>
        <Content>
          <SubTitle>Disponível para trabalho</SubTitle>
          <Title>
            Vamos <b>trabalhar</b> juntos
          </Title>
          <Desc>
            Você pode entrar em contato comigo pelo <b>WhatsApp</b> ou entrar em
            contato pelo <b>e-mail.</b>{' '}
          </Desc>
          <Buttons>
            <Email
              href={`mailto:${email}?subject=Olá&body=preciso criar um projeto`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
              <SvgIcon
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 31 22"
              >
                <path
                  fill="#FFF"
                  d="M31 19.2V2.8C31 1.2 29.8 0 28.3 0H2.7A2.7 2.7 0 0 0 0 2.8v16.5C0 20.8 1.2 22 2.7 22h25.5c1.6 0 2.8-1.2 2.8-2.8zM28.6 2.5c.6.6.3 1.2-.1 1.5l-7.4 6.8 7.1 7.4c.2.3.4.7.1.9-.2.3-.8.3-1 .1l-8-6.8-3.9 3.6-3.9-3.6-8 6.8c-.2.2-.8.2-1-.1-.3-.3-.1-.7.1-.9l7.1-7.4-7.3-6.7c-.3-.3-.6-.9 0-1.6s1.2-.3 1.7.1l11.4 9.2 11.4-9.2c.5-.4 1.1-.7 1.7-.1z"
                />
              </SvgIcon>
            </Email>
            <Whatsapp
              href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá, Preciso criar um projeto`}
            >
              Whatsapp
              <SvgIcon
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                id="Camada_1"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 20.3 20.3"
              >
                <defs>
                  <path id="SVGID_1_" d="M0 0h20.3v20.3H0z" />
                </defs>
                <clipPath id="SVGID_00000015344236525768535230000013944870577918518167_">
                  <use xlinkHref="#SVGID_1_" />
                </clipPath>
                <g>
                  <path
                    d="M.4 10c0 1.7.4 3.4 1.3 4.8l-1.4 5 5.2-1.3A9.7 9.7 0 0 0 17.1 3.1 9.9 9.9 0 0 0 .4 10"
                    fill="#8A2BE2"
                  />
                  <path
                    d="M.1 10c0 1.8.5 3.5 1.3 5L0 20.2l5.4-1.4A10 10 0 0 0 20.3 10 10 10 0 0 0 10.2 0 10 10 0 0 0 .1 10zm3.2 4.8-.2-.3a8.7 8.7 0 0 1-1.3-4.4c0-4.6 3.8-8.3 8.4-8.3a8.3 8.3 0 0 1 8.4 8.3c0 4.6-3.8 8.3-8.4 8.3-1.5 0-3-.4-4.3-1.2l-.3-.2-3.2.8.9-3z"
                    fill="#8A2BE2"
                  />
                  <path
                    d="M7.7 5.8c-.2-.4-.4-.4-.6-.4h-.5l-.7.3c-.2.3-.8.9-.8 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-2.9c-.1-.3 0-.5.1-.6l.4-.4.3-.4c.1-.2 0-.3 0-.4l-.8-2z"
                    fill="#fff"
                  />
                </g>
              </SvgIcon>
            </Whatsapp>
          </Buttons>
        </Content>

        <QuestionLogo
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 375.6 448.8"
        >
          <path
            fill="#252525"
            d="m192 445.9 126.9-123c75.4-73.1 75.8-194.3.3-268.9-71.4-70.3-186.9-72.2-259.7-4.2C20.4 86.1.6 135.1 0 184.3c-.6 48 17 96.5 53.2 133.8l123.7 127.5c4 4.2 11 4.3 15.1.3z"
          />
          <path
            fill="#FAFAFF"
            d="M187.8 105.7C132.2 105.7 87 150.9 87 206.6s45.2 100.9 100.8 100.9h5.9v35.6c57.6-27.8 94.9-83.1 94.9-136.5 0-55.7-45.2-100.9-100.8-100.9zm11.9 172.1H176v-23.7h23.7v23.7zm0-41.5H176c0-38.6 35.6-35.6 35.6-59.4 0-13.1-10.7-23.7-23.7-23.7s-23.7 10.7-23.7 23.7h-23.7c0-26.2 21.2-47.5 47.4-47.5s47.4 21.2 47.4 47.5c-.1 29.7-35.6 32.7-35.6 59.4z"
          />
        </QuestionLogo>
      </ContactContainer>
    </Container>
  );
}

export default Contact;
