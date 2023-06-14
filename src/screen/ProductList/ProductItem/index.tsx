import {Product} from '@models';
import {Wrapper, Image, Content} from './styles';

interface Props {
	data: Product;
}
const ProductItem = ({data}: Props) => {
	return (
		<Wrapper>
			<Image>
				<img src={data.image} alt={data.name} />
			</Image>
			<Content>
				<h1>{data.name}</h1>
				<p>{data.price}</p>
			</Content>
		</Wrapper>
	);
};

export default ProductItem;
