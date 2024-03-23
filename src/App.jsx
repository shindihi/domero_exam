import { useState, useEffect } from 'react'
import React from 'react';
import './App.css'

const generateRandChar = () => {
  const char = 'abcdefghijk';
  const randIndex = Math.floor(Math.random() * char.length);
  return char[randIndex];
}

const charToNumber = (char) => {
  return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

const Table = () => {
  const [tableData, setTableData] = useState([]);
  
  useEffect(() =>{
    const data = [];
    for(let i = 0; i < 4; i++){
      const rowData = [];
      for(let j = 0; j < 5; j++){
        rowData.push(generateRandChar());
      }
      data.push(rowData);
    }
    setTableData(data);
  }, []);
  return (
    <table style={{backgroundColor: 'black'}}>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
              {row.map((char, columnIndex) => (
                <td
                  key={`${rowIndex}-${columnIndex}`}
                  style={{backgroundColor: charToNumber(char) % 2 === 0 ? 'yellow' : 'white', color: 'black'}}
                  >
                    {char}
                    
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  return (
    <div>
      <h1>Random Character Table</h1>
      <Table/>
    </div>
  )
}
export default App;