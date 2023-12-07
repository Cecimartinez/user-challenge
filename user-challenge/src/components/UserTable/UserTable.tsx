import { type User } from "../../types";

interface Props {
  showColor: boolean;
  users: User[];
  deleteUser: (email : string) => void;
}

export function UserTable({ showColor, users, deleteUser }: Props) {
  return (
    <table className="w-full  ">
      <thead >
          <tr className=" my-5 mx-10 ">
          <th className="px-5 py-3 text-sm font-normal text-left  uppercase border-b border-gray-200">Foto</th>
          <th className="px-5 py-3 text-sm font-normal text-left  uppercase border-b border-gray-200">Nombre</th>
          <th className="px-5 py-3 text-sm font-normal text-left  uppercase border-b border-gray-200">Apellido</th>
          <th className="px-5 py-3 text-sm font-normal text-left  uppercase border-b border-gray-200">Pais</th>
          <th className="px-5 py-3 text-sm font-normal text-left  uppercase border-b border-gray-200">Acciones</th>
        </tr> 
      </thead>

      <tbody>
        {users.map((user, index) => {
          const isEvenIndex = index % 2 === 0;
          const rowColorClass = showColor ? (isEvenIndex ? 'bg-[#1C1C1C]' : 'bg-[#151515]') : '';

          return (
            <tr key={user.email} className={rowColorClass } >
              <td className="mx-20">
                <img src={user.picture.thumbnail} alt="Foto de perfil" className="w-10 h-10 rounded-full my-2 mx-5" />
              </td>
              
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => deleteUser(user.email)} className="btn btn-outline btn-primary my-2 mx-5">
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}