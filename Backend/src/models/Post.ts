import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('posts')
class PostModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  avatarUrl: string;

  @Column()
  message: string;
}

export default PostModel;
