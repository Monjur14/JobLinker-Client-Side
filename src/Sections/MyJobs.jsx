import { useEffect, useState } from "react";
import UseAuth from "../CustomHook/UseAuth";
import JobCard from "../Components/JobCard";
import MyJobsCard from "../Components/MyJobsCard";

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const { user } = UseAuth()

  useEffect(() => {
    fetch("https://joblinker-server-three.vercel.app/jobs")
    .then((res) => res.json())
    .then((data) => {
      const newArr = data.filter(item => item.loggedInUser.email === user.email)
      setMyJobs(newArr);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [myJobs]);
  return (
    <div className="contain px-2 md:px-3 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-16 mt-14">
                            {myJobs.map((item) => (
                                <MyJobsCard key={item.key} img={item.bannerUrl} postedBy={item.loggedInUser.name} jobTitle={item.jobTitle} postedDate={item.postingDate} type={item.category} salery={item.salaryRange} deadLine={item.deadline} id={item._id}/>
                            ))}                   
                        </div>
    </div>
  )
}

export default MyJobs
