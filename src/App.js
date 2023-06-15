import UploadFile from "./components/uploadFile";
import Data from "./components/data";
import React from "react";

function App() {
  const [upload, setUpload] = React.useState(true);//switching tabs

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row bg-slate-700 ">
      {/* Navbar */}
      {/* initial plan was to create seperate component but context had to setup for that so tabs can be functional */}
      <div className='flex md:w-2/6 lg:w-1/6 md:h-full max-md:justify-between justify-between  max-md:items-center  p-4  bg-slate-800 md:flex md:flex-col md:py-12 md:px-4' >
        <div className="md:flex md:flex-row md:items-center  md:justify-between">
            <div className=' hidden md:block text-slate-400 uppercase md:text-2xl md:font-bold'>Admins</div>
            <div className='flex flex-col gap-2'>
                <span className="h-[2px] w-6 bg-slate-500 ">&nbsp;</span>
                <span className="h-[1px] w-6 bg-slate-500 ">&nbsp;</span>
                <span className="h-[2px] w-6 bg-slate-500 ">&nbsp;</span>
            </div>
        </div>
        <div className=" hidden md:flex md:flex-col items-center justify-center">
            <div className='md:text-2xl lg:text-3xl font-bold text-white'>Ansh Goyal</div>
            <div className='text-xl  text-green-500'>Fancy Admin</div>
        </div>
        <div className='flex md:flex-col items-center  gap-4 text-xl md:text-2xl text-gray-50 '>
          <div className="cursor-pointer" onClick={()=>setUpload(true)}>Upload</div>
          <div className="cursor-pointer" onClick={()=>setUpload(false)}>Users</div>
          <div className=" hidden md:block cursor-pointer">Admins</div>
          <div className=" hidden md:block cursor-pointer">Manage Users</div>

          <div className="hidden md:block cursor-pointer">Settings</div>
          <div className=" hidden md:block cursor-pointer">Logout</div>

        </div>
    </div>

      <div className="h-full w-full">
      {upload ? <UploadFile /> : <Data />}
      </div>


    </div>
  );
}

export default App;
