import React from 'react';
import InputForm from './components/InputForm';
import FormattedText from './components/FormattedText';
import { TextProvider } from './context/TextContext';
import './styles.css';

function App() {
  return (
    <div>
      <TextProvider>
        <InputForm />
        <FormattedText />
      </TextProvider>
    </div>
  );
}

export default App;
