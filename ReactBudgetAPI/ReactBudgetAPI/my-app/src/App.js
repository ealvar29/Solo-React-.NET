import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import List from './components/List'


function App() {
    const [bills, setBill] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/expense').then((response) => {
            setBill(response.data);
            setLoading(false);
        }).catch(error => setError(error));
    }, []);
    console.log(bills)

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
  return (
      <div>
          <List bill={bills}/>
    </div>
  );
}

export default App;
