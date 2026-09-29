// Trusted People page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';
import { EmergencyCard } from '../../components/safety/EmergencyCard';
import { useGuardian } from '../../hooks/useGuardian';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';

export const TrustedPeople: React.FC = () => {
  const navigate = useNavigate();
  const { contacts, addContact, removeContact } = useGuardian();
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [relationship, setRelationship] = useState('');

  const handleAdd = () => {
    addContact({
      id: `ec-${Date.now()}`,
      userId: 'user-001',
      name,
      relationship,
      phone: `+91 ${phone}`,
      isPrimary: false,
      createdAt: new Date().toISOString(),
    });
    setShowAdd(false);
    setName(''); setPhone(''); setRelationship('');
  };

  return (
    <div className="page" id="trusted-people-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Trusted People</h1>
      </div>

      <p className="text-secondary mb-lg">These people will be notified during your rides when Guardian Mode is active.</p>

      <div className="flex flex-col gap-md mb-xl">
        {contacts.map(c => <EmergencyCard key={c.id} contact={c} onRemove={removeContact} />)}
      </div>

      <Button variant="outline" fullWidth icon={<Plus size={16} />} onClick={() => setShowAdd(true)}>
        Add Trusted Person
      </Button>

      <Modal isOpen={showAdd} onClose={() => setShowAdd(false)} title="Add Trusted Person">
        <div className="flex flex-col gap-lg">
          <div className="input-group">
            <label className="input-label">Name</label>
            <input className="input" placeholder="Contact name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="input-group">
            <label className="input-label">Phone</label>
            <input className="input" placeholder="10-digit number" value={phone} onChange={e => setPhone(e.target.value)} />
          </div>
          <div className="input-group">
            <label className="input-label">Relationship</label>
            <input className="input" placeholder="e.g. Mother, Friend" value={relationship} onChange={e => setRelationship(e.target.value)} />
          </div>
          <Button variant="primary" fullWidth onClick={handleAdd} disabled={!name || !phone}>Add Contact</Button>
        </div>
      </Modal>
    </div>
  );
};
