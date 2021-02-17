import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import dayjs from 'dayjs';
import axios from 'axios';
import { useEffect } from 'react';

import { useAuthState } from '../../../context/auth';

import { GetServerSideProps } from 'next';

export default function OrderBill({ order }) {
	const { user } = useAuthState();
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	pdfMake.vfs = pdfFonts.pdfMake.vfs;
	var totalCost = 0;
	var productDetails = order.products.map(product => {
		totalCost = totalCost + product.price;
		return [product.name, product.author, product.pid, product.price];
	});

	productDetails.unshift(['Name', 'Author', 'ProductID', 'Price']);
	console.log(productDetails);

	const orderCreatedAt = dayjs(order.createdAt).format('DD-MM-YYYY hh:mm A');

	var dd = {
		info: {
			title: user.name + '_' + order.oid,
			author: 'Biblio',
		},
		watermark: {
			text: 'Biblio',
			color: 'gray',
			opacity: 0.1,
			bold: true,
			italics: false,
		},
		content: [
			{
				text: 'OrderID: ' + order.oid,
				style: 'header',
				margin: [5, 2, 10, 20],
			},
			{
				text: 'Placed On: ' + orderCreatedAt,
				style: 'subheader',
				margin: [5, 2, 10, 20],
			},
			{
				layout: 'lightHorizontalLines', // optional
				table: {
					// headers are automatically repeated if the table spans over multiple pages
					// you can declare how many rows should be treated as headers
					headerRows: 1,
					widths: ['*', 'auto', 100, '*'],

					body: productDetails.map(product => product),
					margin: [5, 10, 10, 20],
				},
			},
			{
				text: '(Stripe Payment Gateway INR) Amount Recieved: ₹' + totalCost,
				style: 'header',
				margin: [5, 40, 10, 20],
			},
			{
				text: 'Delivery Status [' + order.status + ']',
				style: 'subheader',
				margin: [5, 2, 10, 20],
			},
			{
				text: 'Placed by ' + capitalizeFirstLetter(user.name),
				style: 'subheader',
				margin: [5, 40, 10, 20],
			},
			'UID: ' + user.uid,
			'Mail: ' + user.email,
			{
				text:
					'Thank you for ordering. For any queries , please reach out to mail@biblio.co',
				style: 'boldText',
				margin: [5, 40, 10, 20],
			},
		],
		styles: {
			header: {
				fontSize: 18,
				bold: true,
			},
			subheader: {
				fontSize: 12,
				bold: true,
			},
			boldText: {
				bold: true,
			},
		},
	};

	useEffect(() => {
		generateBill();
	}, []);
	const generateBill = () => {
		pdfMake.createPdf(dd).download('order_' + user.name + '_' + order.oid);
	};
	return (
		<div className='p-20'>
			<h1 className='text-4xl font-bold text-gray-800'>
				Thank you for Ordering.
			</h1>
			<a
				className='mt-4 text-xs font-light text-blue-500 cursor-pointer hover:underline'
				onClick={generateBill}
			>
				Didn't recieve your download? Click here.
			</a>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async context => {
	const { oid } = context.params;

	const response = await axios.get(`/orders/bill/${oid}`);
	const order = await response.data;

	return {
		props: { order }, // will be passed to the page component as props
	};
};
