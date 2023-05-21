import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Providers/AuthProvider";

import ToyRow from "../ToyRow/ToyRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useTitle("All Toys");
  useEffect(() => {
    fetch(`https://toy-world-server-seven.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    fetch(`https://toy-world-server-seven.vercel.app/toyname/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <div className="my-container">
      <h3 className="text-2xl text-center font-bold bg-orange-500 text-white rounded-full py-2 md:w-1/5 mx-auto">
        Total Toys : {toys.length || ""}
      </h3>
      <div className="flex justify-center my-6">
        <div className="form-control">
          <div className="input-group">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                placeholder="Search "
                className="input input-bordered"
              />
              <input
                type="submit"
                value="Search"
                className="btn btn-outline btn-info"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <ToyRow key={toy._id} index={index} toy={toy}></ToyRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>SELLER</th>
              <th>TOY NAME</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
