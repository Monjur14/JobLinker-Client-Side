import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const AllJobs = () => {
	const [jobs, setJobs] = useState([])
	useEffect(() => {
		fetch("http://localhost:5000/jobs")
		.then((res) => res.json())
		.then((data) => {
			setJobs(data)
		})
	}, [])

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
    <div className="contain">
      <div className="container p-2 mx-auto sm:p-4">
	<div className="overflow-x-auto">
		<table className="min-w-full text-sm 2xl:text-base">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="bg-indigo-100">
				<tr className="text-left">
					<th className="p-3">Title</th>
					<th className="p-3">Posting Date</th>
					<th className="p-3">Deadline</th>
					<th className="p-3">Type</th>
					<th className="p-3 text-right">Salery</th>
					<th className="p-3">Details</th>
				</tr>
			</thead>
			<tbody>
				{/* <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<div className="flex gap-2">
                            <img src="/src/assets/images/cty2.png" alt="" className="w-10 h-10"/>
                            <div>
                                <h1>Monjur Hossen</h1>
                                <h1 className="text-lg font-semibold">Software Engineer</h1>
                            </div>
                        </div>
					</td>
					<td className="p-3">
						<p>05/05/2024</p>
					</td>
					<td className="p-3">
						<p>14/05/2024</p>
					</td>
					<td className="p-3">
                    <div className="bg-indigo-400 px-7 text-base rounded-2xl inline-block text-white">
                            <h1>Remote</h1>
                    </div>
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					<td className="p-3 text-right">
						<Link  className="inline-block w-28 text-center py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
							<span>View Details</span>
                        </Link>
					</td>
				</tr> */}
				{
					jobs.map((item) => (
						<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50" key={item.id}>
					<td className="p-3">
						<div className="flex gap-2">
                            <img src={item.bannerUrl} alt="" className="w-10 h-10"/>
                            <div>
                                <h1>{item.loggedInUser.name}</h1>
                                <h1 className="text-lg font-semibold">{item.jobTitle}</h1>
                            </div>
                        </div>
					</td>
					<td className="p-3">
						<p>{item.postingDate}</p>
					</td>
					<td className="p-3">
						<p>{item.deadline}</p>
					</td>
					<td className="p-3">
                    <div className={`px-7 text-base  rounded-2xl inline-block text-white ${getColor(item.category)}`}>
    <h1>{item.category}</h1>
</div>
					</td>
					<td className="p-3 text-right">
						<p>{item.salaryRange}</p>
					</td>
					<td className="p-3 text-right">
						<Link  className="inline-block w-28 text-center py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
							<span>View Details</span>
                        </Link>
					</td>
				</tr>
					))
				}

				
			</tbody>
		</table>
	</div>
</div>
    </div>
  )
}

export default AllJobs
