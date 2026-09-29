// Rating service — placeholder
import { Rating } from '../../models/Rating';

export const submitRating = async (rating: Omit<Rating, 'id' | 'createdAt'>): Promise<Rating> => {
  await new Promise(r => setTimeout(r, 500));
  return {
    ...rating,
    id: `rating-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
};
