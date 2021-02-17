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

const getOrdersByUID = async (req: Request, res: Response) => {
	const { uid } = req.params;
	try {
		const orders = await prisma.order.findMany({
			where: {
				userId: uid,
			},
		});
		return res.json(orders);
	} catch (error) {
		return res.status(500).json({ error: 'Something went wrong!' });
	}
};

const getOrdersByOID = async (req: Request, res: Response) => {
	const { oid } = req.params;
	try {
		const order = await prisma.order.findMany({
			where: {
				oid,
			},
		});

		return res.json(order[0]);
	} catch (error) {
		return res.status(500).json({ error: 'Something went wrong!' });
	}
};

const router = Router();

router.post('/orders', auth, createOrder);
router.get('/orders/:uid', getOrdersByUID);
router.get('/orders/bill/:oid', getOrdersByOID);

export default router;
