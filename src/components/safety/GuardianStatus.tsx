// GuardianStatus — shows guardian mode status
import React from 'react';
import { Shield, Eye, Phone } from 'lucide-react';
import { useGuardian } from '../../hooks/useGuardian';

export const GuardianStatus: React.FC = () => {
  const { isActive, toggle, primaryContact } = useGuardian();

  return (
    <div className={`card ${isActive ? 'card-success' : 'card-flat'}`} style={{ cursor: 'pointer' }} onClick={toggle}>
      <div className="flex items-center gap-md">
        <div style={{
          width: 44, height: 44, borderRadius: 'var(--radius-full)',
          background: isActive ? 'var(--success)' : 'var(--bg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Shield size={22} color={isActive ? 'white' : 'var(--text-tertiary)'} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-sm">
            <span className="font-semibold">Guardian Mode</span>
            <span className={`badge ${isActive ? 'badge-verified' : 'badge-warning'}`}>
              {isActive ? 'Active' : 'Off'}
            </span>
          </div>
          <div className="text-sm text-secondary">
            {isActive ? (
              <span className="flex items-center gap-xs">
                <Eye size={12} /> Live trip shared with {primaryContact?.name || 'contacts'}
              </span>
            ) : 'Tap to enable trip sharing'}
          </div>
        </div>
        {primaryContact && isActive && (
          <div className="flex items-center gap-xs text-sm text-success">
            <Phone size={14} />
          </div>
        )}
      </div>
    </div>
  );
};
