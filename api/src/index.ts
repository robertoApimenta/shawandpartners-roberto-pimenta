import express from 'express';
import { router } from './router';

const app = express();

app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
