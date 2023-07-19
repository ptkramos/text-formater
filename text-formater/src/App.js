import React from 'react';
import InputForm from './components/InputForm';
import FormattedText from './components/FormattedText';
import NamesList from './components/NamesList';
import { TextProvider } from './context/TextContext';
import { NamesProvider } from './context/NamesContext';
import './styles.css';

function App() {
  return (
    <div>
      <TextProvider>
        <NamesProvider>
          <InputForm />
          <FormattedText />
          <NamesList />
        </NamesProvider>
      </TextProvider>
    </div>
  );
}

export default App;
