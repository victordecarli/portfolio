import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  height: 50px;
  width: 180px;
  font-weight: 700;
  font-family: 'Montserrat';
  font-size: 16px;
  margin-top: 2em;
  background-color: unset;
  border: 3px solid #8a2be2;
  color: #8a2be2;
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
  fill: #8a2be2;
  transition: all 0.4s;

  ${Button}:hover & {
    transform: rotate(-15deg);
  }
`;

function ResumeButton() {
  return (
    <Button>
      Ver currículo{' '}
      <SvgIcon
        width={28}
        height={28}
        viewBox='0 0 30 33'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0.147612 22.6184C-0.467208 24.8958 0.894872 27.2345 3.18632 27.8438L19.016 32.0536C21.3069 32.6627 23.6635 31.3138 24.2783 29.0372L29.3151 10.3811C29.9298 8.1038 28.5678 5.76504 26.2764 5.15567L10.4467 0.946094C8.15579 0.336897 5.79911 1.68577 5.18443 3.96245L0.147612 22.6184ZM21.9133 28.4067C21.6497 29.3836 20.6365 29.9658 19.649 29.7031L3.81932 25.4935C2.83232 25.231 2.24887 24.2255 2.51248 23.249L7.5493 4.5929C7.8131 3.61586 8.82619 3.03383 9.81369 3.29646L25.6434 7.50604C26.6303 7.7685 27.2138 8.77416 26.9501 9.7506L21.9133 28.4067ZM9.33599 8.22376C9.16039 8.87415 9.54969 9.54074 10.202 9.71417L22.0742 12.8713C22.7258 13.0446 23.3977 12.6612 23.5731 12.0114C23.7489 11.361 23.3594 10.6944 22.7072 10.521L10.835 7.36382C10.1833 7.19051 9.51149 7.57395 9.33599 8.22376ZM7.55096 19.5331L14.4765 21.3748C15.1282 21.548 15.8 21.1647 15.9754 20.5147C16.151 19.8642 15.7617 19.1979 15.1095 19.0243L8.18399 17.1827C7.53233 17.0094 6.8605 17.3928 6.68507 18.0426C6.50946 18.6931 6.89881 19.3595 7.55096 19.5331ZM9.50949 12.2732C8.85779 12.0999 8.18599 12.4833 8.01054 13.1331C7.83493 13.7835 8.22429 14.4501 8.87649 14.6235L20.7487 17.7807C21.4004 17.954 22.0723 17.5706 22.2476 16.9207C22.4231 16.2704 22.034 15.6038 21.3817 15.4304L9.50949 12.2732Z' />
      </SvgIcon>
    </Button>
  );
}

export default ResumeButton;
