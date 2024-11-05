// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another route
app.get('/api/greet/:name', (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}!` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
