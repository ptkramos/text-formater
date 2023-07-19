import React, { useEffect } from 'react';
import './CopyMessage.css';

const CopyMessage = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="copy-message">
      <p>{message}</p>
    </div>
  );
};

export default CopyMessage;
