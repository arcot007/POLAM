// Emergency Contacts page (redirects to TrustedPeople)
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const EmergencyContacts: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate('/trusted-people', { replace: true }); }, [navigate]);
  return null;
};
