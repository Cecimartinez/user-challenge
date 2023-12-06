import { useEffect, useState } from 'react';
import './App.css';
import { UserTable } from './components/UserTable/UserTable';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://randomuser.me/api?results=10")
    .then(async res=> await res.json())
    .then(res=>{
      setUsers(res.results)
    })
    .catch(err =>{
      console.error(err);
    });
    
  },[]);
  return (
    <div>
      <h1 className='text-red-500'>Prueba Técnica!</h1>
      <UserTable users ={users}/>
    </div>
  );
}

export default App;
