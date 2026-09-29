// AI Service
import { getAIResponse, AIMessage } from '../../services/ai/aiProvider';
import { simulateApiCall } from '../../services/api/apiClient';

export const sendMessage = async (message: string): Promise<AIMessage> => {
  await simulateApiCall({}, 1000);
  const response = getAIResponse(message);
  return {
    role: 'assistant',
    content: response,
    timestamp: new Date().toISOString(),
  };
};
