import React from 'react'
import LayoutContent from '../components/layout/layout'

const Dashboard = () => {
  return (
    <LayoutContent>
      <div className='bg-white rounded-md w-full h-full flex flex-col gap-4 p-4'>
        <div className='flex flex-col w-full gap-4'>
          <h2 className='font-bold text-2xl'>Activities</h2>
          <div className='grid w-full gap-4 h-full'>
            <div className='rounded-md bg-[#0178ff] p-4 h-60'>
              <div className='flex flex-col h-full gap-4'>
                <h2 className='text-white text-xl font-semibold underline'>Updates</h2>
                
              </div>
            </div>
          </div>
        </div>
        <div>Hello</div>
      </div>
    </LayoutContent>
  )
}

export default Dashboard