import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface User {
  id: string;
  name: string;
  avatar: string;
}

const defaultUser: User = {
  id: "1",
  name: "Beaxperez",
  avatar: "/images/stitch-avo.png",
};

const UserSelectionPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([defaultUser]);
  const router = useRouter();

  const handleUserSelect = (userId: string) => {
    router.push("/home");
  };
  const handleSurprise = () => {
    router.push("/surprise");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-12">
        ¿Quién está viendo?
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-center"
            onClick={() => handleUserSelect(user.id)}
          >
            <div className="w-32 h-32 rounded-full overflow-hidden cursor-pointer transition-transform hover:scale-110">
              <Image
                src={user.avatar}
                alt={user.name}
                width={128}
                height={128}
                objectFit="cover"
              />
            </div>
            <p className="mt-4 text-gray-300">{user.name}</p>
          </div>
        ))}
        <div className="flex flex-col items-center" onClick={handleSurprise}>
          <div className="w-32 h-32 rounded-full overflow-hidden cursor-pointer transition-transform hover:scale-110 bg-gray-700 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <p className="mt-4 text-gray-300">Agregar perfil</p>
        </div>
      </div>
    </div>
  );
};

export default UserSelectionPage;
