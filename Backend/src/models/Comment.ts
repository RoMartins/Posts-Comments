import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import PostModel from './Post';

@Entity('comments')
class CommentModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  comment: string;

  @Column()
  postId: string;

  @ManyToOne(() => PostModel)
  @JoinColumn({ name: 'postId' })
  post: PostModel;
}

export default CommentModel;
