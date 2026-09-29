// Route Service
import { TransportOption } from '../../models/Route';
import { DEMO_TRANSPORT_OPTIONS } from '../../data/demoScenario';
import { simulateApiCall } from '../../services/api/apiClient';

export const getRouteComparison = async (
  _pickup: string,
  _destination: string,
): Promise<TransportOption[]> => {
  const res = await simulateApiCall(DEMO_TRANSPORT_OPTIONS, 800);
  return res.data;
};
