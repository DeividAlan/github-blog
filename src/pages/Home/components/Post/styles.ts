import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const PosButton = styled(Link)`
  max-width: 26rem;
  width: 100%;
  height: 16.25rem;
  margin-bottom: 2rem;
  text-decoration: none;
  border: 2px solid ${props => props.theme['base-post']};

  border-radius: 10px;
  overflow: hidden;

  &:hover {
    border: 2px solid ${props => props.theme['base-label']};
  }
`;

export const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;

  padding: 2rem;
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
      text-align: left;
    }

    span {
      margin-top: 0.31rem;
      color: ${props => props.theme['base-span']};

      font-family: Nunito;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      text-align: right;
      text-transform: capitalize;
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
    text-align: left;
  }
`;
