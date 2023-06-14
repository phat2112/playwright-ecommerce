import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
// library
import {FormProvider, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
// project import
import {FormProduct, Product} from '@models';
import {useProductContext} from '@hooks';
import FormRandomImage from '@components/RandomImage/FormRandomImage';
import FormInput from '@components/input/FormInput';
import Button from '@components/button';
import {randomIntFromRange} from '@utils/helpers';
import {Container} from './styles';

const defaultValues: FormProduct = {
	name: '',
	price: '',
	image: '',
};

const schema = yup.object<FormProduct>({
	name: yup.string().required('field is required'),
	price: yup
		.number()
		.typeError('field is required')
		.required('field is required'),
	image: yup.string().required('field is required'),
});

const Admin = () => {
	const {addProduct} = useProductContext();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const methods = useForm<FormProduct>({
		defaultValues,
		resolver: yupResolver(schema),
	});

	const onCreateProduct = (formData: FormProduct) => {
		setLoading(true);
		const pendingTime = randomIntFromRange(1, 3) * 1000; // delay 1 - 3 seconds
		const newProduct: Product = {
			id: randomIntFromRange(101, 9999),
			...formData,
		};

		setTimeout(() => {
			addProduct(newProduct);
			setLoading(false);
			navigate('/');
		}, pendingTime);
	};

	return (
		<div>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onCreateProduct)}>
					<Container>
						<FormInput name="name" placeholder="Name of product*" />
						<FormInput
							name="price"
							placeholder="Price*"
							type="number"
							step="0.01"
						/>
						<FormRandomImage name="image" placeholder="Image url*" />
						<Button type="submit" isLoading={loading}>
							Create product
						</Button>
					</Container>
				</form>
			</FormProvider>
		</div>
	);
};

export default Admin;
