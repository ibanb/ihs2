import Express from 'express';
const app = new Express();

app.get('/', (req, res) => {
    console.log('hello world')
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});