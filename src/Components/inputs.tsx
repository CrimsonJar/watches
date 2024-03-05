import React, { useState } from "react";
import "./inputs.css";
type InputsProps = {
  onAddWatches: (name: string, timezone: string) => void;
};

const Inputs: React.FC<InputsProps> = ({ onAddWatches }) => {
  const [name, setName] = useState("");
  const [timezone, setTimezone] = useState<string>("");

  const handleAddClick = () => {
    onAddWatches(name, timezone);
    setName("");
    setTimezone("");
  };

  return (
    <div>
      <div className='inputsDiscription'>
        <p>Название</p>
        <p>Временная зона</p>
      </div>
      <div>
        <input
          type='text'
          placeholder='Название'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='формат "2 или -4'
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
        />
        <button onClick={handleAddClick}>Добавить</button>
      </div>
    </div>
  );
};

export default Inputs;
