/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import { FaEdit } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
const MyToys = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [control, setControl] = useState(false);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toy/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [control, user]);
  // console.log(myToys);

  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete?");

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
      <h3 className="text-2xl text-center font-bold bg-orange-500 text-white rounded-full py-2 md:w-1/5 mx-auto my-8">
        My Toys : {myToys.length || ""}
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
                <Link
                  to={`/update/${myToy._id}`}
                  className="btn btn-sm btn-outline btn-success"
                >
                  <span className="mr-2">Update</span> <FaEdit></FaEdit>
                </Link>
              </th>
              <th>
                <button
                  onClick={() => handleDelete(myToy._id)}
                  className="btn btn-sm btn-outline btn-error"
                >
                  <span className="mr-2">Delete</span> <HiTrash></HiTrash>
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
