import React, { FormEvent, useEffect, useState } from 'react';
import api from '../../services/api';
import PostCart from '../Components/PostCart';
import { Section, Form } from './styles';

interface Post {
  message: string;
  name: string;
  avatarUrl: string;
  id: string;
  posts: string;
}

const Dashboard: React.FC = () => {
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.get('/posts').then(response => {
      setPosts(response.data);
    });
  }, []);

  async function HandleNewPost(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!message || !avatarUrl || !name) {
      alert('Preencha todos os campos');
      return;
    }
    const data = {
      name,
      avatarUrl,
      message,
    };

    const response = await api.post('/posts', data);
    const newPost = response.data;
    setPosts([...posts, newPost]);
  }

  return (
    <Section>
      <div>
        <Form onSubmit={HandleNewPost}>
          <h1>Faça seu Post!</h1>
          <input
            placeholder="Digite seu nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="Avatar URL"
            value={avatarUrl}
            onChange={e => setAvatarUrl(e.target.value)}
          />
          <textarea
            placeholder="No que está pensando?"
            value={message}
            onChange={e => setMessage(e.target.value)}
            name="message"
            id=""
            cols={30}
            rows={5}
          />
          <button className="button" type="submit">
            Publicar
          </button>
        </Form>
      </div>
      <div>
        <PostCart posts={posts}/>
      </div>
    </Section>
  );
};

export default Dashboard;
