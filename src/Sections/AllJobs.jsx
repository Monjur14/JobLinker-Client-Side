import { Link } from "react-router-dom"

const AllJobs = () => {
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
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
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
				</tr>

				
			</tbody>
		</table>
	</div>
</div>
    </div>
  )
}

export default AllJobs
