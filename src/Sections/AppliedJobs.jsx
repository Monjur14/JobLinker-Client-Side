import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "../Components/JobCard";
import UseAuth from "../CustomHook/UseAuth";


const AppliedJobs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [alljobs, setAllJobs] = useState([]);
  const { user } = UseAuth()

  useEffect(() => {
    fetch("http://localhost:5000/apply")
    .then((res) => res.json())
    .then((data) => {
      const newArr = data.filter(item => item.applicantEmail === user.email)
      setAllJobs(newArr);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  // Define initial values for each filter
  const remoteJobs = alljobs.filter(item => item.category === "Remote") || [];
  const hybridJobs = alljobs.filter(item => item.category === "Hybrid") || [];
  const partTimeJobs = alljobs.filter(item => item.category === "Part-time") || [];
  const onSiteJobs = alljobs.filter(item => item.category === "On Site") || [];
  console.log(partTimeJobs)

  return (
    <div className="contain pt-10">
        <div>
            <h1 className="text-center text-[3rem] font-bold">Filter by Category</h1>
        </div>
        <div>
            <Tabs className="modern-tabs mt-5">
                <div className="flex justify-center">
                    <TabList className="tab-list 2xl:text-lg">
                        <Tab className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>
                            All Jobs
                        </Tab>
                        <Tab className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>
                            On-Site Jobs
                        </Tab>
                        <Tab className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>
                            Remote Jobs
                        </Tab>
                        <Tab className={`tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>
                            Hybrid Jobs
                        </Tab>
                        <Tab className={`tab ${activeTab === 4 ? 'active' : ''}`} onClick={() => setActiveTab(4)}>
                            Part-Time Jobs
                        </Tab>
                    </TabList>
                </div>
                <div>
                    <TabPanel className="tab-panel">
                        <div className="grid grid-cols-2 w-full gap-16 mt-10">
                            {alljobs.length > 0 ? alljobs.map((item) => (
                                <JobCard key={item._id} img={item.bannerURL} postedBy={item.loggedInUser?.name} jobTitle={item.jobTitle} postedDate={item.postingDate} type={item.category} salery={item.salaryRange} deadLine={item.deadline} id={item._id}/>
                            )) : <div className="text-2xl contain font-semibold w-screen mt-5">
                                <h1 className="text-center">No Jobs Found</h1>
                              </div>}                   
                        </div>
                    </TabPanel>
                    <TabPanel className="tab-panel">
                    <div className="grid grid-cols-2 w-full gap-16 mt-10">
                            {onSiteJobs.length > 0 ? onSiteJobs.map((item) => (
                                <JobCard key={item._id} img={item.bannerURL} postedBy={item.loggedInUser?.name} jobTitle={item.jobTitle} postedDate={item.postingDate} type={item.category} salery={item.salaryRange} deadLine={item.deadline} id={item._id}/>
                            )) : <div className="text-2xl contain font-semibold w-screen mt-5">
                            <h1 className="text-center">No Jobs Found</h1>
                          </div>}                   
                        </div>  
                    </TabPanel>
                    <TabPanel className="tab-panel">
                    <div className="grid grid-cols-2 w-full gap-16 mt-10">
                            {remoteJobs.length > 0 ? remoteJobs.map((item) => (
                                <JobCard key={item._id} img={item.bannerURL} postedBy={item.loggedInUser?.name} jobTitle={item.jobTitle} postedDate={item.postingDate} type={item.category} salery={item.salaryRange} deadLine={item.deadline} id={item._id}/>
                            )) : <div className="text-2xl contain font-semibold w-screen mt-5">
                            <h1 className="text-center">No Jobs Found</h1>
                          </div>}                   
                        </div>  
                    </TabPanel>
                    <TabPanel className="tab-panel">
                    <div className="grid grid-cols-2 w-full gap-16 mt-10">
                            {hybridJobs.length > 0 ? hybridJobs.map((item) => (
                                <JobCard key={item._id} img={item.bannerURL} postedBy={item.loggedInUser?.name} jobTitle={item.jobTitle} postedDate={item.postingDate} type={item.category} salery={item.salaryRange} deadLine={item.deadline} id={item._id}/>
                            )) : <div className="text-2xl contain font-semibold w-screen mt-5">
                            <h1 className="text-center">No Jobs Found</h1>
                          </div>}                   
                        </div> 
                    </TabPanel>
                    <TabPanel className="tab-panel">
                    <div className="grid grid-cols-2 w-full gap-16 mt-10">
                            {partTimeJobs.length > 0 ? partTimeJobs.map((item) => (
                                <JobCard key={item._id} img={item.bannerURL} postedBy={item.loggedInUser?.name} jobTitle={item.jobTitle} postedDate={item.postingDate} type={item.category} salery={item.salaryRange} deadLine={item.deadline} id={item._id}/>
                            )) : <div className="text-2xl contain font-semibold w-screen mt-5">
                            <h1 className="text-center">No Jobs Found</h1>
                          </div>}                   
                        </div> 
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    </div>
  )
}

export default AppliedJobs;

