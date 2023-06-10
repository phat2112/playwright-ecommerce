import {InputHTMLAttributes, forwardRef} from 'react';

import {Input} from './styles';

export type Props = InputHTMLAttributes<HTMLInputElement>;

const InputComponent = forwardRef<HTMLInputElement, Props>(
	({placeholder, name, ...props}, ref) => {
		return (
			<Input
				ref={ref}
				type="text"
				placeholder={placeholder}
				name={name}
				{...props}
			/>
		);
	}
);

InputComponent.displayName = 'InputComponent';
export default InputComponent;
