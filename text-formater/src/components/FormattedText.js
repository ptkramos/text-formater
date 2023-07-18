import React, { useContext } from 'react';
import { TextContext } from '../context/TextContext';

const FormattedText = () => {
  const { formattedText } = useContext(TextContext);

  return(
    <div>
      <code>{formattedText}</code>
    </div>
  );
};

export default FormattedText;