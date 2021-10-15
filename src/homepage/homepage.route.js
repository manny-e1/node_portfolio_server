import { Router } from 'express';
import { errorCatcher } from '../middleware/error.js';
import {
  httpAddHomepage,
  httpDeleteHomepage,
  httpGetHomepage,
  httpGetHomepages,
  httpRemoveProductFromHomepage,
  httpUpdateHomepage,
} from './homepage.controller.js';

const router = Router();

router
  .route('/')
  .post(errorCatcher(httpAddHomepage))
  .get(errorCatcher(httpGetHomepages));

router
  .route('/:id')
  .get(errorCatcher(httpGetHomepage))
  .put(errorCatcher(httpUpdateHomepage))
  .delete(errorCatcher(httpDeleteHomepage));

router
  .route('/:homepageId/remove/:projectId')
  .put(errorCatcher(httpRemoveProductFromHomepage));

export default router;
