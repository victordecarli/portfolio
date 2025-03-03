import styled from 'styled-components';
import { Element } from 'react-scroll';

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

export {
  Container,
  FooterSvg,
  FooterSvgContent,
  AboutContainer,
  Title,
  Content,
  Photo,
  AboutDesc,
};
