/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

import { FaEdit } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import useTitle from "../../hooks/useTitle";
const MyToys = () => {
  const [sortOrder, setSortOrder] = useState("ascending");
  const { user, loading } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useTitle("My Toys");
  useEffect(() => {
    fetch(`http://localhost:5000/toy/${user.email}?sort=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [sortOrder, user, myToys]);
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

  const handleSortClick = (sort) => {
    setSortOrder(sort);
  };
  return (
    <div className="overflow-x-auto w-full my-container">
      <div className="bg-slate-200 rounded-xl w-1/2 flex justify-center mx-auto my-8">
        <button
          className={` px-8 py-4 rounded text-xl font-bold ${
            sortOrder == "ascending" ? " bg-orange-500 text-white" : ""
          }`}
          onClick={() => handleSortClick("ascending")}
        >
          Sort Toys ascending
        </button>
        <button
          className={` px-8 py-4 rounded text-xl font-bold ${
            sortOrder == "descending" ? " bg-orange-500 text-white" : ""
          }`}
          onClick={() => handleSortClick("descending")}
        >
          Sort Toys descending
        </button>
      </div>

      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
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
              <td>{myToy.price}</td>
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
