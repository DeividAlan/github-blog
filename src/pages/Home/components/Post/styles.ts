import { styled } from 'styled-components';

export const PostContainer = styled.div`
  max-width: 26rem;
  width: 100%;
  height: 16.25rem;
  margin-bottom: 2rem;
  padding: 2rem;

  border-radius: 10px;
  background: ${props => props.theme['base-post']};

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      color: ${props => props.theme['base-title']};
      width: 17.6875rem;

      font-family: Nunito;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 700;
    }

    span {
      margin-top: 0.31rem;
      color: ${props => props.theme['base-span']};

      font-family: Nunito;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
    }
  }

  & > p {
    margin-top: 1.25rem;
    height: 7rem;
    color: ${props => props.theme['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;

    font-family: Nunito;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
  }
`;
