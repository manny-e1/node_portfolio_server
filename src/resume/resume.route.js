import { Router } from 'express';
import { errorCatcher } from '../middleware/error.js';
import {
  httpAddResume,
  httpDeleteResume,
  httpGetResumes,
  httpUpdateResume,
} from './resume.controller.js';

const router = Router();

router
  .route('/')
  .post(errorCatcher(httpAddResume))
  .get(errorCatcher(httpGetResumes));
router
  .route('/:id')
  .put(errorCatcher(httpUpdateResume))
  .delete(errorCatcher(httpDeleteResume));

export default router;
