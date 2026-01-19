import { Router } from 'express';
import { chatController } from '../controllers/chat.controller.js';

const router = Router();

router.use('/api', router);
router.get('/chat', chatController);

export default router;
