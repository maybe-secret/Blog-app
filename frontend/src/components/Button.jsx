import React from 'react'

const Button = ({value}) => {
  return (
    <div className='w-full md:w-[160px] text-white bg-btn-light-primary hover:bg-btn-light-secondary dark:bg-btn-dark-primary dark:hover:bg-btn-dark-secondary py-2 lg:mt-5 transition text-center cursor-pointer'>
      {value}
    </div>
  )
}

export default Button