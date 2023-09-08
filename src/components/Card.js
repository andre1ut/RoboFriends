import React from 'react';

const Card = ({ name, email, id, username, inputValue }) => {
  const valueIndex = name.toLowerCase().indexOf(inputValue.toLowerCase());

  const highlight = () => {
      if (valueIndex !== -1) {
        let firstWord = name.slice(0, valueIndex);
        let matchedText =name.slice(valueIndex, valueIndex + inputValue.length);
        let lastWord = name.slice(valueIndex + inputValue.length);

        return (
          <h2>
            {firstWord}
            <span style={{ color: 'red' }}>{matchedText}</span>
            {lastWord}
          </h2>
        );
      } else {
        return <h2>{name}</h2>;
      }
  };

  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt={`Robot ${id}`} />
      <div>
        {highlight(name)}
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
