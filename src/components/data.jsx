import React from 'react'
import Table from './ui/Table';

const Data = () => {
    const [page, setPage] = React.useState(1);
    const [data, setData] = React.useState([]);
    const [max, setMax] = React.useState(0);

    React.useEffect(() => {
        const response = async ()=>{
            try {
                const result = await fetch(`http://localhost:4001/api/data/users?page=${page}`).then(res => res.json());
                setMax(Math.ceil(result.count / 10));
                setData(result.users);
              } catch (error) {}
            };
            response();
        },[page]);

        const handleIncrement = () => {
            if (page < max) setPage(page + 1);
          };
          const handleDecrement = () => {
            if (page > 1) setPage(page - 1);
          };

  return (
    <div className='flex flex-col gap-2 justify-center p-12'>
        <div className='text-4xl text-bold uppercase text-center text-gray-100'>Users</div>
        <Table data={data} />
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
    </div>
  )
}

export default Data