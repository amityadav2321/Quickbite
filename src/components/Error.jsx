import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err =useRouteError();
   
  return (
    <div>
        <h1 className="text-4xl font-bold text-red-500 m-5">Oops!!!</h1>
        <h3 className="text-xl text-gray-700 m-5">Something went wrong!</h3>
        <h3 className="text-xl  m-5">{err.status}: {err.statusText}</h3>
    </div>
  )
}

export default Error