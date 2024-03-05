import React, { useState } from "react";

import moment from "moment";
import "moment-timezone";

import "./App.css";
import Watches from "./Components/watches";
import Inputs from "./Components/inputs";

type WatchesData = {
  id: number;
  name: string;
  timezone: string;
};
const App: React.FC = () => {
  const [watchesList, setWatchesList] = useState<WatchesData[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  const handleAddWatches = (name: string, timezone: string) => {
    const offset = parseInt(timezone);
    const currentTime = moment().utcOffset(offset * 60);
    const newWatches: WatchesData = {
      id: idCounter,
      name,
      timezone: currentTime.format("h:mm:ss A"),
    };
    setIdCounter(idCounter + 1);
    setWatchesList((prevWatchesList) => [...prevWatchesList, newWatches]);
  };

  const handleRemove = (id: number) => {
    setWatchesList((prevWatchesList) =>
      prevWatchesList.filter((watch) => watch.id !== id)
    );
  };

  return (
    <div className='App'>
      <Inputs onAddWatches={handleAddWatches} />
      {watchesList.map((watch) => (
        <Watches
          key={watch.id}
          name={watch.name}
          timezone={watch.timezone}
          onDelete={() => handleRemove(watch.id)}
        />
      ))}
    </div>
  );
};

export default App;
