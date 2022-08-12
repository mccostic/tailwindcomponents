import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {

    const navigate = useNavigate()

  return (
    <Button onClick={() => navigate(-1)} className="font-bold text-[#0178ff]">Back</Button>
  )
}
