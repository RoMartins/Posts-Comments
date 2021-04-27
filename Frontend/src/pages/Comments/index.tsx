import React, { useState, FormEvent, useEffect, useCallback } from 'react';
import { useRouteMatch , useHistory, Link} from 'react-router-dom';
import api from '../../services/api';
import PostCart from '../Components/PostCart';
import { CommentContainer } from './styles';
import { Form } from '../Dashboard/styles';
import { FiArrowLeft } from 'react-icons/fi';


interface Params {
  id: string;
}
interface Comments {
  comment: string;
}

interface Post {
  message: string;
  name: string;
  avatarUrl: string;
  id: string;
  posts: string;
}
const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [message, setMessage] = useState('');
  const history = useHistory();

  const { params } = useRouteMatch<Params>();

  useEffect(() => {
    api.get(`posts/${params.id}/comments`).then(response => {
      setComments(response.data);
    });

    api.get(`posts/${params.id}`).then(response => {
      setPosts(response.data.post);
    });
  }, [params.id]);

  const HandleNewComment = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const response = await api.post(`posts/${params.id}/comments`, {
        comment: message,
      });
      const newComment = response.data;
      setComments([...comments, newComment]);
    },
    [params.id, message],
  );

  return (
    <>
    <Link style={{textDecoration: 'none', color: '#000000'}} to="/">
            <FiArrowLeft />
            Voltar
          </Link>
      <div>
        <PostCart posts={posts} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form onSubmit={HandleNewComment}>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Escreva um comentário"
          />
          <button type="submit">Comentar</button>
        </Form>
      </div>

      <h1 style={{ margin: 30 }}>Comentários</h1>
      <div>
        {comments.map(item => (
          <CommentContainer>
            <p>{item.comment}</p>
          </CommentContainer>
        ))}
      </div>
    </>
  );
};

export default Comments;
