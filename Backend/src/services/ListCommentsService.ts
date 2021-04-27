import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Comment from '../models/Comment';

interface Request {
  id: string;
}

export default class ListPostService {
  async list({ id }: Request): Promise<Comment[]> {
    const CommentRepository = getRepository(Comment);

    const comments = await CommentRepository.find({ where: { postId: id } });

    if (comments.length === 0) {
      throw new AppError('Esse post não possui comentários!', 404);
    }

    return comments;
  }
}
