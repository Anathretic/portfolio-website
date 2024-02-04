import { createBrowserClient } from '@supabase/ssr';
import { useMemo } from 'react';

const supabaseClient = () => {
	const client = createBrowserClient(import.meta.env.VITE_API_URL, import.meta.env.VITE_API_KEY);

	return client;
};

export const useSupabase = () => {
	return useMemo(supabaseClient, []);
};
