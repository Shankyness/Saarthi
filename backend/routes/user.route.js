import express from 'express';

const router = express.Router();


app.get('/test', (req, res) => {
    res.json({message: 'ApI is working'});
  });
    


export default router;
