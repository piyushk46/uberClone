import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center absolute w-[93%] top-0 ' onClick={()=>{
        props.setVehiclePannel(false)
      }}><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
      <div onClick={()=>{
        props.setConfirmRidePannel(true)
      }} className='flex border-2 w-full  mb-2 items-center p-3 active:border-black rounded-xl bg-gray-100 justify-between'>
        <img  className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83HiBnJ__0H64SJgMdXYTmS_bivLfiG5dWw&s" alt="" />
        <div className='w-1//2 ml-2'>
          <h4 className='font-medium text-sm'>UberGo<span><i className="ri-user-3-fill"></i>4</span> </h4>
          <h5 className='font-medium text-sm'>2 Min away</h5>
          <p className='font-medium text-xs text-gray-600'>affordable, compact ride</p>
        </div>
        <h2 className='text-xl font-semibold'>RS. 250</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePannel(true)
      }} className='flex border-2 w-full  mb-2 items-center p-3 active:border-black rounded-xl bg-gray-100 justify-between'>
        <img  className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRwq3tLif_xvXNJISmj0HXpBblpJuRjcrqw&s" alt="" />
        <div className='w-1//2 ml-2'>
          <h4 className='font-medium text-sm'>UberGo<span><i className="ri-user-3-fill"></i>4</span> </h4>
          <h5 className='font-medium text-sm'>2 Min away</h5>
          <p className='font-medium text-xs text-gray-600'>affordable, compact ride</p>
        </div>
        <h2 className='text-xl font-semibold'>RS. 190</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePannel(true)
      }} className='flex border-2 w-full  mb-2 items-center p-3 active:border-black rounded-xl bg-gray-100 justify-between'>
        <img  className='h-19 w-1/4' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
        <div className='w-1//2 ml-2'>
          <h4 className='font-medium text-sm'>UberGo<span><i className="ri-user-3-fill"></i>4</span> </h4>
          <h5 className='font-medium text-sm'>2 Min away</h5>
          <p className='font-medium text-xs text-gray-600'>affordable, compact ride</p>
        </div>
        <h2 className='text-xl font-semibold'>RS. 140</h2>
      </div>
    </div>
  )
}

export default VehiclePanel