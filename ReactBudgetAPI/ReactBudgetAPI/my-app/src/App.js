import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import List from './components/List'


function App() {
    const [bills, setBill] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(true);
    const [dueDate, setDueDate] = useState(new Date());
    const [newBillName, setNewBillName] = useState("");
    const [cost, setCost] = useState("0");
    const [type, setType] = useState("");

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
      <div className="flex flex-wrap justify-evenly	items-baseline">
          <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
            <p class="text-gray-800 font-medium">Customer information</p>
            <div class="">
              <label class="block text-sm text-gray-00" for="cus_name">Name</label>
              <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" />
            </div>
            <div class="mt-2">
              <label class="block text-sm text-gray-600" for="cus_email">Email</label>
              <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email" />
            </div>
            <div class="mt-2">
              <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
              <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email" />
            </div>
            <div class="mt-2">
              <label class="hidden text-sm block text-gray-600" for="cus_email">City</label>
              <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email" />
            </div>
            <div class="inline-block mt-2 w-1/2 pr-1">
              <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
              <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email" />
            </div>
            <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
              <label class="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
              <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email" />
            </div>
            <p class="mt-4 text-gray-800 font-medium">Payment information</p>
            <div class="">
              <label class="block text-sm text-gray-600" for="cus_name">Card</label>
              <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name" />
            </div>
            <div class="mt-4">
              <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">$3.00</button>
            </div>
          </form>
          <List bill={bills}/>
    </div>
  );
}

export default App;
