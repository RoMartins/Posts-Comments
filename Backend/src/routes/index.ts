import { Router } from 'express';
import CommentsRoutes from './comments.routes';
import postsRouter from './posts.routes';

const routes = Router();

routes.use('/posts', postsRouter);
routes.use('/posts', CommentsRoutes);

export default routes;
