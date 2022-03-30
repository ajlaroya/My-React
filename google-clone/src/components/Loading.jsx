import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
        <RotatingLines width="50" strokeColor="#00BFFF" />
    </div>
  )
}

export default Loading