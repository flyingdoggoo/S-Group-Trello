import { useCallback, useEffect, useState } from 'react';
import { apiClient } from '@/api/apiClient';

export type CardItem = {
	id: string;
	listId: string;
	title: string;
	description?: string | null;
	position: number;
	status: string;
};

export default function useCards({ projectId, boardId, listId }: { projectId: string; boardId: string; listId: string }) {
	const [cards, setCards] = useState<CardItem[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const basePath = `projects/${projectId}/boards/${boardId}/lists/${listId}/cards`;

	const fetchCards = useCallback(async () => {
		setLoading(true);
		try {
			const response = await apiClient.get(basePath);
			const raw = response.data?.data?.data || [];
			const mapped: CardItem[] = raw.map((c: any) => ({
				id: c.id,
				listId: c.listId,
				title: c.title,
				description: c.description ?? null,
				position: c.position,
				status: c.status,
			}));
			setCards(mapped);
		} catch (err: any) {
			setError(err?.response?.data?.message || err.message);
			console.error(err);
		} finally {
			setLoading(false);
		}
	}, [basePath]);

	const createCard = useCallback(async (data: { title: string; description?: string }) => {
		try {
			const response = await apiClient.post(basePath, data);
			const newCardRaw = response.data?.data;
			if (newCardRaw) {
				const newCard: CardItem = {
					id: newCardRaw.id,
					listId: newCardRaw.listId,
					title: newCardRaw.title,
					description: newCardRaw.description ?? null,
					position: newCardRaw.position,
					status: newCardRaw.status,
				};
				setCards(prev => [...prev, newCard].sort((a, b) => a.position - b.position));
			}
		} catch (err: any) {
			setError(err?.response?.data?.message || err.message);
			console.error(err);
		}
	}, [basePath]);

	useEffect(() => {
		fetchCards();
	}, [fetchCards]);

	return { cards, loading, error, fetchCards, createCard };
}
