import { Router } from 'express';
import { httpSend } from './contact.controller.js';

const router = Router();

router.route('/').post(httpSend);

export default router;
