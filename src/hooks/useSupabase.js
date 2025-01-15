import { useMemo } from 'react';
import { createBrowserClient } from '@supabase/ssr';

const supabaseClient = () => {
	const client = createBrowserClient(import.meta.env.VITE_API_URL, import.meta.env.VITE_API_KEY);

	return client;
};

export const useSupabase = () => {
	return useMemo(supabaseClient, []);
};
