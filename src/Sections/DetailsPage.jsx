import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAuth from "../CustomHook/UseAuth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DetailsPage = () => {
  const { user } = UseAuth();
  const { id } = useParams();
  const [allJobs, setAllJobs] = useState([]);
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://joblinker-server-three.vercel.app/jobs");
        const data = await response.json();
        setAllJobs(data);

        // Find the job with the given ID
        const jobData = data.find(item => item._id === id);
        setJob(jobData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const applicantName = form.fullname.value;
    const applicantEmail = form.email.value;
    const resumeLink = form.resumeLink.value;
    const message = form.message.value;

    const today = new Date();
    const deadline = new Date(job.deadline);
    if (today > deadline) {
      toast.error("Application deadline has passed. You can't apply for this job.");
      return;
    }

    const applyInfo = {
      jobId: id,
      bannerURL: job.bannerUrl,
      posterEmail: job.loggedInUser.email,
      posterName: job.loggedInUser.name,
      jobTitle: job.jobTitle,
      category: job.category,
      salaryRange: job.salaryRange,
      postingDate: job.postingDate,
      deadline: job.deadline,
      applicantEmail,
      applicantName,
      resumeLink,
      message
    };

    if (job.loggedInUser.email === applicantEmail) {
      toast.error("You can't apply to your own job post");
      return;
    }

    try {
      const response = await fetch("https://joblinker-server-three.vercel.app/apply", {
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
      console.log("Application submitted successfully:", data);

      setJob(prevJob => ({
        ...prevJob,
        applicants: prevJob.applicants + 1
      }));
      toast.success("Application submitted successfully!");
    } catch (err) {
      console.error("Error during fetch:", err);
      toast.error("Failed to submit application. Please try again later.");
    }
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="contain flex pt-10 2xl:pt-16 gap-10 2xl:gap-20 flex-col lg:flex-row px-2 md:px-3 lg:px-0">
      <div className="basis-1/2">
        <img src={job.bannerUrl} alt="Job banner" className="w-24" />
        <p className="mt-5 2xl:text-lg">Posted By: {job.loggedInUser.name}</p>
        <h1 className="text-xl 2xl:text-2xl">Job Title: {job.jobTitle}<span className="text-indigo-700 font-semibold"></span></h1>
        <h1 className="text-lg 2xl:text-xl">Job Type: {job.category}</h1>
        <h1 className="text-lg 2xl:text-xl">Salary Range: <span className="font-semibold">{job.salaryRange} /year</span></h1>
        <h1 className="text-lg 2xl:text-xl">Description: <span className="text-gray-700">{job.description}</span></h1>
        <h1 className="my-2 text-lg 2xl:text-2xl font-semibold">Number of Applicants: {job.applicants}</h1>
        <h1 className="mt-3 text-lg 2xl:text-xl">Posted on: <span className="font-semibold">{job.postingDate}</span></h1>
        <h1 className="text-lg 2xl:text-xl">Deadline: <span className="text-red-500 font-semibold">{job.deadline}</span></h1>
      </div>
      <div className="basis-1/2">
        <h1 className="text-center text-2xl 2xl:text-[2.3rem] font-semibold">Want to <span className="text-indigo-700">Apply</span> for this <span className="text-indigo-700">Job</span></h1>
        <form action="" className="mt-5 2xl:mt-10" onSubmit={handleFormSubmit}>
          <div className="flex gap-5 w-full">
            <div className="w-full">
              <label htmlFor="fullname" className="text-sm 2xl:text-base">Full name</label>
              <input id="fullname" name="fullname" type="text" placeholder="Full name" defaultValue={user.displayName} className="w-full rounded-md border border-indigo-400 pl-2 py-2" />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-sm 2xl:text-base">Email</label>
              <input id="email" type="email" name="email" placeholder="Email" defaultValue={user.email} className="w-full rounded-md border border-indigo-400 pl-2 py-2" />
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="resume" className="text-sm 2xl:text-base">Resume Link</label>
            <input id="resume" name="resumeLink" type="url" placeholder="Provide Your Resume Link Here" className="w-full rounded-md border border-indigo-400 pl-2 py-2" />
          </div>
          <div className="mt-3">
            <label htmlFor="message" className="text-sm 2xl:text-base">Short Message</label>
            <textarea id="message" type="text" name="message" placeholder="Give your short message here....." className="w-full rounded-md border border-indigo-400 pl-2 py-2 resize-none" rows="5" />
          </div>
          <button type="submit" className="bg-indigo-700 text-white px-6 py-1 rounded-lg font-semibold text-lg mt-2">Apply</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default DetailsPage;
