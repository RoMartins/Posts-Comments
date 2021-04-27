import { Router } from 'express';
import CreatePostService from '../services/CreatePostService';
import ListPostService from '../services/ListPostsService';

const PostRoutes = Router();

PostRoutes.post('/', async (request, response) => {
  const { name, avatarUrl, message } = request.body;

  const createPost = new CreatePostService();

  const post = await createPost.execute({ message, name, avatarUrl });

  return response.json(post);
});

PostRoutes.get('/', async (request, response) => {
  const ListPost = new ListPostService();

  const posts = await ListPost.listAll();
  return response.json(posts);
});

PostRoutes.get('/:id', async (request, response) => {
  const { id } = request.params;
  const ListPost = new ListPostService();

  const post = await ListPost.listOne({ id });
  return response.json({ post });
});

export default PostRoutes;
