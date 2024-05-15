import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // State to control loader visibility

  useEffect(() => {
    fetch("https://joblinker-server-three.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setTimeout(() => setLoading(false), 1000); // Hide loader after 1 second
      });
  }, []);

  function getColor(category) {
    if (category === "Remote") {
      return "bg-indigo-500"; 
    } else if (category === "Hybrid") {
      return "bg-fuchsia-400"; 
    } else if (category === "Part-time") {
      return "bg-orange-400"; 
    } else {
      return "bg-cyan-500"; 
    }
  }

  const filteredJobs = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="contain">
      <div className="container p-2 mx-auto sm:p-4">
        {loading ? ( // Show loader if loading is true
          <div className="flex justify-center items-center h-[50vh]">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
          </div>
        ) : (
          <div>
            <div className="flex items-center mb-4 border border-indigo-400 rounded-md  w-full md:w-[50%] lg:w-[30%] px-2 mx-auto">
              <IoIosSearch className="text-2xl" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="p-2 outline-none"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm 2xl:text-base">
                <colgroup>
                  <col />
                  <col className="hidden lg:table-cell" />
                  <col className="hidden lg:table-cell" />
                  <col className="hidden w-48 md:table-cell" />
                  <col className="hidden lg:table-cell" />
                  <col className="w-24" />
                </colgroup>
                <thead className="bg-indigo-100">
                  <tr className="text-left">
                    <th className="p-3">Title</th>
                    <th className="p-3 w-32 hidden lg:table-cell">
                      Posting Date
                    </th>
                    <th className="p-3 hidden lg:table-cell">Deadline</th>
                    <th className="p-3 w-48 lg:w-44 text-center hidden md:table-cell">
                      Type
                    </th>
                    <th className="p-3 text-left hidden lg:table-cell">Salary</th>
                    <th className="p-3 text-center">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredJobs.map((item) => (
                    <tr
                      className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                      key={item.id}
                    >
                      <td className="p-3">
                        <div className="flex gap-2 flex-col md:flex-row">
                          <img
                            src={item.bannerUrl}
                            alt=""
                            className="w-10 h-10"
                          />
                          <div>
                            <h1>{item.loggedInUser.name}</h1>
                            <h1 className="text-lg font-semibold">
                              {item.jobTitle}
                            </h1>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 hidden lg:table-cell">
                        <p>{item.postingDate}</p>
                      </td>
                      <td className="p-3 hidden lg:table-cell">
                        <p>{item.deadline}</p>
                      </td>
                      <td className="p-3 text-center hidden md:table-cell">
                        <div
                          className={`px-7 text-base rounded-2xl inline-block text-white ${getColor(
                            item.category
                          )}`}
                        >
                          <h1>{item.category}</h1>
                        </div>
                      </td>
                      <td className="p-3 text-left hidden lg:table-cell">
                        <p>{item.salaryRange}</p>
                      </td>
                      <td className="p-3 text-center">
                        <Link
                          to={`/details/${item._id}`} 
                          className="inline-block w-28 text-center py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                        >
                          <span>View Details</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
