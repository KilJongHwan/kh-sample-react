import { useState, useEffect } from "react";

const TableMap = () => {
  const data = [
    { id: 100, name: "jessica", age: 21 },
    { id: 200, name: "reina", age: 20 },
    { id: 300, name: "jenny", age: 22 },
    { id: 400, name: "sakura", age: 20 },
  ];
  const [mapData, setMapData] = useState("");
  useEffect(() => {
    setMapData(data);
  }, []);
  const tableClickEvent = (item) => {
    console.log(item);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {mapData &&
          mapData.map((item) => (
            <tr key={item.id} onClick={() => tableClickEvent(item)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default TableMap;
