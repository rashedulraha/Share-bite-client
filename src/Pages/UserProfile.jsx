import React, { useContext, useRef, useState } from "react";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Container from "../Components/Responsive/Container";
import AuthContext from "../Contaxt/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { user, deleteUserAccount, signout, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const updateProfileModal = useRef();

  const name = user?.displayName;
  const photoURL = user?.photoURL;

  const currentTime = "November 10, 2025 02:28 PM +06";
  const country = "BD";

  const handleSignout = () => {
    signout();
    navigate("/login");
    toast.success("Signout successfully");
  };

  const handleDeleteAccount = () => {
    deleteUserAccount().then(() => {
      signout();
      navigate("/register");
      toast.success("Your account has bin delete successfully");
    });
  };

  const handleUpdateProfile = () => {
    updateProfileModal.current.showModal();
  };
  const handleUpdateProfileForm = (e) => {
    e.preventDefault();

    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const userInformation = {
      displayName,
      photoURL,
    };
    setLoading(true);

    updateUserProfile(userInformation)
      .then(() => {
        updateProfileModal.current.close();
        toast.success("Profile updated successfully");
        setLoading(false);
      })
      .then((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="py-10 bg-base-100 ">
      <Container>
        <div className="max-w-4xl mx-auto p-6 rounded-md border border-neutral/20 bg-base-100">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Left: Avatar */}
            <div className="flex flex-col items-center md:items-center">
              <div className="avatar mb-4">
                <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                  <img src={photoURL} alt={name} className="object-cover" />
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-center">
                {name}
              </h1>
            </div>

            {/* Right: Info + Actions */}
            <div className="flex-1 w-full text-center md:text-left">
              {/* Info Card */}
              <div className="bg-base-200 rounded-2xl p-5 border border-neutral/20 text-sm mb-5">
                <p className="text-base-content mb-2">
                  <strong>Current time:</strong> {currentTime}
                </p>
                <p className="text-base-content">
                  <strong>Country:</strong> {country}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleUpdateProfile}
                  className="btn btn-primary flex-1 py-2  rounded-full shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <FaEdit className="w-4 h-4" />
                  Edit Profile
                </button>

                <button
                  onClick={handleSignout}
                  className="btn btn-warning py-2 flex-1 rounded-full shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <FaSignOutAlt className="w-4 h-4" />
                  Logout
                </button>

                <button
                  onClick={handleDeleteAccount}
                  className="btn btn-error flex-1 py-2  rounded-full shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <MdDelete className="w-4 h-4" />
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog
          ref={updateProfileModal}
          className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-base-100 rounded-3xl shadow-2xl border border-neutral/20 max-w-md w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-neutral/20">
              <h3 className="text-xl font-bold text-base-content">
                Update your profile
              </h3>
              <form method="dialog">
                <button className="btn btn-ghost btn-circle text-base-content/70 hover:text-error text-xl">
                  ×
                </button>
              </form>
            </div>

            <form className="space-y-5" onSubmit={handleUpdateProfileForm}>
              {/* Quantity */}
              <div className="space-y-1">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Enter your name
                  </span>
                </label>
                <input
                  name="displayName"
                  type="text"
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                />
              </div>

              {/* Pickup Date */}
              <div className="space-y-1">
                <label className="label">
                  <span className="label-text font-medium text-base-content flex items-center gap-2">
                    Preferred Pickup Date
                  </span>
                </label>
                <input
                  name="photoURL"
                  type="text"
                  defaultValue={user?.photoURL}
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                />
              </div>

              {loading ? (
                <button className="btn btn-success w-full rounded-full shadow-none transition-all duration-300 mt-5">
                  <span className="loading loading-infinity loading-md"></span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-success w-full rounded-full shadow-none transition-all duration-300 mt-5">
                  Update
                </button>
              )}
            </form>
          </div>
        </dialog>
      </Container>
    </section>
  );
};

export default ProfilePage;
