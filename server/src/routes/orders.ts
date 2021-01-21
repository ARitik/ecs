import { Request, Response, Router } from 'express';
import prisma from '../middleware/prisma';
import auth from '../middleware/auth';

const createOrder = async (req: Request, res: Response) => {
	const { products } = req.body;
	const { uid } = res.locals.user;
	try {
		const newOrder = await prisma.order.create({
			data: {
				user: {
					connect: { uid },
				},
				products,
			},
		});
		return res.json(newOrder);
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({ error: 'Something went wrong!' });
	}
};

const router = Router();

router.post('/orders', auth, createOrder);

export default router;
