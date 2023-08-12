import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  ButtonsContainer,
  Info,
  PostBody,
  PostContainer,
  PostHeader,
} from './styles';

import chevronLeft from '../../assets/chevron-left.svg';
import arrowUpRight from '../../assets/arrow-up-right.svg';
import githubBrands from '../../assets/github-brands.svg';
import calendar from '../../assets/calendar.svg';
import comment from '../../assets/comment.svg';

type PostParams = {
  id: string;
};

export function Post() {
  const [postData, setPostData] = useState<PostProps>({} as PostProps);

  const gitUser = import.meta.env.VITE_GIT_USER;
  const gitRepo = import.meta.env.VITE_GIT_REPO;
  const { id } = useParams<PostParams>();

  async function getPost() {
    try {
      const response = await api.get(
        `repos/${gitUser}/${gitRepo}/issues/${id}`,
      );
      setPostData(response.data);
    } catch (error) {
      console.log('getUser', error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PostContainer>
      <PostHeader>
        <ButtonsContainer>
          <NavLink to="/">
            <img src={chevronLeft} alt="" />
            <span>voltar</span>
          </NavLink>
          <a href={postData.html_url} target="_blank">
            <span>ver no github</span>
            <img src={arrowUpRight} alt="" />
          </a>
        </ButtonsContainer>
        <h1>{postData.title}</h1>
        <Info>
          <span>
            <img src={githubBrands} alt="" />
            {gitUser}
          </span>
          <span>
            <img src={calendar} alt="" />
            {postData.created_at &&
              formatDistanceToNow(new Date(postData.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
          </span>
          <span>
            <img src={comment} alt="" />
            {`${postData.comments} comentários`}
          </span>
        </Info>
      </PostHeader>
      <PostBody>{postData.body}</PostBody>
    </PostContainer>
  );
}
