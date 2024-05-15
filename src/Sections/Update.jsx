import { ToastContainer, toast } from "react-toastify";
import UseAuth from "../CustomHook/UseAuth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
    const { user } = UseAuth()
    const { id } = useParams()
    const [update, setUpdate] = useState([]);
    const [all, setAll] = useState(null)
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch("https://joblinker-server-three.vercel.app/jobs");
              const data = await response.json();
              const updateItem = data.filter((item) => item._id === id)
              setUpdate(updateItem);
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };
      fetchData();
  }, []);


  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const bannerUrl = form.image.value;
    const jobTitle = form.job_title.value;
    const category = form.category_Name.value;
    const salaryRange = form.salery.value;
    const description = form.description.value;
    const postingDate = form.posting_date.value;
    const deadline = form.deadline.value;
    const applicants = update[0].applicants;

    const updatedItem = {
        bannerUrl,
        jobTitle,
        loggedInUser: {
            name: user.displayName,
            email: user.email
        },
        category,
        salaryRange,
        description,
        postingDate,
        deadline,
        applicants
    };

    fetch(`https://joblinker-server-three.vercel.app/jobs/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedItem) 
    })
    .then(res => res.json())
    .then(data => {
        if (data.modifiedCount > 0) {
            toast.success("Successfully Updated");
            setAll(data);
        } else {
            toast.error("No changes made or item not found")
        }
    })
    .catch(error => console.error("Error updating item:", error));
    console.log(updatedItem)
};

  const itemUpdate = update[0] || []
  return (
    <div className="contain">
        <h1 className="text-4xl font-bold text-center mt-5">Update Your Job</h1>
        <form className="mt-6 px-2 md:mx-3 lg:px-0" onSubmit={handleUpdate}>
            <div className="flex gap-5 flex-col md:flex-row">
                <div className="w-full">
                    <label htmlFor="image" className="text-lg font-bold cursor-pointer">Picture URL</label>
                    <input type="url" id="image" name="image" defaultValue={itemUpdate.bannerUrl} className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>
                <div className="w-full">
                    <label htmlFor="job_title" className="text-lg font-bold cursor-pointer">Job Title</label>
                    <input type="text" name="job_title" id="job_title" defaultValue={itemUpdate.jobTitle} className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>                
            </div>

            <div className="flex gap-5 mt-5 flex-col md:flex-row">
                <div className="w-full flex flex-col">
                    <label htmlFor="category_Name" className="text-lg font-bold cursor-pointer">Category</label>
                    <select id="category_Name" name="category_Name" defaultValue={itemUpdate.category_Name} className="border border-gray-500 text-lg p-2 rounded-md w-full">
                        <option value="">Enter the Subcategory</option>
                        <option value="On-Site Job">On-Site Job</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Part-Time Job">Part-Time Job</option>
                    </select>
                </div>  
                <div className="w-full">
                    <label htmlFor="salery" className="text-lg font-bold cursor-pointer">Salery Range</label>
                    <input type="text" name="salery" id="salery" defaultValue={itemUpdate.salaryRange} placeholder="$60,000 - $80,000 (Give like this)" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>                
            </div>
            
            <div className="mt-5">
              <label htmlFor="description" className="text-lg font-bold cursor-pointer">Short Description</label>
              <textarea name="description" id="description" defaultValue={itemUpdate.description} className="border border-gray-500 text-lg p-2 rounded-md w-full resize-none" rows={5}></textarea>
            </div>

            <div className="flex gap-5 flex-col mt-5 md:flex-row">
                <div className="w-full">
                    <label htmlFor="posting_date" className="text-lg font-bold cursor-pointer">Posting Date</label>
                    <input type="date" id="posting_date" defaultValue={itemUpdate.postingDate} name="posting_date" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>
                <div className="w-full">
                    <label htmlFor="deadline" className="text-lg font-bold cursor-pointer">Deadline</label>
                    <input type="date" name="deadline" defaultValue={itemUpdate.deadline} id="deadline" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>                
            </div>


            <div className="flex gap-5 mt-5 flex-col md:flex-row">
                <div className="w-full">
                    <label htmlFor="email" className="text-lg font-bold cursor-pointer">Your Email</label>
                    <input type="email" name="email" id="email" value={user.email} className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>
                <div className="w-full">
                    <label htmlFor="user_name" className="text-lg font-bold cursor-pointer">Your Name</label>
                    <input type="text" name="user_name" id="user_name" value={user.displayName} className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>                
            </div>

            <div className="mt-5 mb-10 w-full flex justify-center">
            <button type="submit"  className="bg-indigo-700 text-white font-semibold text-xl px-8 py-2 rounded-md">Add Item</button>
            </div>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default Update
