import { styled } from 'styled-components';

export const PostContainer = styled.main`
  width: 100%;
  max-width: 57rem;
  padding: 0 1.5rem;
  margin: 0 auto;
  background-color: transparent;
`;

export const PostHeader = styled.div`
  position: relative;
  width: 100%;
  max-width: 54rem;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  padding: 2rem;
  border-radius: 10px;

  background: ${props => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  h1 {
    margin-top: 1.25rem;
    color: ${props => props.theme['base-title']};

    font-family: Nunito;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
  }
`;

export const ButtonsContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    text-decoration: none;

    span {
      color: ${props => props.theme.blue};

      font-family: Nunito;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 1.5rem;
  flex-wrap: wrap;

  span {
    display: flex;
    gap: 0.5rem;

    color: ${props => props.theme['base-subtitle']};
    font-family: Nunito;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }
`;
