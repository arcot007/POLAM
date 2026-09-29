// ErrorState component
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from './Button';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message = 'Something went wrong', onRetry }) => (
  <div className="error-state">
    <AlertTriangle size={48} color="var(--emergency)" />
    <h3 className="empty-state-title">Oops!</h3>
    <p className="empty-state-desc">{message}</p>
    {onRetry && <Button variant="primary" onClick={onRetry}>Try Again</Button>}
  </div>
);
