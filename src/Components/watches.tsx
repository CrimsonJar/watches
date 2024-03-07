import React, { useEffect, useState } from "react";
import moment from "moment-timezone";

type WatchesProps = {
  name: string;
  timezone: string;
  onDelete: () => void; // Функция для удаления часов
};

const Watches: React.FC<WatchesProps> = ({ name, timezone, onDelete }) => {
  const offset = parseInt(timezone); // Преобразование строки в число

  const [currentTime, setCurrentTime] = useState(
    moment()
      .utcOffset(offset * 60)
      .format("h:mm:ss A")
  );

  const handleRemove = () => {
    onDelete(); // Вызываем функцию для удаления часов
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        moment()
          .utcOffset(offset * 60)
          .format("h:mm:ss A")
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [offset, timezone]);

  return (
    <div>
      <h2>
        Название: {name} (TZ:{timezone})
      </h2>
      <p>Текущее время: {currentTime}</p>
      <button onClick={handleRemove}>❌</button>
    </div>
  );
};

export default Watches;
