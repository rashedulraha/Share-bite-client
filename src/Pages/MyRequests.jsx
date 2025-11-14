import { FaUser, FaMapMarkerAlt, FaCommentDots, FaPhone } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import LoadingSpinner from "../Components/shared/LoadingSpinner";
import AuthContext from "../Context/AuthContext";
import Container from "../Components/Responsive/Container";
import { Link } from "react-router-dom";
import RequestCard from "../Components/shared/RequestCard";

const MyRequests = () => {
  const { user, loading } = useContext(AuthContext);
  const [myRequests, setMyRequests] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    const fetchRequests = async () => {
      try {
        fetch(
          `https://share-bite-backend.vercel.app/food-requests?email=${user.email}`
        )
          .then((res) => res.json())
          .then((resultData) => setMyRequests(resultData));
      } catch (error) {
        toast.error("Failed to load requests");
      }
    };

    fetchRequests();
  }, [user?.email]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="py-16 bg-base-100">
      <Container>
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-base-content mb-3">
            My <span className="text-primary">Food Requests</span>
          </h1>
          <p className="text-muted">Track all food requests you've made</p>
        </div>

        {/* Table Card */}
        <div className="bg-base-200/50 backdrop-blur-sm rounded-md border border-neutral/20 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold text-base-content mb-4">
              All Requests ({myRequests.length})
            </h2>

            {myRequests.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <p className="text-gray-500 text-lg">
                  You haven't made any food requests yet.
                </p>
                <Link
                  to="/available-foods"
                  className="btn bg-primary text-white hover:bg-primary/90 mt-5 px-6 py-2 rounded-full shadow-md transition-all duration-300">
                  Browse Available Foods
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="table table-lg">
                  <thead>
                    <tr className="text-left text-base-content">
                      <th>
                        <div className="flex items-center gap-2">
                          <FaUser className="w-4 h-4" /> Requester
                        </div>
                      </th>
                      <th>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="w-4 h-4" /> Location
                        </div>
                      </th>
                      <th>
                        <div className="flex items-center gap-2">
                          <FaCommentDots className="w-4 h-4" /> Reason
                        </div>
                      </th>
                      <th>
                        <div className="flex items-center gap-2">
                          <FaPhone className="w-4 h-4" /> Contact
                        </div>
                      </th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {myRequests.map((requestData) => (
                      <RequestCard
                        key={requestData._id}
                        requestData={requestData}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyRequests;
