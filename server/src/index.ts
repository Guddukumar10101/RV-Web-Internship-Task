import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Test Route
app.get('/', (_req, res) => {
  res.send('🚀 Server is running with TypeScript!');
});

app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
