import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "../Components/JobCard";


const Categories = () => {
    const [activeTab, setActiveTab] = useState(0);
  return (
    <>
    <div className="contain pt-10">
        <div>
            <h1 className="text-center text-[3rem] font-bold">Category</h1>
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
                            <JobCard/>
                            <JobCard/>
                            <JobCard/>
                            <JobCard/>                           
                        </div>
                    </TabPanel>
                    <TabPanel className="tab-panel">Content for Tab 2</TabPanel>
                    <TabPanel className="tab-panel">Content for Tab 3</TabPanel>
                    <TabPanel className="tab-panel">Content for Tab 4</TabPanel>
                    <TabPanel className="tab-panel">Content for Tab 5</TabPanel>
                </div>
            </Tabs>
        </div>
    </div>
  </>
  
);
}

export default Categories;
