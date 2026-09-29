// AI Chat component — in-app AI assistant
import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const AI_RESPONSES: Record<string, string> = {
  default: "I'm POLAM AI! I can help you find rides, compare routes, and answer safety questions. What would you like to know?",
  ride: "Based on your route from Taramani to Guindy, I found 3 matching rides. The best match is an 82% match with Arun Selvam — a verified driver with a 4.8★ rating. Your share would be just ₹85, saving ₹35 compared to an auto!",
  safety: "POLAM has multiple safety features: Guardian Mode shares your live trip with trusted contacts, AI monitors route deviations in real-time, and you can trigger SOS with a long-press. All drivers are verified with multi-level verification.",
  fare: "POLAM rides typically cost 40-60% less than auto rickshaws. For a 7 km ride, you'd pay around ₹85 instead of ₹180 for an auto — that's ₹95 saved! Fares are split fairly based on each passenger's distance.",
  community: "Community rides connect you with people from your college, company, or organization. When you verify your affiliation, you get matched with co-riders you already share a community with, adding an extra layer of trust.",
};

export const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: AI_RESPONSES.default },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);

    const lowerInput = input.toLowerCase();
    let response = AI_RESPONSES.default;
    if (lowerInput.includes('ride') || lowerInput.includes('find') || lowerInput.includes('match')) response = AI_RESPONSES.ride;
    else if (lowerInput.includes('safe') || lowerInput.includes('guardian') || lowerInput.includes('sos')) response = AI_RESPONSES.safety;
    else if (lowerInput.includes('fare') || lowerInput.includes('cost') || lowerInput.includes('price') || lowerInput.includes('save')) response = AI_RESPONSES.fare;
    else if (lowerInput.includes('community') || lowerInput.includes('college') || lowerInput.includes('company')) response = AI_RESPONSES.community;

    setTimeout(() => {
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: response }]);
    }, 800);
    setInput('');
  };

  return (
    <div className="flex flex-col" style={{ height: '100%' }}>
      <div className="flex-1" style={{ overflowY: 'auto', padding: 'var(--space-lg)' }}>
        <div className="flex flex-col gap-md">
          {messages.map(msg => (
            <div key={msg.id} className={`flex gap-sm ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'assistant' && (
                <div className="avatar avatar-sm" style={{ background: 'var(--teal)' }}>
                  <Bot size={16} />
                </div>
              )}
              <div style={{
                maxWidth: '80%',
                padding: 'var(--space-md) var(--space-lg)',
                borderRadius: msg.role === 'user'
                  ? 'var(--radius-lg) var(--radius-lg) var(--radius-sm) var(--radius-lg)'
                  : 'var(--radius-lg) var(--radius-lg) var(--radius-lg) var(--radius-sm)',
                background: msg.role === 'user' ? 'var(--navy)' : 'var(--bg)',
                color: msg.role === 'user' ? 'white' : 'var(--text-primary)',
                fontSize: 'var(--font-base)',
                lineHeight: 1.5,
              }}>
                {msg.content}
              </div>
              {msg.role === 'user' && (
                <div className="avatar avatar-sm" style={{ background: 'var(--navy-light)' }}>
                  <User size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{
        padding: 'var(--space-md) var(--space-lg)',
        borderTop: '1px solid var(--border-light)',
        background: 'var(--bg-white)',
      }}>
        <div className="flex items-center gap-sm">
          <input
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask POLAM AI..."
            id="ai-chat-input"
          />
          <button className="btn btn-primary btn-icon" onClick={sendMessage} aria-label="Send">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
