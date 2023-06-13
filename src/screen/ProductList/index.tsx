import {Product} from '@models';
import ProductsMock from '@mock/product.json';
import ProductItem from '@screen/ProductList/ProductItem';
import {Wrapper} from '@screen/ProductList/styles';

const ProductList = () => {
	return (
		<Wrapper>
			{(ProductsMock as Product[]).map((product) => {
				return <ProductItem key={product.id} data={product} />;
			})}
		</Wrapper>
	);
};

export default ProductList;
