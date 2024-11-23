import { useEffect, useState } from "react";
import { IUser } from "../interfaces/user.interfaces";
import { getUsers } from "../api/getUsers";

const useGetUsers = () => {
  const [user, setUser] = useState<IUser[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUsers()
      .then(data => setUser(data))
      .catch(() => setError("Failed to fetch users"));
  }, []); 

  if (error) {
    console.error(error);
  }

  return user;
};

export default useGetUsers;
