import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { getAllSubs } from './services/getAllSubs';
import { Sub } from './types';

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  const handleNewSub =(newSub: Sub): void =>{
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n=> n + 1)

  }

  useEffect(()=>{

    getAllSubs()
    .then(setSubs)
  },[])
 

  return (
    <div className="App">
      <h1>Nico subs</h1>
        <List subs={subs}/>
        New Subs: {newSubsNumber}
        <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
