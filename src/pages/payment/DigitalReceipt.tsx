// Digital Receipt
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Share2, MapPin, User, Car, Clock } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { formatCurrency } from '../../utils/formatters';

export const DigitalReceipt: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page" id="digital-receipt-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Digital Receipt</h1>
      </div>

      <div className="card mb-xl" style={{ border: '2px solid var(--teal)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 4,
          background: 'linear-gradient(90deg, var(--teal), var(--navy))',
        }} />

        <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', paddingTop: 'var(--space-md)' }}>
          <div className="font-bold text-lg" style={{ color: 'var(--navy)' }}>POLAM</div>
          <div className="text-sm text-secondary">Digital Receipt</div>
        </div>

        <div className="flex flex-col gap-md mb-lg">
          <div className="info-row"><span className="info-row-label">Trip Code</span><span className="info-row-value font-bold">POLAM4827</span></div>
          <div className="info-row"><span className="info-row-label">Date</span><span className="info-row-value">{new Date().toLocaleDateString('en-IN')}</span></div>
          <div className="info-row">
            <span className="info-row-label flex items-center gap-xs"><MapPin size={12} /> From</span>
            <span className="info-row-value">Taramani MRTS</span>
          </div>
          <div className="info-row">
            <span className="info-row-label flex items-center gap-xs"><MapPin size={12} /> To</span>
            <span className="info-row-value">Guindy</span>
          </div>
          <div className="info-row">
            <span className="info-row-label flex items-center gap-xs"><User size={12} /> Driver</span>
            <span className="info-row-value">Arun Selvam</span>
          </div>
          <div className="info-row">
            <span className="info-row-label flex items-center gap-xs"><Car size={12} /> Vehicle</span>
            <span className="info-row-value">Maruti Ciaz (White)</span>
          </div>
          <div className="info-row">
            <span className="info-row-label flex items-center gap-xs"><Clock size={12} /> Duration</span>
            <span className="info-row-value">32 min (7.2 km)</span>
          </div>
        </div>

        <div className="divider" />

        <div className="flex flex-col gap-sm">
          <div className="info-row"><span className="info-row-label">Total Ride Fare</span><span className="info-row-value">{formatCurrency(120)}</span></div>
          <div className="info-row"><span className="info-row-label">Your Share</span><span className="info-row-value font-bold text-lg">{formatCurrency(85)}</span></div>
          <div className="info-row"><span className="info-row-label">You Saved</span><span className="info-row-value fare-saved">{formatCurrency(35)}</span></div>
          <div className="info-row"><span className="info-row-label">Payment</span><span className="info-row-value">UPI ✓</span></div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)', paddingTop: 'var(--space-lg)', borderTop: '1px dashed var(--border)' }}>
          <p className="text-sm text-secondary">Thank you for choosing POLAM! 🙏</p>
          <p className="text-sm text-tertiary">Travel Together. Share the Ride.</p>
        </div>
      </div>

      <div className="flex gap-md">
        <Button variant="outline" className="flex-1" icon={<Download size={16} />}>Download</Button>
        <Button variant="outline" className="flex-1" icon={<Share2 size={16} />}>Share</Button>
      </div>
    </div>
  );
};
