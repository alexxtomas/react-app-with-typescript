import { useEffect, useState, useRef } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form'
import {Sub} from './types'


interface AppState {
  subs: Array<Sub>,
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    describe: 'Dapelu is friendly'

  },
  {
    nick: 'paco',
    subMonths: 4,
    avatar: 'https://i.pravatar.cc/150?u=paco',
  }
]


function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumb, setNewSubsNumb] = useState<AppState['newSubsNumber']>()

  const divRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs((s) => ([...s, newSub]))
  }
  return (
    <div className="App" ref={divRef}>
      <h1>Subs</h1>
     <List subs={subs}/>
     <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
