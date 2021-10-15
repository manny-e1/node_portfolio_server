import { Router } from 'express';
import {
  httpAddBlog,
  httpDeleteBlog,
  httpGetBlog,
  httpGetBlogs,
  httpUpdateBlog,
} from './blog.controller.js';
import { errorCatcher } from '../middleware/error.js';

const router = Router();

router
  .route('/')
  .post(errorCatcher(httpAddBlog))
  .get(errorCatcher(httpGetBlogs));
router
  .route('/:id')
  .get(errorCatcher(httpGetBlog))
  .put(errorCatcher(httpUpdateBlog))
  .delete(errorCatcher(httpDeleteBlog));

export default router;
