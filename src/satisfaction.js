import React, { useState } from 'react';

const Satisfaction = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h3>Veuillez évaluer votre satisfaction :</h3>
      <div>
        <input
          type="radio"
          id="option1"
          value="1"
          checked={selectedOption === "1"}
          onChange={handleOptionChange}
        />
        <label htmlFor="option1">1</label>

        <input
          type="radio"
          id="option2"
          value="2"
          checked={selectedOption === "2"}
          onChange={handleOptionChange}
        />
        <label htmlFor="option2">2</label>

        <input
          type="radio"
          id="option3"
          value="3"
          checked={selectedOption === "3"}
          onChange={handleOptionChange}
        />
        <label htmlFor="option3">3</label>

        <input
          type="radio"
          id="option4"
          value="4"
          checked={selectedOption === "4"}
          onChange={handleOptionChange}
        />
        <label htmlFor="option4">4</label>

        <input
          type="radio"
          id="option5"
          value="5"
          checked={selectedOption === "5"}
          onChange={handleOptionChange}
        />
        <label htmlFor="option5">5</label>
      </div>
      <p>Vous avez sélectionné l'option {selectedOption}</p>
      
    </div>
    
  );
};

export default Satisfaction;
