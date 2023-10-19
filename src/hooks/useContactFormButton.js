import { useState, useEffect } from 'react';

export const useContactFormButton = () => {
	const [buttonText, setButtonText] = useState('Send');

	const initialState = 'Send';

	useEffect(() => {
		if (buttonText !== initialState) {
			setTimeout(() => setButtonText(initialState), 2500);
		}
		return () => clearTimeout(buttonText);
	}, [buttonText]);

	return [buttonText, setButtonText];
};
