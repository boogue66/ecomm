import { Router } from "express";
import { register ,login ,checkAuthStatus } from "../controllers/auth.controller.js"
const router = Router();

router.post('/register' ,register );
router.post('/login' ,login);
router.post('/check-status' ,checkAuthStatus);

export default router;