import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../redux/userSlice";
import { RootState, AppDispatch } from "../redux/store";

interface User {
    id: number;
    name: string;
  }

function ListaUtilizadores() {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.users.users);
    const status = useSelector((state: RootState) => state.users.status);

    useEffect(() => {
        dispatch(fetchUsers());
      }, [dispatch]);
    

    if (status === 'loding') return <p>A carregar ...</p>
    if (status === 'failed') return <p>Erro ao carrefar utilizadores</p>


    return (
        <ul>
            {users.map((user: User) =>
            <li key={user.id}>{user.name}</li>)}
        </ul>
    );

}

export default ListaUtilizadores