import { NavLink } from 'react-router-dom';
import { ButtonsContainer, Info, PostContainer, PostHeader } from './styles';
import chevronLeft from '../../assets/chevron-left.svg';
import arrowUpRight from '../../assets/arrow-up-right.svg';
import githubBrands from '../../assets/github-brands.svg';
import calendar from '../../assets/calendar.svg';
import comment from '../../assets/comment.svg';

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <ButtonsContainer>
          <NavLink to="/">
            <img src={chevronLeft} alt="" />
            <span>voltar</span>
          </NavLink>
          <a href="">
            <span>ver no github</span>
            <img src={arrowUpRight} alt="" />
          </a>
        </ButtonsContainer>
        <h1>JavaScript data types and data structures</h1>
        <Info>
          <span>
            <img src={githubBrands} alt="" />
            cameronwll
          </span>
          <span>
            <img src={calendar} alt="" />
            Há 1 dia
          </span>
          <span>
            <img src={comment} alt="" />5 comentários
          </span>
        </Info>
      </PostHeader>
    </PostContainer>
  );
}
