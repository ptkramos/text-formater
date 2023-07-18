import React, { useContext, useState } from 'react';
import { TextContext } from '../context/TextContext';
import emojis from '../data/emojis';

const InputForm = () => {
  const { setFormattedText } = useContext(TextContext);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const getEmojis = (input3) => {
    let emojisArray = [];

    for (let term in emojis) {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      if (input3.match(regex)) {
        emojisArray.push(emojis[term]);
      }
    }
    return emojisArray.slice(0, 3);
  }

  const handleFormatText = () => {
    let formatInput1 = input1.toUpperCase()
    .replace('RK', 'REALITYKINGS');

    let formatInput2 = input2
    .toUpperCase()
    .replace(' ', '')
    .replace(',', (_, index, str) => (str.lastIndexOf(',') === index ? '&' : ''));

    let formatInput3 = input3
    .replace('And', 'and');

    const emojis = getEmojis(input3);

    let formattedText = `**${formatInput1}** #${formatInput2} | __${formatInput3}__ ${emojis.join('')}`;

    setFormattedText(formattedText);
  };

  return (
    <>
      <input
        type='text'
        placeholder='Primeiro input'
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type='text'
        placeholder='Segundo input'
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <input
        type='text'
        placeholder='Terceiro input'
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
      />
      <button onClick={handleFormatText}>Formatar texto</button>
    </>
  );
};

export default InputForm;