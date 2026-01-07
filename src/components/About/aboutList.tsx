import Perfil from '@/assets/images/perfil.webp'

// shadcn components

// estilos / styleds
import {
  AboutContainer,
  AboutDesc,
  Container,
  Content,
  Photo,
  Title,
} from '../../../styles/about-styles'

export function AboutList() {
  return (

    <Container name="sobre">
      <AboutContainer>
        <Content>
          <Title>Sobre</Title>
          <AboutDesc>
            Olá! Sou o
            {' '}
            <b>Victor de Carli</b>
            , tenho
            <b>21 anos</b>
            , e venho
            dedicando os últimos
            <b>dois anos</b>
            {' '}
            ao estudo e prática
            intensiva de
            <b>programação.</b>
            {' '}
            Minha jornada começou com
            {' '}
            <b>cursos</b>
            , nos quais absorvi os conceitos de
            <b>HTML</b>
            ,
            {' '}
            <b>CSS</b>
            {' '}
            e
            <b>JS.</b>
            <br />
            <br />
            A
            <b>evolução</b>
            {' '}
            do meu conhecimento foi marcada pela
            aprendizagem de
            <b>tecnologias avançadas</b>
            , incluindo
            {' '}
            <b>React</b>
            ,
            <b>Next</b>
            ,
            <b>Vite</b>
            ,
            <b>Nodejs</b>
            ,
            {' '}
            <b>Strapi</b>
            ,
            <b> GraphQL</b>
            ,
            <b>Typescript</b>
            .
            <b>Tailwind</b>
            {' '}
            e
            {' '}
            <b>Styled Componentes.</b>
            {' '}
            Além disso, possuo conhecimento em
            {' '}
            <b>UX/UI</b>
            , uma área que planejo explorar ainda mais no futuro.
            Meu próximo passo inclui aprofundar meu conhecimento em
            <b>Vue</b>
            , após dominar o
            {' '}
            <b>React.</b>
            {' '}
            Estou animado para seguir
            expandindo minhas habilidades e contribuir para projetos no
            universo da programação.
            <br />
            <br />
            {' '}
            Para
            <b>saber mais</b>
            , clique no botão
            {' '}
            <b>Ver Currículo</b>
            {' '}
            para ver mais detalhes sobre mim!
          </AboutDesc>
        </Content>
        <Photo src={Perfil} width="auto" height="auto" />
      </AboutContainer>
    </Container>
  )
}
