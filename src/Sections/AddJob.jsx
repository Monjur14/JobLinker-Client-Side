import { ToastContainer, toast } from "react-toastify";
import UseAuth from "../CustomHook/UseAuth";
const AddJob = () => {
  const { user } = UseAuth()

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const form = e.target;
    const userName = user.displayName;
    const userEmail = user.email;
    const bannerUrl = form.image.value;
    const jobTitle = form.job_title.value;
    const category = form.category_Name.value;
    const salaryRange = form.salery.value;
    const description = form.description.value;
    const postingDate = form.posting_date.value;
    const deadline = form.deadline.value;

    const addJob = {
        bannerUrl,
        jobTitle,
        loggedInUser: {
            name: userName,
            email: userEmail
        },
        category,
        salaryRange,
        description,
        postingDate,
        deadline,
        applicants: 0
    }

    fetch("https://joblinker-server-three.vercel.app/jobs", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(addJob)
})
.then((res) => {
    if (!res.ok) {
        throw new Error(`Failed to add job: ${res.status} ${res.statusText}`);
    }
    return res.json();
})
.then((data) => {
    console.log(data)
    if(data.insertedId){
        toast.success("Successfully Added");
    }
})
.catch(error => {
    console.error('Error adding job:', error);
    toast.error("Failed to add job");
});
form.image.value = "";
form.job_title.value = "";
form.category_Name.value = "";
form.salery.value = "";
form.description.value = "";
form.posting_date.value = "";
form.deadline.value = "";
}

  return (
    <div className="contain">
        <h1 className="text-4xl font-bold text-center mt-5">Add a Job</h1>
        <form className="mt-6 px-2 md:mx-3 lg:px-0" onSubmit={handleSubmit}>

            <div className="flex gap-5 flex-col md:flex-row">
                <div className="w-full">
                    <label htmlFor="image" className="text-lg font-bold cursor-pointer">Picture URL</label>
                    <input type="url" id="image" name="image" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>
                <div className="w-full">
                    <label htmlFor="job_title" className="text-lg font-bold cursor-pointer">Job Title</label>
                    <input type="text" name="job_title" id="job_title" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>                
            </div>

            <div className="flex gap-5 mt-5 flex-col md:flex-row">
                <div className="w-full flex flex-col">
                    <label htmlFor="category_Name" className="text-lg font-bold cursor-pointer">Category</label>
                    <select id="category_Name" name="category_Name" className="border border-gray-500 text-lg p-2 rounded-md w-full">
                        <option value="">Enter the Subcategory</option>
                        <option value="On-Site Job">On-Site Job</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Part-Time Job">Part-Time Job</option>
                    </select>
                </div>  
                <div className="w-full">
                    <label htmlFor="salery" className="text-lg font-bold cursor-pointer">Salery Range</label>
                    <input type="text" name="salery" id="salery" placeholder="$60,000 - $80,000 (Give like this)" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>                
            </div>
            
            <div className="mt-5">
              <label htmlFor="description" className="text-lg font-bold cursor-pointer">Short Description</label>
              <textarea name="description" id="" className="border border-gray-500 text-lg p-2 rounded-md w-full resize-none" rows={5}></textarea>
            </div>

            <div className="flex gap-5 flex-col mt-5 md:flex-row">
                <div className="w-full">
                    <label htmlFor="posting_date" className="text-lg font-bold cursor-pointer">Posting Date</label>
                    <input type="date" id="posting_date" name="posting_date" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>
                <div className="w-full">
                    <label htmlFor="deadline" className="text-lg font-bold cursor-pointer">Deadline</label>
                    <input type="date" name="deadline" id="deadline" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
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

export default AddJob
