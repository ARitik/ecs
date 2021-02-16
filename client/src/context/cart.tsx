import { createContext, useReducer, useContext } from 'react';
import { Product } from '../types';

interface State {
	totalAmt: number;
	total: number;
	products: any;
}

interface Action {
	type: string;
	payload: Product;
}

const StateContext = createContext<State>({
	totalAmt: 0,
	total: 0,
	products: [],
});

const DispatchContext = createContext(null);

const reducer = (state: State, { type, payload }: Action) => {
	switch (type) {
		case 'ADD':
			// console.log(payload);
			return {
				...state,
				totalAmt: state.totalAmt + payload.price,
				total: state.total + 1,
				products: [...state.products, payload],
			};

		case 'DELETE':
			return {
				...state,
				totalAmt: state.totalAmt - payload.price,
				total: state.total - 1,
				products: [...state.products.filter(item => item.id !== payload.id)],
			};
		case 'CLEAR':
			return {
				...state,
				totalAmt: 0,
				total: 0,
				products: [],
			};
		default:
			throw new Error(`Unknown Action Type : ${type}`);
	}
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, {
		totalAmt: 0,
		total: 0,
		products: [],
	});
	return (
		<DispatchContext.Provider value={dispatch}>
			<StateContext.Provider value={state}>{children}</StateContext.Provider>
		</DispatchContext.Provider>
	);
};

export const useCartState = () => useContext(StateContext);
export const useCartDispatch = () => useContext(DispatchContext);
