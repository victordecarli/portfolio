import styled from 'styled-components';

const SvgIcon = styled.svg`
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    opacity: 0.6;
    fill: #c6a0ff;
  }
`;

function LinkedinIcon() {
  return (
    <a href='https://www.linkedin.com/in/dev-victor/'>
      <SvgIcon xmlns='http://www.w3.org/2000/svg' width={32} height={32}>
        <path d='M27.264 27.27h-4.74v-7.426c0-1.772-.036-4.05-2.468-4.05-2.47 0-2.848 1.928-2.848 3.92v7.556h-4.74V12h4.552v2.08h.06c.636-1.2 2.184-2.466 4.494-2.466 4.8 0 5.69 3.16 5.69 7.274v8.382ZM7.116 9.91a2.751 2.751 0 0 1-2.752-2.754A2.753 2.753 0 1 1 7.116 9.91Zm2.376 17.36H4.74V12h4.752v15.27ZM29.632 0H2.36C1.056 0 0 1.032 0 2.306v27.388C0 30.968 1.056 32 2.36 32h27.27c1.304 0 2.37-1.032 2.37-2.306V2.306C32 1.032 30.934 0 29.63 0h.002Z' />
      </SvgIcon>
    </a>
  );
}

export default LinkedinIcon;
