import { type User } from "../../types";

interface Props {
  showColor: boolean;
  users: User[];
  deleteUser: (email : string) => void;
}

export function UserTable({ showColor, users, deleteUser }: Props) {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Pais</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => {
          const isEvenIndex = index % 2 === 0;
          const rowColorClass = showColor ? (isEvenIndex ? 'bg-red-500' : 'bg-blue-500') : '';

          return (
            <tr key={user.email} className={rowColorClass}>
              <td>
                <img src={user.picture.thumbnail} alt="Foto de perfil" className="w-10 h-10" />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => deleteUser(user.email)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}