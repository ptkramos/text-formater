import React, { createContext, useState } from 'react';

const TextContext = createContext();

const TextProvider = ({ children }) => {
  const [formattedText, setFormattedText] = useState('');
  return (
    <TextContext.Provider value={{ formattedText, setFormattedText }}>
      { children }
    </TextContext.Provider>
  );
};

export {
  TextContext,
  TextProvider
};