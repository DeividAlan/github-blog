import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { Post } from './components/Post';
import {
  Avatar,
  Description,
  HomeContainer,
  Info,
  PostsContainer,
  Profile,
  Search,
  SearchHeader,
} from './styles';

import githubBrands from '../../assets/github-brands.svg';
import building from '../../assets/building.svg';
import userGroup from '../../assets/user-group.svg';
import arrowUpRight from '../../assets/arrow-up-right.svg';

interface UserProps {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  bio: string;
  followers: number;
}

export function Home() {
  const [user, setUser] = useState<UserProps>({
    name: 'Deivid Alan',
    login: 'DeividAlan',
    avatar_url: 'https://avatars.githubusercontent.com/u/55552515?v=4',
    bio: 'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.',
    company: 'company',
    followers: 10,
    html_url: 'https://github.com/DeividAlan',
  });
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [query, setQuery] = useState('');

  const gitUser = import.meta.env.VITE_GIT_USER;
  const gitRepo = import.meta.env.VITE_GIT_REPO;

  async function getUser() {
    try {
      const response = await api.get(`users/${gitUser}`);
      setUser(response.data);
    } catch (error) {
      console.log('getUser', error);
    }
  }

  async function fetchPosts(searchQuery: string) {
    try {
      const response = await api.get('search/issues', {
        params: {
          q: `${searchQuery} repo:${gitUser}/${gitRepo}`,
        },
      });

      setPosts(response.data.items);
    } catch (error) {
      console.log('fetchPosts', error);
    }
  }

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const queryValue = event.target.value;
    setQuery(queryValue);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchPosts(query);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <HomeContainer>
      <Profile>
        <Avatar src={user.avatar_url} />
        <Description>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
          <Info>
            <span>
              <img src={githubBrands} alt="" />
              {user.login}
            </span>
            <span>
              <img src={building} alt="" />
              {user.company}
            </span>
            <span>
              <img src={userGroup} alt="" />
              {`${user.followers} seguidores`}
            </span>
          </Info>
        </Description>
        <a href={user.html_url} target="_blank">
          <span>GITHUB</span>
          <img src={arrowUpRight} alt="" />
        </a>
      </Profile>
      <SearchHeader>
        <strong>Publicações</strong>
        <span>{`${posts.length} publicações`}</span>
      </SearchHeader>
      <Search
        type="text"
        placeholder="Buscar conteúdo"
        value={query}
        onChange={handleSearchInput}
      />
      <PostsContainer>
        {posts.map(post => {
          return <Post data={post} to={`/post/${post.number}`} key={post.id} />;
        })}
      </PostsContainer>
    </HomeContainer>
  );
}
