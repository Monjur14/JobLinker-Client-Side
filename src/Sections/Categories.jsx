import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "../Components/JobCard";
import { Link } from "react-router-dom";


const Categories = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [alljobs, setAllJobs] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/jobs")
		.then((res) => res.json())
		.then((data) => {
			setAllJobs(data)
		})
	}, [])

    const showAllJobs = alljobs.slice(0, 6);
    const remoteJobs = alljobs.filter(item => item.category === "Remote");
    const hybridJobs = alljobs.filter(item => item.category === "Hybrid");
    const partTimeJobs = alljobs.filter(item => item.category === "Part-time");
    const onSiteJobs = alljobs.filter(item => item.category === "On Site");
  return (
    <>
    <div className="contain pt-10 px-2">
        <div>
            <h1 className="text-center text-[1.9rem] md:text-[3rem] font-bold">Category</h1>
        </div>
        <div>
            <Tabs className="modern-tabs mt-3 md:mt-5">
                <div className="flex justify-center">
                    <TabList className="tab-list 2xl:text-lg flex flex-col md:flex-row gap-1 md:gap-0">
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-9 md:gap-16 mt-10">
                            {showAllJobs.map((item) => (
                                <JobCard key={item.key} img={item.bannerUrl} postedBy={item.loggedInUser.name} jobTitle={item.jobTitle} postedDate={item.postingDate} type={item.category} salery={item.salaryRange} deadLine={item.deadline} id={item._id}/>
                            ))}                   
                        </div>
                    </TabPanel>
                    <TabPanel className="tab-panel">
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-9 md:gap-16 mt-10">
                            {onSiteJobs.map((item) => (
                                <JobCard key={item.key} img={item.bannerUrl} postedBy={item.loggedInUser.name} jobTitle={item.jobTitle} postedDate={item.postingDate} type={item.category} salery={item.salaryRange} deadLine={item.deadline} id={item._id}/>
                            ))}                   
                        </div>  
                    </TabPanel>
                    <TabPanel className="tab-panel">
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-9 md:gap-16 mt-10">
                            {remoteJobs.map((item) => (
                                <JobCard key={item.key} img={item.bannerUrl} postedBy={item.loggedInUser.name} jobTitle={item.jobTitle} postedDate={item.postingDate} type={item.category} salery={item.salaryRange} deadLine={item.deadline} id={item._id}/>
                            ))}                   
                        </div>  
                    </TabPanel>
                    <TabPanel className="tab-panel">
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-9 md:gap-16 mt-10">
                            {hybridJobs.map((item) => (
                                <JobCard key={item.key} img={item.bannerUrl} postedBy={item.loggedInUser.name} jobTitle={item.jobTitle} postedDate={item.postingDate} type={item.category} salery={item.salaryRange} deadLine={item.deadline} id={item._id}/>
                            ))}                   
                        </div> 
                    </TabPanel>
                    <TabPanel className="tab-panel">
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-9 md:gap-16 mt-10">
                            {partTimeJobs.map((item) => (
                                <JobCard key={item.key} img={item.bannerUrl} postedBy={item.loggedInUser.name} jobTitle={item.jobTitle} postedDate={item.postingDate} type={item.category} salery={item.salaryRange} deadLine={item.deadline} id={item._id}/>
                            ))}                   
                        </div> 
                    </TabPanel>
                </div>
            </Tabs>
        </div>
        <div className="w-full flex justify-center">
            <Link to={'/alljobs'}>
                            <button className="px-7 py-2 bg-indigo-700 text-white mt-16 rounded-md">Show All Jobs</button>
            </Link>
        </div>
    </div>
  </>
  
);
}

export default Categories;
