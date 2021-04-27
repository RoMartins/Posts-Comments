import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Cart } from './styles';

interface Post {
  message: string;
  name: string;
  avatarUrl: string;
  id: string;
  posts: string;
}

interface PostCart {
  posts: Post[];
}

const PostCart: React.FC<PostCart> = ({ posts }) => (
  <>
    {posts.map((post: Post) => (
      <Cart key={post.id} >
        <div key={post.id}>
          <img src={post.avatarUrl} alt={post.name} />
          <strong>{post.name}</strong>
        </div>

        <div>{post.message}</div>

        <div>
          <Link to={`/posts/${post.id}/comments`}>
            Ver comentários
            <FiChevronRight />
          </Link>
        </div>
      </Cart>
    ))}
  </>
);

export default PostCart;
