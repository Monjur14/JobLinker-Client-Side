import { Link } from "react-router-dom"

const Blogs = () => {
  return (
    <div className="contain pt-10 flex flex-col gap-5">
	<div className="max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm border">
		<div className="flex items-center justify-between">
			<span className="text-sm ">Jun 12, 2024</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded ">Javascript</a>
		</div>
		<div className="mt-3">
			<p rel="noopener noreferrer" href="#" className="text-2xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client side?</p>
			<p className="mt-2">Access tokens and refresh tokens are commonly used in authentication systems, especially in the context of OAuth 2.0, to securely manage user sessions and access to protected resources......</p>
		</div>
		<div className="flex items-center justify-between mt-4">
      <Link to={"/blogs/blog1"}>
			<a rel="noopener noreferrer" className="px-6 py-2 bg-indigo-700 text-white rounded-lg">Read more</a>
      </Link>
			<div>
				<p rel="noopener noreferrer" className="flex items-center">
					<img src="/src/assets/images/monjur.png" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span>Monjur Hossen</span>
				</p>
			</div>
		</div>
	</div>
	<div className="max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm border">
		<div className="flex items-center justify-between">
			<span className="text-sm ">Jun 12, 2024</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded ">Javascript</a>
		</div>
		<div className="mt-3">
			<p rel="noopener noreferrer" href="#" className="text-2xl font-bold">What is express js?</p>
			<p className="mt-2">Express.js, commonly referred to as Express, is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It is designed......</p>
		</div>
		<div className="flex items-center justify-between mt-4">
    <Link to={"/blogs/blog2"}>
			<a rel="noopener noreferrer" className="px-6 py-2 bg-indigo-700 text-white rounded-lg">Read more</a>
      </Link>
			<div>
				<p rel="noopener noreferrer" className="flex items-center">
					<img src="/src/assets/images/monjur.png" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span >Monjur Hossen</span>
				</p>
			</div>
		</div>
	</div>
	<div className="max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm border">
		<div className="flex items-center justify-between">
			<span className="text-sm ">Jun 12, 2024</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded ">Javascript</a>
		</div>
		<div className="mt-3">
			<p rel="noopener noreferrer" href="#" className="text-2xl font-bold">What is Nest JS?</p>
			<p className="mt-2">Next.js is a React framework for building server-side rendered and statically generated web applications. It is built on top of React, providing many powerful features to streamline the development process......</p>
		</div>
		<div className="flex items-center justify-between mt-4">
    <Link to={"/blogs/blog3"}>
			<a rel="noopener noreferrer" className="px-6 py-2 bg-indigo-700 text-white rounded-lg">Read more</a>
      </Link>
			<div>
				<p rel="noopener noreferrer" className="flex items-center">
					<img src="/src/assets/images/monjur.png" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span >Monjur Hossen</span>
				</p>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Blogs
