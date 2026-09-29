// AI Provider — abstraction for AI services
export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const AI_RESPONSES: Record<string, string> = {
  'ride': 'I found matching rides for your route. The best match has 82% route overlap with an estimated fare of ₹85 per passenger.',
  'cheap': 'The cheapest option is the MTC Bus at ₹15, but it takes 48 minutes with 1 transfer. POLAM shared ride costs ₹85 but is faster at 32 minutes.',
  'safe': 'For night travel, I recommend enabling Night Safety Mode. It prioritizes verified drivers and well-lit pickup points.',
  'payment': 'You can pay using UPI, Google Pay, PhonePe, or your POLAM Wallet. Your current wallet balance is ₹350.',
  'trip': 'Your most recent trip was POLAM1234 from Taramani to Guindy. The fare was ₹65 and was completed safely.',
  'budget': 'Within your ₹100 budget, I found 2 matching rides. The best match departs at 5:30 PM with ₹85 fare.',
  'default': 'I can help you find rides, compare routes, check fares, manage payments, and access safety features. What would you like to know?',
};

export const getAIResponse = (userMessage: string): string => {
  const msg = userMessage.toLowerCase();
  if (msg.includes('ride') || msg.includes('find') || msg.includes('match')) return AI_RESPONSES['ride'];
  if (msg.includes('cheap') || msg.includes('affordable') || msg.includes('cost')) return AI_RESPONSES['cheap'];
  if (msg.includes('safe') || msg.includes('night') || msg.includes('emergency')) return AI_RESPONSES['safe'];
  if (msg.includes('pay') || msg.includes('wallet') || msg.includes('money')) return AI_RESPONSES['payment'];
  if (msg.includes('trip') || msg.includes('history') || msg.includes('receipt')) return AI_RESPONSES['trip'];
  if (msg.includes('budget') || msg.includes('₹') || msg.includes('under')) return AI_RESPONSES['budget'];
  return AI_RESPONSES['default'];
};
