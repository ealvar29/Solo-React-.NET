import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import List from './components/List'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function App() {
    const [bills, setBill] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(true);
    const [dueDate, setDueDate] = useState(new Date());
    const [newBillName, setNewBillName] = useState("");
    const [cost, setCost] = useState("0");
    const [type, setType] = useState("");
    const [isPaid, setPaid] = useState(true);


    useEffect(() => {
        axios.get('/expense').then((response) => {
            setBill(response.data);
            setLoading(false);
        }).catch(error => setError(error));
    }, []);



    const onSubmit = async (event) => {
        event.preventDefault();
        if (newBillName === "") return;

        await supabase
            .from("Expenses")
            .insert({
                name: newBillName,
                cost: cost,
                due_date: dueDate,
                type: type,
                isCompleted: isPaid,

            })
            .single()
            .then(({ data, error }) => {
                console.log(data, error);
                if (!error) {
                    setBills((prevBills) => [...prevBills, data]);
                }
            });

        setNewBillName("");
        setCost(0);
        setDueDate("");
        setType(false);
    };

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }
    const toggleChange = (e) => {
        setPaid(e.target.value);
        console.log(isPaid)
    };

    const changeExpenseType = (e) => {
        setType(e.target.value)
    }
  return (
      <div className="grid grid-cols-1">
          <form className="justify-center max-w-xl m-4 p-10 bg-white rounded shadow-xl mx-auto">
              <p className="mt-4 text-gray-800 font-medium text-xlg">Budget Application</p>
            <div className="">
                  <label className="mt-4 text-gray-800 font-medium">Name</label>
                  <input
                      className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      type="text"
                      required=""
                      placeholder="Your Name"
                      aria-label="Name"
                      onChange={(e) => {
                          setError("");
                          setNewBillName(e.target.value);
                      }}
                  />
            </div>
            <div className="mt-2">
                <label className="mt-4 text-gray-800 font-medium">Cost</label>
                <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    required=""
                    type="number"
                    min="1" max="1000"
                    placeholder="Cost"
                    aria-label="Cost"
                    onChange={(e) => {
                        setError("");
                        setCost(e.target.value);
                    }}
                />
            </div>
              <div className="mt-2">
                  <label className="mt-4 text-gray-800 font-medium my-5">Expense Type</label>
                  <Box sx={{ minWidth: 120 }}>
                      <FormControl variant="standard" fullWidth>
                          <InputLabel id="demo-simple-select-label">Select Expense Type</InputLabel>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={type}
                              
                              onChange={changeExpenseType}
                          >
                              <MenuItem value="Subscriptions">Subscriptions</MenuItem>
                              <MenuItem value="Utilities">Utilities</MenuItem>
                              <MenuItem value="Phone">Phone</MenuItem>
                              <MenuItem value="Rent">Rent</MenuItem>
                              <MenuItem value="Internet">Internet</MenuItem>
                              <MenuItem value="Auto">Auto</MenuItem>
                              <MenuItem value="Credit Card">Credit Card</MenuItem>
                              <MenuItem value="Gas">Gas</MenuItem>
                              <MenuItem value="Shopping">Shopping</MenuItem>
                              <MenuItem value="Misc.">Misc.</MenuItem>
                          </Select>
                      </FormControl>
                  </Box>
              </div>
              <p className="mt-4 text-gray-800 font-medium">Paid?</p>
              <ToggleButtonGroup
                  value={isPaid}
                  exclusive
                  onChange={toggleChange}
                  className="my-2"
              >
                  <ToggleButton color="success" value="true">Paid</ToggleButton>
                  <ToggleButton color="warning" value="false">Pending</ToggleButton>
              </ToggleButtonGroup>
            <div className="mt-4">
                  <button className="px-4 py-1 text-white font-light tracking-wider bg-blue-600 rounded" type="submit" onClick={onSubmit}>Submit</button>
            </div>
          </form>
          <List bill={bills}/>
    </div>
  );
}

export default App;
