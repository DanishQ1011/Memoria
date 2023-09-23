import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Whats up')
});

export default router;