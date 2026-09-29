// Safety Report page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '../../components/common/Button';

const categories = ['Harassment', 'Unsafe Driving', 'Wrong Route', 'Unwanted Behaviour', 'Suspicious Activity', 'Other'];

export const SafetyReport: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="page" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '80vh' }}>
        <CheckCircle size={48} color="var(--success)" style={{ margin: '0 auto var(--space-xl)' }} />
        <h2 className="font-bold text-lg mb-sm">Report Submitted</h2>
        <p className="text-secondary mb-xl">Our safety team will review this within 24 hours.</p>
        <Button variant="primary" onClick={() => navigate('/safety')}>Back to Safety</Button>
      </div>
    );
  }

  return (
    <div className="page" id="safety-report-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Safety Report</h1>
      </div>

      <h3 className="section-title mb-md">What happened?</h3>
      <div className="flex flex-wrap gap-sm mb-xl">
        {categories.map(c => (
          <button key={c} className={`chip ${selected === c ? 'selected' : ''}`} onClick={() => setSelected(c)}>{c}</button>
        ))}
      </div>

      <div className="input-group mb-xl">
        <label className="input-label">Description</label>
        <textarea
          className="input"
          rows={4}
          placeholder="Tell us what happened..."
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{ minHeight: 100, resize: 'vertical' }}
        />
      </div>

      <Button variant="emergency" size="lg" fullWidth onClick={() => setSubmitted(true)} disabled={!selected} icon={<AlertTriangle size={18} />}>
        Submit Report
      </Button>
    </div>
  );
};
