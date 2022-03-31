import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
        <RotatingLines width="50" strokeColor="#3b82f6" />
    </div>
  )
}

export default Loading