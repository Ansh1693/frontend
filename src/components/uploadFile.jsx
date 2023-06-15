import React from 'react'
import Table from './ui/Table';

const UploadFile = () => {
    const [file, setFile] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [tableData, setTableData] = React.useState(null);
  const [max, setMax] = React.useState(0);

  React.useEffect(() => {
    if (data) {
        setMax(Math.ceil(data.notInserted.length / 10));
        setTableData(data.notInserted.slice((page - 1) * 10, page * 10));
      }
    } , [page]);

    const handleFileChange = e => {
        setFile(e.target.files[0]);
      };
      const handleIncrement = () => {
        if (page < max) setPage(page + 1);
      };
      const handleDecrement = () => {
        if (page > 1) setPage(page - 1);
      };
      const handleSubmit = async e => {
        e.preventDefault();
        console.log("e");
        if (!file) {
          alert("Please select a file");
          return;
        }
        const formData = new FormData();
        formData.append("csvFile", file);
        try {
          const response = await fetch("http://localhost:4001/api/uploadCsv/upload", {
            method: "POST",
            body: formData
          }).then(res => res.json()).then(res => res);
          console.log(response);
          if (response.message === "failure") {} else {
              setPage(1);
            setData(response);
            console.log(tableData);
          }
          // console.log(response);
    
          // console.log(result);
        } catch (error) {
          console.error(error);
          alert("Error uploading file");
        }
      };

  return (
    <div className='h-full w-full'>
    {!data ? (
        <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
        <form className="w-full flex flex-col gap-4 items-center justify-center" onSubmit={handleSubmit}>
            <label htmlFor="file_input" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Upload file</label>
            <input type="file" id="file_input" className="block  text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" onChange={handleFileChange} />
            <button className="text-xl bg-gray-100 p-4 rounded-lg px-8" type='submit'>Upload</button>
        </form>
            </div>
    ):(
        <div className="w-full h-screen flex flex-col gap-4 justify-center p-12 relative">
            <div className="absolute top-0 right-0 m-4 cursor-pointer" onClick={() => setData(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>

            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
                <p className="text-3xl text-gray-300 ">Data Successfully Entered!!!</p>
                {data && data.notInserted.length > 0 ? (
                    <div className="text-2xl text-gray-200 ">Some data couldn't be entered</div>
                ) : (<div className="text-2xl text-gray-200 ">All data succesfully entered</div>)}
            </div>
            {data && data.notInserted.length > 0 &&(
                <>
            <Table data={tableData} />
            <div className="flex gap-2 justify-center">
            <div className="cursor-pointer" onClick={handleDecrement}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

            </div>
            <div className="cursor-pointer" onClick={handleIncrement}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

            </div>
        </div>
                </>
        )}
        </div>
    )

    }
    </div>
  )
}

export default UploadFile