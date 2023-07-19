import { createContext, useState, useContext, useEffect } from 'react';

const NamesContext = createContext();

const useNamesContext = () => {
  const context = useContext(NamesContext);
  if (!context) {
    throw new Error('useNamesContext must be used within a NamesProvider');
  }
  return context;
};

const NamesProvider = ({ children }) => {
  const [sentNames, setSentNames] = useState([]);

  useEffect(() => {
    const savedNames = JSON.parse(localStorage.getItem('sentNames'));
    if (savedNames) {
      setSentNames(savedNames);
    }
  }, []);

  const isNameSentBefore = (name) => {
    return sentNames.some((sentName) => sentName.toLowerCase() === name.toLowerCase());
  };

  const saveToStorage = (names) => {
    const newSentNames = names.split(/,|&/).map((name) => formatName(name));
    const uniqueNames = newSentNames.filter((name) => !isNameSentBefore(name));
    const updatedNames = [...sentNames, ...uniqueNames];
    setSentNames(updatedNames);
    localStorage.setItem('sentNames', JSON.stringify(updatedNames));
  };

  const formatName = (name, fullName = true) => {
    const trimmedName = name.trim();
    const [firstName, ...lastName] = trimmedName.split(' ');
    const formattedLastName = lastName.join(' ');

    if (fullName) {
      return `#${trimmedName.toUpperCase().replace(' ', '')} | ${firstName.toUpperCase()} ${formattedLastName.toUpperCase()}`;
    } else {
      return `#${trimmedName.toUpperCase().replace(' ', '')}`;
    }
  };

  const handleClearSentNames = () => {
    setSentNames([]);
    localStorage.removeItem('sentNames');
  };

  const value = {
    sentNames,
    setSentNames,
    saveToStorage,
    formatName,
    handleClearSentNames,
  };

  return (
    <NamesContext.Provider value={value}>
      {children}
    </NamesContext.Provider>
  );
};

export { NamesProvider, useNamesContext };
