import { useEffect, useState } from 'react';
import './App.css';
import { UserTable } from './components/UserTable/UserTable';


export function App() {
  const [users, setUsers] = useState([]);
  const [showColor, setColor] = useState(false);

  const toggleColor = () => {
    setColor(!showColor);
  }

  useEffect(() => {
    fetch("https://randomuser.me/api?results=10")
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
      })
      .catch(err => {
        console.error(err);
      });

  }, []);
  return (
    <div>
      <h1 className='text-red-500'>Prueba Técnica!</h1>
      <header>
      <button onClick={toggleColor} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Color rows</button>
      </header>
      <main>
        <UserTable showColor={showColor} users={users} />
      </main>
    </div>
  );
}

export default App;
