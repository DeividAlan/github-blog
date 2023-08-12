import { LinkProps } from 'react-router-dom';
import { PosButton, PostContainer } from './styles';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface PostButtonProps extends LinkProps {
  data: PostProps;
}

export function Post({ data, ...props }: PostButtonProps) {
  return (
    <PosButton {...props}>
      <PostContainer>
        <div>
          <h1>{data.title}</h1>
          <span>
            {formatDistanceToNow(new Date(data.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>
        <p>{data.body}</p>
      </PostContainer>
    </PosButton>
  );
}
