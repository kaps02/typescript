import express from 'express';
import todoRoute from './routes/todos';

const app = express();

// Use built-in Express JSON parsing middleware
app.use(express.json());

// Use todo routes
app.use(todoRoute);

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
