/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user, loading } = useContext(AuthContext);

  const [control, setControl] = useState(false);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toy/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [control, user]);
  console.log(myToys);
  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");

    if (proceed) {
      fetch(`http://localhost:5000/toy/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Toy Successfully Deleted");
            const remaining = myToys.filter((myToy) => myToy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };

  return (
    <div className="overflow-x-auto w-full my-container">
      <h3 className="text-3xl text-center font-bold text-orange-500 my-8">
        My Toys : {myToys.length}
      </h3>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Image</th>
            <th>Name</th>
            <th>Available Quantity</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myToys.map((myToy, index) => (
            <tr key={myToy._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={myToy.photoUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{myToy.toyName}</td>
              <td>{myToy.quantity}</td>
              <th>
                <Link to={`/updatetoy/${myToy._id}`}>
                  <button className="btn btn-outline btn-success">Edit</button>
                </Link>
              </th>
              <th>
                <button
                  onClick={() => handleDelete(myToy._id)}
                  className="btn btn-outline btn-error"
                >
                  Delete
                </button>
                <Toaster position="top-center" reverseOrder={true} />
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Available Quantity</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyToys;
