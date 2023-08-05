import { styled } from 'styled-components';

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 55.5rem;
  padding: 0 1.5rem;
  margin: 0 auto;
  background-color: transparent;
`;

export const Profile = styled.div`
  position: relative;
  width: 100%;
  max-width: 54rem;
  min-height: 13.25rem;
  margin-top: -5.5rem;
  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  background: ${props => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;
`;

export const Description = styled.div`
  margin-top: 0.5rem;
  max-width: 36.75rem;

  h1 {
    color: ${props => props.theme['base-title']};

    font-family: Nunito;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
  }

  p {
    margin-top: 0.5rem;
    color: ${props => props.theme['base-text']};

    font-family: Nunito;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`;

export const Info = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1.5rem;

  span {
    color: ${props => props.theme['base-subtitle']};
    font-family: Nunito;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }
`;
