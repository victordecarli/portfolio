import CtaSvg from '@assets/svgs/components/cta';
import GithubSvg from '@assets/svgs/components/github';
import ProjetoImg from '@/assets/images/projeto.jpg';

const Data = [
  {
    id: 1,
    title: 'Calculadora de orçamento',
    desc: 'Um aplicativo web que permite fazer orçamentos. Veja o valor total do orçamento com desconto, lucro, simulação de taxas de pagamentos débito e crédito. Cadastre seus clientes e muito mais.',
    github: <GithubSvg />,
    cta: <CtaSvg />,
    image: ProjetoImg,
    progresso: 100,
  },
];
export default Data;
