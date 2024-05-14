import { BsCalendar2Date } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";
import { IoTimerSharp } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const MyJobsCard = ({key, postedBy, jobTitle, postedDate, type, salery, deadLine, img, id}) => {
    const [matched, setMatched] = useState([])
    function getColor(category) {
		if (category === "Remote") {
			return "bg-indigo-500"; // Apply red background for "remote"
		} else if (category === "Hybrid") {
			return "bg-fuchsia-400"; // Apply yellow background for "hybrid"
		} else if (category === "Part-time") {
			return "bg-orange-400"; // Apply orange background for "part-time"
		} else {
			return "bg-cyan-500"; // Default background color
		}
	}

    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/jobs/${id}`, {
              method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data.deletedCount > 0) {
                // Remove the deleted item from matched state
                const updatedMatched = matched.filter(item => item._id !== id);
                setMatched(updatedMatched);
                // Show success message
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Item has been deleted.",
                  icon: "success"
                });
              }
            })
            .catch(error => {
              console.error("Error deleting item:", error);
              // Show error message
              Swal.fire({
                title: "Error",
                text: "Failed to delete item. Please try again later.",
                icon: "error"
              });
            });
          }
        });
      }
  return (
    <div className="relative w-[95%] md:w-[96%] lg:w-full" key={key}>
                <div className="w-full h-full absolute bg-gray-200 top-4 -z-20 -right-5 rounded-bl-md rounded-tr-md rounded-br-xl"></div>
    <div className="w-full border border-gray-400 rounded-lg bg-white p-5">
      <div className="flex gap-4">
        <div className="w-20 h-20">
          <img
            src={img}
            alt=""
            className="w-14 h-14 md:w-20 md:h-20 object-covert"
          />
        </div>
        <div>
          <h2 className="text-indigo-500 text-sm md:text-base">Posted By: {postedBy}</h2>
          <h1 className="text-xl md:text-2xl font-semibold">{jobTitle}</h1>
          <div className="flex items-center gap-1 text-sm md:text-base">
            <BsCalendar2Date />
            <p>Posted Date: {postedDate}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between flex-col md:flex-row">
        <div className={`${getColor(type)} px-7 text-lg rounded-2xl text-center inline-block mt-2 md:mt-5 text-white`}>
          <h1>{type}</h1>
        </div>

        <Link to={`/details/${id}`} className="">        
        <div className="bg-indigo-400 px-7 text-lg rounded-2xl flex items-center justify-center cursor-pointer gap-2 mt-2 md:mt-5 text-white">
        <FaExternalLinkAlt />
        <Link to={`/details/${id}`}>
        <button>
          View Details
        </button>
        </Link>
        </div>
        </Link>
        </div>


        <div className="flex justify-between">
            <Link to={`/update/${id}`} className={`bg-amber-500 px-7 text-lg rounded-2xl inline-block mt-5 text-white`}>
                <h1>Update</h1>
            </Link>
            <button className={`bg-rose-500 px-7 text-lg rounded-2xl inline-block mt-5 text-white`} onClick={() => handleDelete(id)}>
                <h1>Delete</h1>
            </button>
        </div>



        <hr className="mt-5 border border-gray-300" />
        <div className="flex justify-between mt-3 flex-col md:flex-row">
          <div className="flex items-center gap-1 text-sm md:text-lg">
            <LuCircleDollarSign />
            <h1>{salery} /year</h1>
          </div>
          <div className="flex items-center gap-1 text-sm md:text-lg">
            <IoTimerSharp />
            <h1>Dateline: {deadLine}</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default MyJobsCard
