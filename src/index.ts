import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
  if (req.query.name) {
    // res.send(`Hello ${req.query.name}`); send response type text
    res.json({ message: `Hello ${req.query.name}` }); //send response type json
  } else {
    // res.send('Hello guest'); send response type text
    res.json({ message: 'Hello guest' }); //send response type json 
  }
});

app.listen(8000, () => {
  console.log('Server on port 8000!');
});