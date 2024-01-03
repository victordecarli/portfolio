import styled from 'styled-components';

const SvgIcon = styled.svg`
  cursor: pointer;

  transition: all 0.4s;
  &:hover {
    opacity: 0.6;
    fill: #c6a0ff;
  }
`;

function GithubIcon() {
  return (
    <a href="https://github.com/V0nor">
      <SvgIcon
        width={32}
        height={32}
        viewBox="0 0 31 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.097 0.275391C6.76025 0.275391 0 7.03414 0 15.3724C0 22.0429 4.32575 27.7016 10.3243 29.6981C11.0785 29.8381 11.3555 29.3706 11.3555 28.9719C11.3555 28.6119 11.3415 27.4226 11.335 26.1611C7.135 27.0744 6.24875 24.3799 6.24875 24.3799C5.562 22.6349 4.5725 22.1709 4.5725 22.1709C3.2025 21.2339 4.67575 21.2534 4.67575 21.2534C6.1915 21.3596 6.99 22.8091 6.99 22.8091C8.3365 25.1166 10.5218 24.4496 11.3833 24.0641C11.5188 23.0884 11.91 22.4221 12.3418 22.0451C8.9885 21.6639 5.46325 20.3691 5.46325 14.5844C5.46325 12.9361 6.05325 11.5894 7.019 10.5319C6.862 10.1519 6.34525 8.61639 7.165 6.53689C7.165 6.53689 8.4325 6.13114 11.3175 8.08439C12.522 7.74964 13.8138 7.58139 15.097 7.57564C16.3795 7.58139 17.672 7.74914 18.8787 8.08389C21.7602 6.13064 23.0263 6.53639 23.0263 6.53639C23.848 8.61564 23.3312 10.1514 23.1745 10.5314C24.1425 11.5889 24.7283 12.9356 24.7283 14.5839C24.7283 20.3824 21.1965 21.6589 17.8347 22.0329C18.3765 22.5014 18.859 23.4204 18.859 24.8286C18.859 26.8486 18.8415 28.4744 18.8415 28.9716C18.8415 29.3734 19.1135 29.8441 19.8785 29.6959C25.8735 27.6974 30.1943 22.0404 30.1943 15.3724C30.194 7.03464 23.4345 0.275391 15.097 0.275391Z"
        />
        <path d="M5.71709 21.9509C5.68384 22.0259 5.56584 22.0484 5.45834 21.9971C5.34834 21.9481 5.28709 21.8459 5.32259 21.7706C5.35509 21.6931 5.47334 21.6719 5.58259 21.7236C5.69259 21.7729 5.75509 21.8761 5.71684 21.9511L5.71709 21.9509ZM6.32859 22.6331C6.25684 22.6999 6.11609 22.6689 6.02059 22.5631C5.92159 22.4581 5.90309 22.3174 5.97634 22.2496C6.05084 22.1831 6.18734 22.2146 6.28634 22.3196C6.38484 22.4261 6.40434 22.5656 6.32884 22.6334L6.32859 22.6331ZM6.92409 23.5024C6.83159 23.5669 6.68009 23.5066 6.58659 23.3724C6.49409 23.2379 6.49409 23.0766 6.58909 23.0124C6.68234 22.9479 6.83159 23.0061 6.92659 23.1391C7.01859 23.2754 7.01859 23.4369 6.92409 23.5024ZM7.73934 24.3426C7.65684 24.4339 7.48034 24.4094 7.35134 24.2851C7.21959 24.1634 7.18284 23.9901 7.26559 23.8991C7.34959 23.8076 7.52684 23.8331 7.65659 23.9566C7.78834 24.0781 7.82809 24.2516 7.73984 24.3424L7.73934 24.3426ZM8.86434 24.8304C8.82759 24.9486 8.65809 25.0024 8.48684 24.9519C8.31609 24.9001 8.20434 24.7619 8.23934 24.6424C8.27434 24.5231 8.44509 24.4674 8.61734 24.5211C8.78809 24.5726 8.89984 24.7101 8.86434 24.8304ZM10.1001 24.9206C10.1043 25.0451 9.95934 25.1481 9.78009 25.1506C9.59934 25.1549 9.45309 25.0539 9.45134 24.9314C9.45134 24.8056 9.59334 24.7039 9.77384 24.7004C9.95309 24.6971 10.1003 24.7971 10.1003 24.9204L10.1001 24.9206ZM11.2496 24.7251C11.2711 24.8464 11.1463 24.9711 10.9681 25.0044C10.7931 25.0369 10.6306 24.9614 10.6081 24.8411C10.5866 24.7166 10.7136 24.5919 10.8886 24.5596C11.0671 24.5289 11.2271 24.6019 11.2496 24.7251Z" />
      </SvgIcon>
    </a>
  );
}

export default GithubIcon;
