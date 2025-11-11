import React, { useRef, useState } from "react";
import { FaClock, FaEdit, FaMapMarkerAlt, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import Container from "../Responsive/Container";
import Swal from "sweetalert2";

const MyFoodCard = ({ foods }) => {
  const { image, foodName, notes, pickup_location, quantity, expiry, _id } =
    foods || {};

  const handleOpenModal = useRef();
  const [loading, setLoading] = useState(false);

  const handleDeleteFood = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22d3a6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Me logout",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/delete-food-data/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            Swal.fire({
              title: "Delete successfully",
              text: "Your account has been delete.",
              icon: "success",
            });
          })
          .catch((error) => {
            toast.error("network error");
          });
      }
    });
  };

  const openModal = () => {
    handleOpenModal.current.showModal();
  };

  const handleUpdateData = (e) => {
    const foodName = e.target.foodName.value;
    const image = e.target.image.value;
    const quantity = e.target.quantity.value;
    const pickup_location = e.target.pickup_location.value;
    const expiry = e.target.expiry.value;
    const notes = e.target.notes.value;

    const update = {
      foodName,
      image,
      quantity,
      pickup_location,
      expiry,
      notes,
    };

    fetch(`http://localhost:3000/update-food/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    }).then(() => {
      toast.success("data update successfully");
    });
  };

  return (
    <>
      <div
        key={_id}
        className="card bg-base-100  rounded-md overflow-hidden border border-neutral/20">
        <div className="relative">
          <img
            src={image}
            alt={foodName}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 right-3 bg-base-100 text-base-content px-3 py-1.5 rounded-full text-sm font-semibold shadow-md">
            {quantity} portions
          </div>
        </div>

        <div className="p-5 space-y-3">
          <h3 className="text-lg font-bold text-base-content line-clamp-1">
            {foodName}
          </h3>

          <p className="text-sm text-muted line-clamp-2">{notes}</p>

          <div className="flex items-center gap-3 text-xs text-muted">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="w-3.5 h-3.5 text-primary" />
              <span className="truncate max-w-[140px]">
                {pickup_location?.split(",")[1]?.trim() || pickup_location}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FaClock className="w-3.5 h-3.5 text-secondary" />
              <span>{expiry}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-neutral/20">
            <div className="flex items-center gap-2 w-full">
              <button
                onClick={openModal}
                className="btn flex-1 btn-primary shadow-none border-none btn-sm rounded-full flex items-center gap-1 ">
                <FaEdit className="w-4 h-4" />
                Edit
              </button>
              <button
                onClick={() => handleDeleteFood(_id)}
                className="btn flex-1  btn-error shadow-none border-none btn-sm rounded-full flex items-center gap-1">
                <FaTrash className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  show  modal and update data  */}

      <dialog
        ref={handleOpenModal}
        className="modal modal-bottom sm:modal-middle">
        <Container>
          <div className="modal-box mx-auto">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-neutral/20">
              <h3 className="text-xl font-bold text-base-content">
                Update your food data
              </h3>
              <form method="dialog">
                <button className="btn btn-ghost btn-circle text-base-content/70 hover:text-error text-xl">
                  ×
                </button>
              </form>
            </div>

            <div className="modal-action ">
              <form
                method="dialog"
                className="space-y-5  "
                onSubmit={handleUpdateData}>
                <div className="flex flex-row items-center justify-between gap-5  ">
                  <div className="flex-3">
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-base-content mb-1">
                      Food Name
                    </label>
                    <input
                      name="foodName"
                      type="text"
                      defaultValue={foodName}
                      className="input input-bordered w-full rounded-lg focus:border-primary"
                      placeholder="Enter food name "
                    />
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="quantity"
                      className="block text-xs font-medium text-base-content mb-1">
                      Quantity
                    </label>
                    <input
                      name="quantity"
                      defaultValue={quantity}
                      type="number"
                      min="1"
                      className="input input-bordered w-full rounded-lg focus:border-primary"
                      placeholder="Enter available quantity "
                    />
                  </div>
                </div>

                {/* Image URL */}
                <div className="w-full">
                  <label
                    htmlFor="image"
                    className="block text-xs font-medium text-base-content mb-1">
                    Image URL (from imgbb)
                  </label>
                  <input
                    name="image"
                    type="url"
                    defaultValue={image}
                    className="input input-bordered w-full rounded-lg focus:border-primary"
                    placeholder="https://i.ibb.co/..."
                  />
                </div>
                <div className="flex flex-col md:flex-row  items-center justify-between gap-5">
                  {/* Pickup Location */}
                  <div className="w-full">
                    <label
                      htmlFor="pickup_location"
                      className="block text-xs font-medium text-base-content mb-1">
                      Pickup Location
                    </label>
                    <input
                      name="pickup_location"
                      type="text"
                      defaultValue={pickup_location}
                      className="input input-bordered w-full rounded-lg focus:border-primary"
                      placeholder="Enter pickup location"
                    />
                  </div>
                  {/* Expiry Date */}
                  <div className="w-full">
                    <label
                      htmlFor="expiry"
                      className="block text-xs font-medium text-base-content mb-1">
                      Expiry Date
                    </label>
                    <input
                      name="expiry"
                      type="date"
                      defaultValue={expiry}
                      className="input input-bordered w-full rounded-lg focus:border-primary"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-xs font-medium text-base-content mb-1">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    defaultValue={notes}
                    className="textarea textarea-bordered w-full rounded-lg focus:border-primary resize-none"
                    placeholder="Any special instructions or details..."></textarea>
                </div>
                {loading ? (
                  <button className="btn btn-success w-full rounded-full shadow-none transition-all duration-300 ">
                    <span className="loading loading-infinity loading-md"></span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-success w-full rounded-full shadow-none transition-all duration-300 ">
                    Update Food info
                  </button>
                )}
              </form>
              {/* if there is a button in form, it will close the modal */}
            </div>
          </div>
        </Container>
      </dialog>
    </>
  );
};

export default MyFoodCard;
