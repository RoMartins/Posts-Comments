import { getRepository } from 'typeorm';
import Comment from '../models/Comment';

interface Request {
  comment: string;
  postId: string;
}

export default class CreateCommentService {
  async execute({ comment, postId }: Request): Promise<Comment> {
    const CommentRepository = getRepository(Comment);

    const comments = CommentRepository.create({
      comment,
      postId,
    });

    await CommentRepository.save(comments);

    return comments;
  }
}
