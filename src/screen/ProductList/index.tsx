import ProductItem from '@screen/ProductList/ProductItem';
import { useProductContext } from '@hooks';
import {Wrapper} from './styles';

const ProductList = () => {
	const {productList} = useProductContext();
	return (
		<Wrapper>
			{productList.map((product) => {
				return <ProductItem key={product.id} data={product} />;
			})}
		</Wrapper>
	);
};

export default ProductList;
