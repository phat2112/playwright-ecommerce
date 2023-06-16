// library
import {ErrorMessage} from '@hookform/error-message';
import {useController, useFormContext} from 'react-hook-form';
// project import
import RandomImage from '@components/RandomImage';
import Input from '@components/input';
import {InputHTMLAttributes} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
}
const FormRandomImage = ({name, ...restProps}: Props) => {
	const {
		control,
		formState: {errors},
	} = useFormContext();
	const {field} = useController({name, control});

	const handleSetRandomImage = (imageUrl: string) => {
		field.onChange(imageUrl);
	};

	return (
		<>
			<Input {...field} {...restProps} />
			<ErrorMessage
				errors={errors}
				name={name}
				render={({message}) => <p className="error-message">{message}</p>}
			/>
			<RandomImage
				value={field.value}
				onSetRandomImage={handleSetRandomImage}
			/>
		</>
	);
};

export default FormRandomImage;
