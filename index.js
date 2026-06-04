const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello world ');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running fine' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

