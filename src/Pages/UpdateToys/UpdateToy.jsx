import { Toaster, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

const UpdateToy = () => {
  const { register, handleSubmit } = useForm();
  const [control, setControl] = useState(false);
  const navigate = useNavigate();
  const toy = useLoaderData();
  const {
    details,
    photoUrl,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    subCategory,
    toyName,
    _id,
  } = toy;
  const handleJobUpdate = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/updateToy/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
          toast.success("Updated Successfully");
          navigate("/mytoys");
        }
        console.log(result);
      });
  };

  return (
    <div className="my-container">
      <h2 className="text-center text-3xl font-bold text-orange-500">
        Update Toy Info
      </h2>
      <form onSubmit={handleSubmit(handleJobUpdate)}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("photoUrl")}
              placeholder="Photo URl of toy"
              className="input input-bordered"
              value={photoUrl}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              placeholder="Name of toy"
              {...register("toyName")}
              className="input input-bordered"
              value={toyName}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              {...register("sellerName")}
              className="input input-bordered"
              value={sellerName}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="email"
              {...register("sellerEmail")}
              className="input input-bordered"
              value={sellerEmail}
            />
          </div>

          <div className="form-control ">
            <label className="label ">
              <span className="label-text">Sub-category</span>
            </label>
            <div className="input-group rounded-lg">
              <select
                className="text-input w-full"
                {...register("sub-category")}
                defaultValue={subCategory}
                // defaultValue={props?.job?.category}
              >
                <option value="Sports">Sports</option>
                <option value="Truck">Truck</option>
                <option value="Crossover">Crossover</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              {...register("price")}
              placeholder="Price"
              className="input input-bordered"
              defaultValue={price}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              {...register("rating")}
              placeholder="Rating"
              className="input input-bordered"
              value={rating}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              {...register("quantity")}
              placeholder="Available quantity"
              className="input input-bordered"
              defaultValue={quantity}
            />
          </div>
          <div className="form-control hidden">
            <label className="label">
              <span className="label-text">ID</span>
            </label>
            <input
              type="text"
              {...register("_id")}
              placeholder="id"
              className="input input-bordered"
              defaultValue={_id}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details description</span>
          </label>
          <input
            type="text"
            {...register("details")}
            placeholder="Description"
            className="input input-bordered h-20"
            defaultValue={details}
          />
        </div>
        {/* Button */}
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Update"
          />
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
};

export default UpdateToy;
