import morgan from 'morgan';
import { createLogger, format, transports } from 'winston';
import path from 'path';

const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({
      filename: path.join(__dirname, '../../logs/error.log'),
      level: 'error',
    }),
    new transports.File({
      filename: path.join(__dirname, '../../logs/combined.log'),
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  );
}

const morganMiddleware = morgan('combined', {
  stream: {
    write: (message: string) => logger.info(message.trim()),
  },
});

export { logger, morganMiddleware };
