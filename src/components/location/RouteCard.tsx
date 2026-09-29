// RouteCard — shows a transport comparison route option
import React from 'react';
import { TransportOption } from '../../models/Route';
import { formatCurrency, formatDuration } from '../../utils/formatters';
import { Bus, Train, Navigation, Footprints, Zap } from 'lucide-react';

const modeIcon: Record<string, React.ReactNode> = {
  polam: <Zap size={20} color="var(--teal)" />,
  bus: <Bus size={20} color="var(--text-secondary)" />,
  metro: <Train size={20} color="var(--info)" />,
  auto: <Navigation size={20} color="var(--warning)" />,
  walk: <Footprints size={20} color="var(--text-tertiary)" />,
  bus_metro: <Train size={20} color="var(--info)" />,
};

interface RouteCardProps {
  option: TransportOption;
  selected?: boolean;
  onClick?: () => void;
}

export const RouteCard: React.FC<RouteCardProps> = ({ option, selected, onClick }) => (
  <div
    className={`card card-compact card-clickable ${selected ? '' : 'card-flat'} ${option.recommended ? '' : ''}`}
    onClick={onClick}
    style={{
      border: selected ? '2px solid var(--teal)' : option.recommended ? '2px solid var(--teal)' : undefined,
      background: option.recommended ? 'var(--teal-bg)' : undefined,
    }}
    id={`route-option-${option.id}`}
  >
    <div className="flex items-center gap-md">
      <div style={{
        width: 44, height: 44, borderRadius: 'var(--radius-md)',
        background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {modeIcon[option.mode] || <Navigation size={20} />}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-sm">
          <span className="font-semibold">{option.label}</span>
          {option.recommended && <span className="badge badge-teal">Best Value</span>}
        </div>
        <span className="text-sm text-secondary">{option.details}</span>
      </div>
      <div className="text-right">
        <div className="font-bold text-md">{formatCurrency(option.cost)}</div>
        <div className="text-sm text-secondary">{formatDuration(option.duration)}</div>
      </div>
    </div>
  </div>
);
