import express from 'express';
//import { getMobile, addMobile } from '../controllers/mobile.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Working</h1>')
});

//router.get('/add', addMobile);

export default router;