import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import prisma from './prisma';

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req.cookies.token;
		if (!token) throw new Error('Access Denied');
		const { email }: any = jwt.verify(token, process.env.JWT_SECRET);
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});
		if (!user) throw new Error('User does not exist');
		res.locals.user = user;
		return next();
	} catch (error) {
		console.log(error.message);
		return res.status(401).json({ error: error.message });
	}
};
