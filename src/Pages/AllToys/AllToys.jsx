import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Providers/AuthProvider";

import ToyRow from "../ToyRow/ToyRow";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    fetch(`http://localhost:5000/toyname/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };
  return (
    <div className="my-container">
      <h3 className="text-3xl text-center font-bold text-orange-500 my-8">
        Total Toys : {toys.length}
      </h3>
      <div className="flex justify-center my-6">
        <div className="form-control">
          <div className="input-group">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                placeholder="Search by Toy Name"
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
