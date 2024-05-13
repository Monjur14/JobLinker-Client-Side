import { BsCalendar2Date } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";
import { IoTimerSharp } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobCard = ({key, postedBy, jobTitle, postedDate, type, salery, deadLine, img, id}) => {
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
  return (
    <div className="relative" key={key}>
                <div className="w-full h-full absolute bg-gray-200 top-4 -z-20 -right-5 rounded-bl-md rounded-tr-md rounded-br-xl"></div>
    <div className="w-full border border-gray-400 rounded-lg bg-white p-5">
      <div className="flex gap-4">
        <div className="w-20 h-20">
          <img
            src={img}
            alt=""
            className="w-20 h-20 object-covert"
          />
        </div>
        <div>
          <h2 className="text-indigo-500">Posted By: {postedBy}</h2>
          <h1 className="text-2xl font-semibold">{jobTitle}</h1>
          <div className="flex items-center gap-1">
            <BsCalendar2Date />
            <p>Posted Date: {postedDate}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
        <div className={`${getColor(type)} px-7 text-lg rounded-2xl inline-block mt-5 text-white`}>
          <h1>{type}</h1>
        </div>

        <Link to={`/details/${id}`}>        
        <div className="bg-indigo-400 px-7 text-lg rounded-2xl flex items-center cursor-pointer gap-2 mt-5 text-white">
        <FaExternalLinkAlt />
        <Link to={`/details/${id}`}>
        <button>
          View Details
        </button>
        </Link>
        </div>
        </Link>
        

        </div>
        <hr className="mt-5 border border-gray-300" />
        <div className="flex justify-between mt-3">
          <div className="flex items-center gap-1 text-lg">
            <LuCircleDollarSign />
            <h1>{salery} /year</h1>
          </div>
          <div className="flex items-center gap-1 text-lg">
            <IoTimerSharp />
            <h1>Dateline: {deadLine}</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default JobCard;
