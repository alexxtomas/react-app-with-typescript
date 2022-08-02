import { useEffect, useState, useRef } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form'
import {Sub, SubsResponseFromApi} from './types'


interface AppState {
  subs: Array<Sub>
}




function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])

  const divRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const fetchSubs = (): Promise<SubsResponseFromApi> => {
      return fetch('http://localhost:3001/subs')
              .then(res => res.json())
    }

    const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
      return apiResponse.map(subFromApi => {
        const {
          nick,
          months: subMonths,
          profileUrl: avatar,
          description
        } = subFromApi

        return {
          nick,
          description,
          avatar,
          subMonths
        }
      })
    }

    fetchSubs()
      .then(apiSubs => {
        const subs = mapFromApiToSubs(apiSubs)
        setSubs(subs)
      })
    
          
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
