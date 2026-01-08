import styled from 'styled-components';

const Button = styled.a`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  height: 50px;
  width: 220px;
  font-weight: 700;
  font-family: 'Montserrat';
  font-size: 16px;
  margin-top: 2em;
  background-color: #8a2be2;
  border: none;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.4s;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;

  &:hover {
    border-radius: 10px;
    box-shadow: 3px 3px 0 #c6a0ff;
    transform: translateY(-4px);
    letter-spacing: 0.5px;
  }
`;

const SvgIcon = styled.svg`
  cursor: pointer;
  fill: #fff;
  transition: all 0.4s;

  ${Button}:hover & {
    stroke-dasharray: 50px;
  }
`;

function EmailButton() {
  return (
    <Button href='mailto:vonorvictor@gmail.com'>
      Entrar em contato
      <SvgIcon
        width={22}
        height={19}
        viewBox='0 0 22 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M1.375 10.7848H17.6825L12.6912 16.39C12.5757 16.52 12.4886 16.67 12.4351 16.8315C12.3815 16.9929 12.3625 17.1626 12.3791 17.331C12.4126 17.6709 12.5892 17.9845 12.87 18.2027C13.1508 18.4209 13.5128 18.5259 13.8764 18.4946C14.24 18.4632 14.5754 18.2981 14.8088 18.0356L21.6838 10.322C21.73 10.2606 21.7714 10.1962 21.8075 10.1291C21.8075 10.0649 21.8763 10.0263 21.9038 9.96201C21.9661 9.81461 21.9987 9.6577 22 9.4992C21.9987 9.3407 21.9661 9.18379 21.9038 9.03638C21.9038 8.9721 21.835 8.93353 21.8075 8.86925C21.7714 8.80222 21.73 8.73777 21.6838 8.67641L14.8088 0.962818C14.6795 0.817696 14.5176 0.70099 14.3346 0.620998C14.1516 0.541007 13.952 0.499696 13.75 0.500002C13.4287 0.499416 13.1174 0.604032 12.87 0.79569C12.7308 0.903615 12.6157 1.03616 12.5313 1.18574C12.447 1.33531 12.395 1.49898 12.3784 1.66736C12.3618 1.83575 12.3809 2.00554 12.4346 2.16701C12.4882 2.32849 12.5755 2.47848 12.6912 2.60838L17.6825 8.2136H1.375C1.01033 8.2136 0.660591 8.34904 0.402728 8.59014C0.144866 8.83124 0 9.15823 0 9.4992C0 9.84016 0.144866 10.1672 0.402728 10.4083C0.660591 10.6493 1.01033 10.7848 1.375 10.7848Z' />
      </SvgIcon>
    </Button>
  );
}

export default EmailButton;
