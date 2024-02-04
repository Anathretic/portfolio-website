export const getCards = client => {
	return client.from('cards').select();
};
