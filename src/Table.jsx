import React from "react";

const Table = () => {
  const data = [
    { id: 1, name: "Jessy", age: 20 },
    { id: 2, name: "Mary", age: 18 },
    { id: 3, name: "Keity", age: 22 },
    { id: 4, name: "Amanda", age: 21 },
  ];
  const handleTableRowClick = (item) => {
    console.log(item);
  };
  return (
    <table>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={() => handleTableRowClick(item)}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
