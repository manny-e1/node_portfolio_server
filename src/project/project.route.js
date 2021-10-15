import { Router } from 'express';
import { errorCatcher } from '../middleware/error.js';
import {
  httpAddProject,
  httpDeleteProject,
  httpGetProjects,
  httpUpdateProject,
} from './project.controller.js';

const router = Router();

router
  .route('/')
  .post(errorCatcher(httpAddProject))
  .get(errorCatcher(httpGetProjects));
router
  .route('/:id')
  .put(errorCatcher(httpUpdateProject))
  .delete(errorCatcher(httpDeleteProject));

export default router;
