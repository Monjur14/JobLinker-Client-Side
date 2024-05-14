import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAuth from "../CustomHook/UseAuth";

const DetailsPage = () => {
  const { user } = UseAuth()
  const {id} = useParams()
  const [alljobs2, setAllJobs2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5000/jobs");
            const data = await response.json();
            setAllJobs2(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData();
}, []);
  const getJob = alljobs2.filter(item => item._id === id);
  const getItem = getJob[0] || {}
  const bannerURL = getItem?.bannerUrl
  const posterName = getItem.loggedInUser?.name
  const posterEmail = getItem.loggedInUser?.email
  const jobTitle = getItem?.jobTitle
  const category = getItem?.category
  const salaryRange = getItem?.salaryRange
  const postingDate = getItem?.postingDate
  const deadline = getItem?.deadline

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const applicantName = form.fullname.value 
    const applicantEmail = form.email.value
    const resumeLink = form.resumeLink.value
    const message = form.message.value
    const applyInfo = {
      bannerURL,
      posterEmail,
      posterName,
      jobTitle,
      category,
      salaryRange,
      postingDate,
      deadline,
      applicantEmail,
      applicantName,
      resumeLink,
      message
    }
    if(posterEmail === applicantEmail){
      alert("dont apply")
    }else{
      try {
        const response = await fetch("http://localhost:5000/apply", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(applyInfo)
        });
    
        if (!response.ok) {
            throw new Error(`Failed to submit application: ${response.status} ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log("Data received:", data);
    } catch (err) {
        console.error("Error during fetch:", err);
    }
    }
  }


  return (
    <div className="contain flex pt-10 2xl:pt-16 gap-10 2xl:gap-20">
      <div className="basis-1/2">
        <img src="/src/assets/images/cty2.png" alt="" className="w-24" />
        <p className="mt-5 2xl:text-lg">Posted By: {getItem.loggedInUser?.name}</p>
        <h1 className="text-xl 2xl:text-2xl">Job Title: {getItem?.jobTitle}<span className="text-indigo-700 font-semibold"></span></h1>
        <h1 className="text-lg 2xl:text-xl">Job Type: {getItem?.category}</h1>
        <h1 className="text-lg 2xl:text-xl">Salery Range: <span className="font-semibold">{getItem?.salaryRange} /year</span></h1>
        <h1 className="text-lg 2xl:text-xl">Description: <span className="text-gray-700">{getItem?.description}</span></h1>
        <h1 className="my-2 text-lg 2xl:text-2xl font-semibold">Number of Applicants: {getItem?.applicants}</h1>
        <h1 className="mt-3 text-lg 2xl:text-xl">Posted on: <span className="font-semibold">{getItem?.postingDate}</span></h1>
        <h1 className="text-lg 2xl:text-xl">Deadline: <span className="text-red-500 font-semibold">{getItem?.deadline}</span></h1>
      </div>
      <div className="basis-1/2">
        <h1 className="text-center text-2xl 2xl:text-[2.3rem] font-semibold">Want to <span className="text-indigo-700">Apply</span> for this <span className="text-indigo-700">Job</span></h1>
        <form action="" className="mt-5 2xl:mt-10" onSubmit={handleFormSubmit}>
			<div className="flex gap-5 w-full">
                <div className="w-full">
                    <label htmlFor="fullname" className="text-sm 2xl:text-base">Full name</label>
					<input id="fullname" name="fullname" type="text" placeholder="Full name" value={user.displayName} className="w-full rounded-md border border-indigo-400 pl-2 py-2" />
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="text-sm 2xl:text-base">Email</label>
					<input id="email" type="email" name="email" placeholder="Email" value={user.email} className="w-full rounded-md border border-indigo-400 pl-2 py-2" />
                </div>
            </div>
            <div className="mt-3">
            <label htmlFor="resume" className="text-sm 2xl:text-base">Resume Link</label>
					<input id="resume" name="resumeLink" type="url"  placeholder="Provide Your Resume Link Here" className="w-full rounded-md border border-indigo-400 pl-2 py-2" />
            </div>
            <div className="mt-3">
            <label htmlFor="message" className="text-sm 2xl:text-base">Short Message</label>
			<textarea id="message" type="text" name="message" placeholder="Give your short message here....." className="w-full rounded-md border border-indigo-400 pl-2 py-2 resize-none" rows="5"/>
            </div>
            
            <button type="submit" className="bg-indigo-700 text-white px-6 py-1 rounded-lg font-semibold text-lg mt-2">Apply</button>
        </form>
      </div>
    </div>
  )
}

export default DetailsPage
