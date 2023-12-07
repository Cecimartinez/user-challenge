import { useEffect, useRef, useState } from 'react';
import './index.css';
import { UserTable } from './components/UserTable/UserTable';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showColor, setShowColor] = useState(false);
  const [sortByCountry, setSortByCountry] = useState(false);
  const originalUsers = useRef<User[]>([])

  const toggleColor = () => {
    setShowColor((prevShowColor) => !prevShowColor);
  };

  const toggleSortByCountry = () => {
    setSortByCountry((prevSortByCountry) => !prevSortByCountry);
  };

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers);
  };

  const handleReset =()=>{
    setUsers(originalUsers.current)
  }
  

  useEffect(() => {
    fetch('https://randomuser.me/api?results=10')
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results);
        originalUsers.current=res.results

      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const sortedUsers = sortByCountry
    ? [...users].sort((a, b) => a.location.country.localeCompare(b.location.country))
    : users;

  return (
    <div>
      <h1 className='text-[#cfcfcf] font-normal'>User Challenge</h1>
      <header className='my-5  py-1 rounded-xl'>
        <button onClick={toggleColor} className=' mx-2 text-sm bg-indigo-600 text-white font-normal border-0 '>
          Color rows
        </button>
        <button onClick={toggleSortByCountry} className=' mx-2 text-sm bg-indigo-600 text-white font-normal border-0 '>
          {sortByCountry ? 'No ordenar por país' : 'Ordenar por país'}
        </button>
        <button onClick={handleReset} className=' mx-2 text-sm bg-indigo-600 text-white font-normal border-0 '>
          Reset Users
        </button>
      </header>
      <main>
        <UserTable showColor={showColor} users={sortedUsers} deleteUser={handleDelete} />
      </main>
    </div>
  );
};

export default App;
