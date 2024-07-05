import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middlewares/error.middleware';
import { morganMiddleware } from './utils/logger';
import scoreRoutes from './routes/score.routes';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morganMiddleware);
app.use('/api', scoreRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
