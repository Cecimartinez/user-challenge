import { useEffect, useState } from 'react';
import './App.css';
import { UserTable } from './components/UserTable/UserTable';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showColor, setShowColor] = useState(false);
  const [sortByCountry, setSortByCountry] = useState(false);

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

  useEffect(() => {
    fetch('https://randomuser.me/api?results=10')
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results);
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
      <h1 className='text-red-500'>Prueba Técnica!</h1>
      <header>
        <button onClick={toggleColor} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg'>
          Color rows
        </button>
        <button onClick={toggleSortByCountry} className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg'>
          {sortByCountry ? 'No ordenar por país' : 'Ordenar por país'}
        </button>
      </header>
      <main>
        <UserTable showColor={showColor} users={sortedUsers} deleteUser={handleDelete} />
      </main>
    </div>
  );
};

export default App;
