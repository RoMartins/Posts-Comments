import { Router } from 'express';
import CreateCommentService from '../services/CreateCommentsService';
import ListCommentService from '../services/ListCommentsService';

const CommentsRoutes = Router();

CommentsRoutes.post('/:id/comments', async (request, response) => {
  const { id } = request.params;
  const { comment } = request.body;

  const commentService = new CreateCommentService();

  const comments = await commentService.execute({ comment, postId: id });

  return response.json(comments);
});

CommentsRoutes.get('/:id/comments', async (request, response) => {
  const { id } = request.params;

  const commentService = new ListCommentService();

  const comments = await commentService.list({ id });

  return response.json(comments);
});

export default CommentsRoutes;
