import {FC} from 'react';
import {useFormContext} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';

import Input, {Props as InputProps} from '.';

type Props = Exclude<InputProps, 'name'> & {
	name: string;
};

const FormInput: FC<Props> = ({...inputProps}) => {
	const {name} = inputProps;
	const {
		register,
		formState: {errors},
	} = useFormContext();
	return (
		<>
			<Input {...register(name)} {...inputProps} />
			<ErrorMessage
				errors={errors}
				name={name}
				render={({message}) => <p>{message}</p>}
			/>
		</>
	);
};

export default FormInput;
