var express = require('express');
var app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('api is running...');
});

let items = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'}
];

app.get('/api/items', (req, res) => {
  res.send(items);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
