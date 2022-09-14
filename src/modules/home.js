import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomButton } from '../components/button/customButton'


const Home = () => {

    const navigate = useNavigate()

  return (
    <div className='h-screen min-h-screen bg-[#0178ff] flex flex-col gap-6 items-center justify-center'>
      <div>
        <h2 className='text-white text-2xl font-bold w-full max-w-md text-center'>Welcome to my webapp components and compilatons</h2>
      </div>
        <div className='w-auto flex items-center justify-center p-4 bg-white'>
            <CustomButton className="" color="white" onClick={() => navigate('/login')}>Sign in</CustomButton>
        </div>
    </div>
  )
}

export default Home