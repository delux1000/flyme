const express = require('express');
const path = require('path');

const app = express();
const PORT = 10000; // Fixed port, no .env needed

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve index.html for any route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
