import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Providers/AuthProvider";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  // console.log(toys);
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
      <h3 className="text-3xl text-center font-bold text-orange-500 my-8">
        Total Toys : {toys.length}
      </h3>
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
              <>
                <tr>
                  <th>{index + 1}</th>
                  <td>{toy.sellerName}</td>
                  <td>{toy.toyName}</td>
                  <td>{toy.subCategory}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>
                    <label htmlFor="my-modal-5" className="btn">
                      open modal
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-5"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">
                          Congratulations random Internet user!
                        </h3>
                        <p className="py-4">
                          You have been selected for a chance to get one year of
                          subscription to use Wikipedia for free!
                        </p>
                        <div className="modal-action">
                          <label htmlFor="my-modal-5" className="btn">
                            Yay!
                          </label>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </>
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
