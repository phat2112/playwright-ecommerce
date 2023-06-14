import {InputHTMLAttributes, forwardRef} from 'react';

import {Input} from './styles';

export type VariantInput = 'normal' | 'shadow';
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
	variant?: VariantInput;
}

const InputComponent = forwardRef<HTMLInputElement, Props>(
	({placeholder, name, variant = 'normal', ...props}, ref) => {
		return (
			<Input
				ref={ref}
				type="text"
				placeholder={placeholder}
				name={name}
				variant={variant}
				{...props}
			/>
		);
	}
);

InputComponent.displayName = 'InputComponent';
export default InputComponent;
