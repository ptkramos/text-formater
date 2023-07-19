import React, { useContext, useState } from 'react';
import { TextContext } from '../context/TextContext';
import Clipboard from 'clipboard';
import './FormattedText.css';

const FormattedText = () => {
  const { formattedText } = useContext(TextContext);
  const [copyMessage, setCopyMessage] = useState('');

  const handleCopy = () => {
    const clipboard = new Clipboard('.copy-button', {
      text: () => formattedText,
    });

    clipboard.on('success', (e) => {
      setCopyMessage('Copiado com sucesso!');
      clipboard.destroy();
      setTimeout(() => {
        setCopyMessage('');
      }, 1500);
    });

    clipboard.on('error', (e) => {
      setCopyMessage('Não há o que copiar!');
      clipboard.destroy();
      setTimeout(() => {
        setCopyMessage('');
      }, 1500);
    });
  };

  return(
    <>
    <div className='formatted-text-container'>
      <code className='formatted-text'>{formattedText}</code>
      <button
      className='copy-button'
      onClick={handleCopy}
      >
        Copiar
      </button>
    </div>
    <div>
      { copyMessage &&
      <div className='copy-message'>
        {copyMessage}
      </div> }
    </div>
    </>
  );
};

export default FormattedText;