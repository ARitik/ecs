import { Request, Response, Router } from 'express';
import prisma from '../middleware/prisma';

const createProduct = async (req: Request, res: Response) => {
	const { name, description, image, stock } = req.body;
	try {
		const constructProduct = {};

		const product = await prisma.product.create({
			data: {
				name,
				description,
				image,
				stock,
			},
		});
		res.send(product);
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong!' });
	}
};

const getProducts = async (req: Request, res: Response) => {
	try {
		const products: Object[] = await prisma.product.findMany();
		if (products.length == 0) {
			res.send({ products: 'No Products Found!' });
		}
		res.send(products);
	} catch (error) {}
};

// const deleteProduct = params => {};

// const getProductById = params => {};

const router = Router();

router.post('/products', createProduct);
router.get('/products', getProducts);

export default router;
