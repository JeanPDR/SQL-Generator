import * as React from 'react';

import MessagesDisplay from './components/MessagesDisplay';
import CodeDisplay from './components/CodeDisplay';

export default function App() {

  const getQuery = async (): Promise<void> => {
    try {
      const options: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: "create a table"
        })
      };
  
      const response = await fetch("https://sql-generator-7ybdtvzx0-jeanpdr.vercel.app:4000/completions", options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  getQuery();
  return (
    <div className="app">
      <MessagesDisplay />
      <input />
      <CodeDisplay />
      <div className="button-container">
        <button id="get-query" onClick={getQuery}>obter consulta</button>
        <button id="clear-chat">limpar conversa</button>
      </div>
    </div>
  );
}
