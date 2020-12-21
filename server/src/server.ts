import express from 'express';
import { Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));

app.use(cookieParser());

app.get('/', (_, res: Response) => res.send('Hello World'));
app.use('/api/auth', authRoutes);

app.listen(PORT || 5000, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
