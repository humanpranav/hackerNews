import React, { useContext } from "react";
import { HistoryContext } from "../App";

const History = (search) => {
  const { history, setHistory } = useContext(HistoryContext);

  return (
    <div>
      History
      {history.map((data) => {
        return <div key={data}>{data}</div>;
      })}
    </div>
  );
};

export default History;
