import React, { useState } from 'react';
import { useNamesContext } from '../context/NamesContext';
import './NamesList.css';

const NamesList = () => {
  const { sentNames, handleClearSentNames } = useNamesContext();
  const [copyMessage, setCopyMessage] = useState('');

  const handleClearList = () => {
    handleClearSentNames();
  };

  const handleCopy = () => {
    const namesText = sentNames.join('\n');
    navigator.clipboard.writeText(namesText)
      .then(() => {
        setCopyMessage('Copiado com sucesso!');
        setTimeout(() => {
          setCopyMessage('');
        }, 1500);
      })
      .catch((error) => {
        setCopyMessage('Erro ao copiar!');
        console.error('Erro ao copiar para o clipboard:', error);
      });
  };

  if (sentNames.length === 0) {
    return null;
  }

  return (
    <div className='names-list'>
      <div className='names-list-title'>
        <code>NOVIDADES DA SEÇÃO 👇</code>
        <div className='names-list-buttons'>
          <button onClick={handleCopy}>Copiar Lista</button>
          <button onClick={handleClearList}>Limpar Lista</button>
        </div>
      </div>
      <code>
        {sentNames.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </code>
      {copyMessage && (
        <div className='copy-message'>
          {copyMessage}
        </div>
      )}
    </div>
  );
};

export default NamesList;
