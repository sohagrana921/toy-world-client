import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add Toy");
  const handleAddToy = (event) => {
    event.preventDefault();
    const categorySelect = document.getElementById("categorySelect");
    const subCategory = categorySelect.value;
    const form = event.target;
    const photoUrl = form.photoUrl.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    // const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const toyInfo = {
      photoUrl,
      toyName,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      details,
    };
    console.log(toyInfo);

    fetch("https://toy-world-server-seven.vercel.app/addToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Toy Successfully Added");
        }
      });
  };

  return (
    <div className="my-container">
      <h2 className="text-2xl text-center font-bold bg-orange-500 text-white rounded-full py-2 md:w-1/5 mx-auto my-4">
        Add Toys
      </h2>
      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Photo URl of toy"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              placeholder="Name of toy"
              name="toyName"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              value={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="email"
              name="sellerEmail"
              value={user?.email}
              className="input input-bordered"
            />
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <div className="input-group border rounded-lg">
              <select id="categorySelect" className="select w-full">
                <option disabled selected>
                  Pick a sub-category
                </option>
                <option>Sports</option>
                <option>Truck</option>
                <option>Crossover</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="$ Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Available quantity"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details description</span>
          </label>
          <input
            type="text"
            name="details"
            placeholder="Description"
            className="input input-bordered h-20"
          />
        </div>
        {/* Button */}
        <div className="form-control mt-6">
          <input
            className="btn bg-orange-500 btn-block"
            type="submit"
            value="ADD "
          />
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
};

export default AddToy;
