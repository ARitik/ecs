import Stripe from 'stripe';
import { Request, Response, Router } from 'express';
import prisma from '../middleware/prisma';
import auth from '../middleware/auth';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: null,
});

const createCheckoutSession = async (req: Request, res: Response) => {
	const { products } = req.body;
	const { uid } = res.locals.user;

	const stripeObj = products.map(product => {
		return {
			price_data: {
				currency: 'inr',
				product_data: {
					name: product.name,
				},
				unit_amount: product.price * 100,
			},
			quantity: 1,
		};
	});

	// console.log(stripeObj, stripeObj2);

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		line_items: stripeObj,
		mode: 'payment',
		success_url: 'http://localhost:3000/success',
		cancel_url: 'http://localhost:3000/cancel',
	});

	try {
		const newOrder = await prisma.order.create({
			data: {
				user: {
					connect: { uid },
				},
				products,
			},
		});
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({ error: 'Something went wrong!' });
	}

	res.json({ id: session.id });
};

const router = Router();
router.use('/create-checkout-session', auth, createCheckoutSession);

export default router;
