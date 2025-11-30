import express from 'express';
import dotenv from 'dotenv';

import citiesRouter from './routes/cities.js';
import carsRouter from './routes/cars.js';
import brandsRouter from './routes/brands.js';
import modelsRouter from './routes/models.js';
import optionsRouter from './routes/options.js';
import photosRouter from './routes/photos.js';
import sourcesRouter from './routes/sources.js'; 
import accountRouter from './routes/account.js';
import passRouter from './routes/pass.js';

import { logger } from './middlewares/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config(); 

const app = express();

app.use(express.json());

app.use(logger);

app.use('/api/cities', citiesRouter);
app.use('/api/cars', carsRouter);
app.use('/api/brands', brandsRouter);
app.use('/api/models', modelsRouter);
app.use('/api/options', optionsRouter);
app.use('/api/photos', photosRouter);
app.use('/api/sources', sourcesRouter);   
app.use('/api/account', accountRouter); 
app.use('/api/pass', passRouter); 

app.get('/', (req, res) => {
  res.send(`API работает! Base URL: ${process.env.API_URL}`);
});

app.use(errorHandler);

export default app;
