import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middlewares/error.middleware';
import { morganMiddleware } from './utils/logger';
import scoreRoutes from './routes/score.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import { pingServer } from './services/ping.service';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morganMiddleware);
app.use('/api', scoreRoutes);
app.use(errorHandler);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  setInterval(pingServer, 14 * 60 * 1000);
  pingServer();
});
