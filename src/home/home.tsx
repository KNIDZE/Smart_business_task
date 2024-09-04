import { ReactElement, useEffect } from "react";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import TableFilter from "../components/table-filters/tableFilter";
import { getUsersFromApi } from "../store/actions";

export default function Home(): ReactElement {
  const users = useSelector((state: RootState) => state.users.filteredUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsersFromApi(dispatch);
  }, []);
  return (
    <section className="table-section">
      <div className="outline">
        <div className="table-base">
          <h1>Users Table</h1>
          <table>
            <TableFilter />
            <tbody>
              {users.map((user) => (
                <tr key={user.username}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
