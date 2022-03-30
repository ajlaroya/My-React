import React from 'react'
import { Routes as Switch, Route, Navigate } from 'react-router-dom'
import Results from './Results'

export const Routes = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route path="/" element={<Navigate to="/search" replace />}/>
        <Route path='/search' element={<Results />} />
        <Route path='/image' element={<Results />} />
        <Route path='/news' element={<Results />} />
        <Route path='/videos' element={<Results />} />
      </Switch>
    </div>
  )
}