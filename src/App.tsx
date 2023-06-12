import * as React from 'react';

import MessagesDisplay from './components/MessagesDisplay';
import CodeDisplay from './components/CodeDisplay';

export default function App() {

  const getQuery = async () => {
    try{
       const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message:"create a table"
        })
       }
       const response = await fetch("https:sql.jeanpdr.dev:4000/completions", options)
       const data = await response.json()
       console.log(data)
    }catch (error){
      console.error(error);
    }
  }
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
