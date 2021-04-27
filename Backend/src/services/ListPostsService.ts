import { getRepository } from 'typeorm';
import Post from '../models/Post';

interface Request {
  id: string;
}

export default class ListPostService {
  async listAll(): Promise<Post[]> {
    const postRepository = getRepository(Post);

    const posts = await postRepository.find();

    return posts;
  }

  async listOne({ id }: Request): Promise<Post[]> {
    const postRepository = getRepository(Post);

    const post = postRepository.find({ where: { id } });

    return post;
  }
}
