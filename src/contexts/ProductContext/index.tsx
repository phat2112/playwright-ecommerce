import {PropsWithChildren, createContext, useState} from 'react';
// project import
import {Product} from '@models';
import ProductsMock from '@mock/product.json';

export interface ProductContextProps {
	productList: Product[];
	setProductList: (newProductList: Product[]) => void;
	addProduct: (newProduct: Product) => void;
}

type ProductProviderProps = PropsWithChildren;

export const ProductContext = createContext<ProductContextProps>({
	productList: [],
	setProductList: () => null,
	addProduct: () => null,
});

const ProductProvider = ({children}: ProductProviderProps) => {
	const [productList, setProductList] = useState<Product[]>(ProductsMock);

	const addProduct = (newProduct: Product) => {
		const newProductList = [...productList];
		newProductList.unshift(newProduct);
		setProductList(newProductList);
	};

	const valueProvider = {
		productList,
		setProductList,
		addProduct,
	};

	return (
		<ProductContext.Provider value={valueProvider}>
			{children}
		</ProductContext.Provider>
	);
};
export default ProductProvider;
