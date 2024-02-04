import { useQuery } from '@tanstack/react-query';
import { getCards } from '../queries/getCards';
import { useSupabase } from './useSupabase';

export const useCardsQuery = () => {
	const client = useSupabase();
	const queryKey = ['card'];

	const queryFn = async () => {
		return getCards(client).then(res => res.data);
	};

	return useQuery({ queryKey, queryFn });
};
