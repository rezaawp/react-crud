import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const [users, setUsers] = useState()
    
    const getUsers = async () => {
        try {
            let res = await axios.get('http://localhost:5000/users')
            setUsers(res.data)
        } catch (e) {
            console.log('error = ',e);
        }
        console.log('getUsers');
    }

    const deleteUser = async (id) => {
        try {

        } catch (e) {

        }
    }

    useEffect(() => {
        getUsers();
        console.log('data => ',users);
    }, [])

    return ( 
        <div className="columns mt-5">
      <div className="column is-half">
        <Link to="add" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
     );
}
 
export default Home;