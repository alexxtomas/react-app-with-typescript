import React, { useEffect, useState } from 'react';
import './App.css';
interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

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

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])
  return (
    <div className="App">
      <h1>Subs</h1>
      <ul>
      {
        subs.map(sub => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          )
        })
      }
      </ul>
   
    </div>
  );
}

export default App;
