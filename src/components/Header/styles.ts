import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 18.5rem;
  width: 100%;
  gap: 1.25rem;

  background: ${props => props.theme['base-profile']};

  span {
    color: ${props => props.theme['blue']};
    font-family: Coda;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
  }
`;

export const Effect = styled.div`
  width: 100%;
  position: absolute;
  display: flex;

  img {
    position: absolute;
    align-self: center;
  }

  #svg-left {
    left: 0;
  }

  #svg-right {
    right: 0;
  }
`;
