import React from 'react'


interface SecondPageSectionProps {
    id: number;
    imageDisplay: any;
}

const SecondPageSectionOne = () => {
  return (
    <div className='w-full h-[300px]'>
      <div className='ml-2 md:ml-10 mt-10'>
        <h3 className='text-3xl font-bold '> Health Japanese Fried Rice </h3>
      </div>

    </div>
  )
}

export default SecondPageSectionOne