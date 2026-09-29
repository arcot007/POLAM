// useJourney hook — orchestrates ride search flow
import { useJourneyStore } from '../store/journeyStore';

export const useJourney = () => {
  const store = useJourneyStore();

  const isReady = !!(store.pickup && store.destination);

  return {
    ...store,
    isReady,
  };
};
