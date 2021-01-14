import { Request, Response, Router } from 'express';
import { isArray } from 'util';
import prisma from '../middleware/prisma';

const createProduct = async (req: Request, res: Response) => {
	const { name, category } = req.body;
	try {
		if (!name) return res.status(400).json({ name: 'Name cannot be empty.' });
		if (!category)
			return res.status(400).json({ category: 'Book must have a category.' });
		//VALIDATION CHECK FOR SINGLE NON-NULLABLE ATTRIBUTE
		console.log(req.body);
		const newProduct = await prisma.product.create({
			data: req.body,
		});
		console.log(newProduct, 'Product Creation Successful');
		return res.json(newProduct);
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong!' });
	}
};

const getProducts = async (req: Request, res: Response) => {
	let productQuery = {};
	//This is an awful fix. I am ashamed of myself
	//Typescript is a pain in the ass
	// TODO: Investigate type errors and figure out why the switch case is leaky
	if (req.query.num) {
		let num: number;
		if (req.query.num === '10') {
			num = 10;
		} else {
			num = 20;
		}
		productQuery['take'] = num;
	}

	productQuery['orderBy'] = { createdAt: 'desc' };
	try {
		const products: Object[] = await prisma.product.findMany(productQuery);
		if (products.length == 0) {
			res.send({ products: 'No Products Found!' });
		}
		res.send(products);
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong!' });
	}
};

const getProductById = async (req: Request, res: Response) => {
	const id = req.params.id;
	try {
		const product = await prisma.product.findUnique({
			where: { pid: id },
		});
		res.json(product);
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong!' });
	}
};

// const deleteProduct = params => {};

const router = Router();

router.post('/products', createProduct);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);

export default router;
