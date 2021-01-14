import { Request, Response, Router } from 'express';
import prisma from '../middleware/prisma';
import auth from '../middleware/auth';

const createOrder = async (req: Request, res: Response) => {
	const { productIds } = req.body;
	const { uid } = res.locals.user;
	try {
		const products = await prisma.product.findMany({
			where: {},
		});
	} catch (error) {
		return res.status(500).json({ error: 'Something went wrong!' });
	}
};
const getOrdersByUser = (req: Request, res: Response) => {};
const getOrderById = (req: Request, res: Response) => {};

const router = Router();

router.post('/orders', auth, createOrder);
router.get('/orders/:uid', getOrdersByUser);
router.get('/orders/:uid/:id', getOrderById);

export default router;
