const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000; // Render sets PORT automatically

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route for SPA (if using index.html routing)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
