export const contactFormInputConfigData = [
	{
		id: 'username',
		name: 'username',
		type: 'text',
		placeholder: 'Enter your name..',
		label: 'Name',
		errorMessage: 'Enter a valid name!',
		pattern: '^[A-Za-z]{1,16}$',
		required: true,
	},
	{
		id: 'email',
		name: 'email',
		type: 'email',
		placeholder: 'Enter your e-mail..',
		label: 'E-mail',
		errorMessage: 'Enter a valid email address!',
		required: true,
	},
	{
		id: 'subject',
		name: 'subject',
		type: 'text',
		placeholder: 'Enter your subject..',
		label: 'Subject',
		errorMessage: 'Too short, or too long!',
		pattern: '^[A-Za-z ]{6,35}$',
		required: true,
	},
];

export const contactFormTextareaConfigData = [
	{
		id: 'message',
		name: 'message',
		type: 'text',
		placeholder: 'Enter your message..',
		label: 'Message',
		errorMessage: 'No more than 150 words..',
		required: true,
	},
];
