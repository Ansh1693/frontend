import React from 'react'

const Table = ({data}) => {
  return (
    <div className='"p-5 h-auto'>

    <div className="overflow-auto rounded-lg shadow ">
      <table className="w-full text-gray-50">
        <thead className="bg-slate-600 border-b-2 border-gray-200">
        <tr>
          <th className="w-1/6  p-3 text-sm font-semibold tracking-wide text-left">First Name</th>
          <th className="w-1/6  p-3 text-sm font-semibold tracking-wide text-left">Last Name</th>
          <th className="w-2/6  p-3 text-sm font-semibold tracking-wide text-left">Email</th>
          <th className="w-1/6  p-3 text-sm font-semibold tracking-wide text-left">Age</th>
          <th className="w-1/6  p-3 text-sm font-semibold tracking-wide text-left">Gender</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
            {data && data.map((item, index) => (

                <tr className="bg-slate-500" key={index}>
          
          <td className="p-3 text-sm whitespace-nowrap text-wrap">{item.firstName}</td>
          <td className="p-3 text-sm whitespace-nowrap text-wrap">{item.lastName}</td>
          <td className="p-3 text-sm whitespace-nowrap text-wrap">{item.email}</td>
          <td className="p-3 text-sm whitespace-nowrap text-wrap">{item.age}</td>
          <td className="p-3 text-sm whitespace-nowrap text-wrap">{item.gender}</td>
        </tr>
            ))
            }
        </tbody>
      </table>
    </div>

  </div>
  )
}

export default Table