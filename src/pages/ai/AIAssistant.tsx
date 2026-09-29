// AI Assistant page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AIChat } from '../../components/ai/AIChat';

export const AIAssistant: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: 480, margin: '0 auto' }} id="ai-assistant-page">
      <div className="page-header">
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>POLAM AI</h1>
      </div>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <AIChat />
      </div>
    </div>
  );
};
