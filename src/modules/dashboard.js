import React from 'react'
import LayoutContent from '../components/layout/layout'

const Dashboard = () => {
  return (
    <LayoutContent>
      <div className='bg-white rounded-md w-full h-full p-4'>
        <div className='flex flex-col'>
          <h2 className='font-bold text-2xl'>Activities</h2>
        </div>
      </div>
    </LayoutContent>
  )
}

export default Dashboard