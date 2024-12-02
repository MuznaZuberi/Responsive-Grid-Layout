export default function GridLayout() {
   return (
   	 <div>
          <h1 className = "text-6xl font-bold font-serif text-red-300 text-center mt-20">Grid <b className = "text-purple-300">Layout</b></h1>
          <div className = "grid md:grid-cols-3 lg:grid-cols-3  grid-cols-1 text-white text-center py-10 px-10 font-bold font-serif gap-6 w-[100%]   md:text-xl lg:text-xl xl:text-xl text-md">

          {/* SideBar Left Start */}
          <div className = " bg-red-300 py-10 px-3 text-md md:text-xl lg:text-2xl xl:text-2xl rounded-lg">SideBar Left
          <div className = "list-none  text-justify mt-10 text-xl font-serif m-3">
              <li className = "pb-2">Home</li>
              <li className = "pb-2">About</li>
              <li className = "pb-2">Pages</li>
              <li className = "pb-2">Courses</li>
              <li className = "pb-2">Portfolio</li>
              <li className = "pb-2">Projects</li>
              <li>Contact</li>
          </div>
          </div>
          {/* SideBar Left End*/} 
          

          {/* Navbar Start */}
          <div className = "bg-purple-300 pt-10  text-md md:text-xl lg:text-2xl xl:text-2xl rounded-lg">Navbar
          <div className = "grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-4  mt-6">
          <div className = "bg-red-300 py-7 text-md md:text-xl lg:text-xl xl:text-xl rounded-lg">About</div>
          <div className = "bg-red-300 py-7 text-md md:text-xl lg:text-xl xl:text-xl rounded-lg">Pages</div>
          </div>
          <div className = "grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-4">
          <div className = "bg-gray-300 py-10 text-md md:text-xl lg:text-xl xl:text-xl rounded-lg ">Portfolio</div>
          <div className = "bg-pink-300 pt-10  text-md md:text-xl lg:text-xl xl:text-xl rounded-lg">Courses
          <div className = "grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 grid-cols-1 gap-3 mt-10">
          <div className = "bg-blue-400 py-10 px-2 text-md md:text-sm lg:text-md xl:text-md text-center rounded-md">Projects</div>
          <div className = "bg-blue-400 py-10 px-2 text-md  md:text-sm lg:text-md xl:text-md text-center rounded-md">Projects</div>
          </div>
          <div className = "bg-gray-300 py-7 text-md md:text-xl lg:text-xl xl:text-2xl rounded-md">Contact</div>
          </div>
          </div>
          </div>
          {/*Navbar End */}



          {/* SideBar Right Start */}
          <div className = "bg-red-300 py-10 px-3 text-md md:text-xl lg:text-2xl xl:text-2xl rounded-lg">SideBar Right
          <div className = "list-none  text-justify mt-10 text-xl font-serif m-3">
              <li className = "pb-2">Home</li>
              <li className = "pb-2">About</li>
              <li className = "pb-2">Pages</li>
              <li className = "pb-2">Courses</li>
              <li className = "pb-2">Portfolio</li>
              <li className = "pb-2">Projects</li>
              <li>Contact</li>
          </div>
          </div>
          </div>
          {/* SideBar Right End*/}
   	</div>
   );
}