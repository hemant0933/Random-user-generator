import './App.css';
import React,{ useEffect, useState} from 'react'
import UserCard from './components/UserCard';
import axios from 'axios';

function App() {
  const [details,setDetails] = useState({});
  const fetchUsers = async () => {
    const {data} = await axios.get("https://randomuser.me/api")
    console.log(data)
    const details = data.results[0]
    setDetails(details);
  }
  
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className='main-wrapper'>
        <UserCard details= {details}/>
        <button className='change-Btn btn btn-danger w-50 mt-3' onClick={fetchUsers}>Random User</button>
    </div>
  );
}

export default App;
