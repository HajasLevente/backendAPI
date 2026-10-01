const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


app.get('/', (req, res) => {
  res.send('API fut!');
});


app.listen(PORT, () => {
  console.log(`A szerver fut a http://localhost:${PORT} porton`);
});