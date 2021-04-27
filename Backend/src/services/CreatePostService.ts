import { getRepository } from 'typeorm';
import Post from '../models/Post';

interface Request {
  message: string;
  name: string;
  avatarUrl: string;
}

export default class CreatePostService {
  async execute({ message, avatarUrl, name }: Request): Promise<Post> {
    const postRepository = getRepository(Post);

    const post = postRepository.create({
      name,
      avatarUrl,
      message,
    });

    await postRepository.save(post);

    return post;
  }
}
