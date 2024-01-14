import styled from 'styled-components';
import Techs from './techsData';

const Container = styled.header`
  padding-bottom: 5em;
  min-height: 100dvh;
  height: 100%;
  background-color: #222222;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  margin: auto;
  padding: 1em;

  @media screen and (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-family: 'Montserrat alternates';
  color: #fafafa;
  font-size: 4em;
  margin: 0;

  @media screen and (max-width: 410px) {
    font-size: 2.8em;
  }
`;

const SubTitle = styled.p`
  margin: 0 1em;
  margin-bottom: 3em;
  font-family: 'Montserrat';
  font-size: 16px;
  color: #fafaff;
`;

const TitleTech = styled.h3`
  font-size: 1.5em;
  color: #fafaff;
`;

const TechWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1190px;
  gap: 45px;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

const TechContent = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding-left: 1em;
  width: 202px;
  height: 64px;
  text-align: left;
  border-radius: 18px;
  background-color: #fafaff;
  color: #252525;
`;

const SvgContent = styled.div`
  display: flex;
  align-items: center;
`;

const TechName = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

function Languages() {
  return (
    <Container>
      <Content>
        <Title>Tecnologias</Title>
        <SubTitle>em que possuo conhecimento</SubTitle>
        {Techs.map((language) => (
          <div key={language.id}>
            <TitleTech>{language.frontEnd?.title}</TitleTech>
            <TechWrapper>
              {language.frontEnd?.technologies?.map((tech) => (
                <TechContent>
                  <SvgContent>{tech.svg}</SvgContent>
                  <TechName>{tech.name}</TechName>
                </TechContent>
              ))}
            </TechWrapper>
            <TitleTech>{language.backEnd?.title}</TitleTech>
            <TechWrapper>
              {language.backEnd?.technologies?.map((tech) => (
                <TechContent>
                  <SvgContent>{tech.svg}</SvgContent>
                  <TechName>{tech.name}</TechName>
                </TechContent>
              ))}
            </TechWrapper>
            <TitleTech>{language.ControleVersao?.title}</TitleTech>
            <TechWrapper>
              {language.ControleVersao?.technologies?.map((tech) => (
                <TechContent>
                  <SvgContent>{tech.svg}</SvgContent>
                  <TechName>{tech.name}</TechName>
                </TechContent>
              ))}
            </TechWrapper>
            <TitleTech>{language.Estrutura?.title}</TitleTech>
            <TechWrapper>
              {language.Estrutura?.technologies?.map((tech) => (
                <TechContent>
                  <SvgContent>{tech.svg}</SvgContent>
                  <TechName>{tech.name}</TechName>
                </TechContent>
              ))}
            </TechWrapper>
          </div>
        ))}
      </Content>
    </Container>
  );
}

export default Languages;
