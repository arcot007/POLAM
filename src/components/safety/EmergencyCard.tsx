// EmergencyCard — emergency contact card
import React from 'react';
import { EmergencyContact } from '../../models/EmergencyContact';
import { Phone, Star, Trash2 } from 'lucide-react';

interface Props {
  contact: EmergencyContact;
  onRemove?: (id: string) => void;
}

export const EmergencyCard: React.FC<Props> = ({ contact, onRemove }) => (
  <div className="card card-compact card-flat">
    <div className="flex items-center gap-md">
      <div className="avatar avatar-sm" style={{
        background: contact.isPrimary ? 'var(--emergency)' : 'var(--bg-hover)',
        color: contact.isPrimary ? 'white' : 'var(--text-secondary)',
      }}>
        {contact.isPrimary ? <Star size={14} fill="white" /> : contact.name[0]}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-sm">
          <span className="font-medium">{contact.name}</span>
          {contact.isPrimary && <span className="badge badge-emergency">Primary</span>}
        </div>
        <div className="text-sm text-secondary">{contact.relationship} • {contact.phone}</div>
      </div>
      <div className="flex items-center gap-sm">
        <a href={`tel:${contact.phone}`} className="btn btn-ghost btn-sm btn-icon">
          <Phone size={16} />
        </a>
        {onRemove && (
          <button className="btn btn-ghost btn-sm btn-icon" onClick={() => onRemove(contact.id)}>
            <Trash2 size={16} color="var(--emergency)" />
          </button>
        )}
      </div>
    </div>
  </div>
);
