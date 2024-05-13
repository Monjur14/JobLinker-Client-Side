
const DetailsPage = () => {
  return (
    <div className="contain flex pt-10 2xl:pt-16 gap-10 2xl:gap-20">
      <div className="basis-1/2">
        <img src="/src/assets/images/cty2.png" alt="" className="w-24" />
        <p className="mt-5 2xl:text-lg">Posted By: Monjur Hossen</p>
        <h1 className="text-xl 2xl:text-2xl">Job Title: <span className="text-indigo-700 font-semibold">Software Engineer</span></h1>
        <h1 className="text-lg 2xl:text-xl">Job Type: <span className="font-semibold">Remote</span></h1>
        <h1 className="text-lg 2xl:text-xl">Salery Range: <span className="font-semibold">$30,000 - $40,000 /year</span></h1>
        <h1 className="text-lg 2xl:text-xl">Description: <span className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ipsum perspiciatis tempora et sit ipsa consequatur vero aperiam temporibus dolores. Accusantium qui nulla excepturi quod libero! Laudantium porro non facere.</span></h1>
        <h1 className="my-2 text-lg 2xl:text-2xl font-semibold">Number of Applicants: 0</h1>
        <h1 className="mt-3 text-lg 2xl:text-xl">Posted on: <span className="font-semibold">05/05/2024</span></h1>
        <h1 className="text-lg 2xl:text-xl">Deadline: <span className="text-red-500 font-semibold">24/05/2024</span></h1>
      </div>
      <div className="basis-1/2">
        <h1 className="text-center text-2xl 2xl:text-[2.3rem] font-semibold">Want to <span className="text-indigo-700">Apply</span> for this <span className="text-indigo-700">Job</span></h1>
        <form action="" className="mt-5 2xl:mt-10">
			<div className="flex gap-5 w-full">
                <div className="w-full">
                    <label htmlFor="fullname" className="text-sm 2xl:text-base">Full name</label>
					<input id="fullname" type="text" placeholder="Full name" className="w-full rounded-md border border-indigo-400 pl-2 py-2" />
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="text-sm 2xl:text-base">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full rounded-md border border-indigo-400 pl-2 py-2" />
                </div>
            </div>
            <div className="mt-3">
            <label htmlFor="resume" className="text-sm 2xl:text-base">Resume Link</label>
					<input id="resume" type="url" placeholder="Provide Your Resume Link Here" className="w-full rounded-md border border-indigo-400 pl-2 py-2" />
            </div>
            <div className="mt-3">
            <label htmlFor="email" className="text-sm 2xl:text-base">Short Message</label>
			<textarea id="email" type="email" placeholder="Give your short message here....." className="w-full rounded-md border border-indigo-400 pl-2 py-2 resize-none" rows="5"/>
            </div>
            <button className="bg-indigo-700 text-white px-6 py-1 rounded-lg font-semibold text-lg mt-2">Apply</button>
        </form>
      </div>
    </div>
  )
}

export default DetailsPage
