// LoadingState component
import React from 'react';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message = 'Loading...' }) => (
  <div className="loading-state">
    <div className="spinner" />
    <p className="text-secondary">{message}</p>
  </div>
);
