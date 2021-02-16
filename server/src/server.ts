import express from 'express';
import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// import path from 'path';
import authRoutes from './routes/auth';
import productRoutes from './routes/products';
import orderRoutes from './routes/orders';
import stripeRoutes from './routes/stripe';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: process.env.ORIGIN,
		optionsSuccessStatus: 200,
	})
);

// app.use(express.static(path.join(__dirname, '/client/build')));

// app.use(function (_: Request, res: Response, next: NextFunction) {
// 	// Website you wish to allow to connect
// 	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

// 	// Request methods you wish to allow
// 	res.setHeader(
// 		'Access-Control-Allow-Methods',
// 		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
// 	);

// 	// Request headers you wish to allow
// 	res.setHeader(
// 		'Access-Control-Allow-Headers',
// 		'X-Requested-With,content-type'
// 	);

// 	// Set to true if you need the website to include cookies in the requests sent
// 	// to the API (e.g. in case you use sessions)
// 	res.setHeader('Access-Control-Allow-Credentials', 'true');
// 	// Pass to next layer of middleware
// 	next();
// });

// app.get('/', (_: Request, res: Response) => {
// 	res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });

app.get('/', (_, res: Response) => res.send('Hello World'));
app.use('/api/auth', authRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', stripeRoutes);

app.listen(PORT || 5000, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
