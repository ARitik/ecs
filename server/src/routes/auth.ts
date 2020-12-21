import { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import bcrypt from 'bcrypt';
import { body, validationResult } from 'express-validator';

import prisma from '../middleware/prisma';

import auth from '../middleware/auth';

const register = async (req: Request, res: Response) => {
	const { name, email, password } = req.body; // Pull data from Request Body
	try {
		// userEmail Check
		const userEmail = await prisma.user.findUnique({
			where: {
				email,
			},
		});
		// Prisma findUnique to check emailExistCondition
		if (userEmail)
			return res.status(400).json({ error: 'Email Already Exists' });
		// Return if Email Exist

		//Validation Result
		const errors: any = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json(errors);
		}
		//Return Validation Result

		const hashedPassword = await bcrypt.hash(password, 6);

		// User Creation (non-nullable attributes)
		const newUser = await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});
		// Return New User
		return res.json(newUser);
	} catch (error) {
		console.log(error.message);
		return res.status(500).json('Something went wrong!');
	}
};

const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});
		if (!user) return res.status(404).json({ error: 'Invalid Credentials' });

		const passwordMatches: boolean = await bcrypt.compare(
			password,
			user.password
		);
		if (!passwordMatches) {
			return res.status(401).json({ error: 'Invalid Credentials' });
		}

		const token = jwt.sign({ email }, process.env.JWT_SECRET);

		res.set(
			'Set-Cookie',
			cookie.serialize('token', token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'strict',
				maxAge: 3600,
				path: '/',
			})
		);

		return res.json(user);
	} catch (error) {
		return res.status(500).json({ error: 'Something went wrong!' });
	}
};

const me = (_: Request, res: Response) => {
	return res.json(res.locals.user);
};

const router = Router(); // Auth Router Object Initialization

router.post(
	'/register',
	[body('email').isEmail(), body('password').isLength({ min: 5 })], //express-validator validation checks
	register
);

router.post(
	'/login',
	[body('email').isEmail(), body('password').isLength({ min: 5 })], //express-validator validation checks
	login
);

router.get('/me', auth, me);

export default router; //Default export AuthRouter
