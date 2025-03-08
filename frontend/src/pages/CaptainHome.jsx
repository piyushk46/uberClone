import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {
    const [ridePopupPannel, setRidePopupPannel] = useState(true)
    const [confirmRidePopupPannel, setConfirmRidePopupPannel] = useState(false)

    const ridePopupPannelRef = useRef(null)
    const confirmRidePopupPannelRef = useRef(null)

    

    useGSAP(function(){
        if(ridePopupPannel){
          gsap.to(ridePopupPannelRef.current,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(ridePopupPannelRef.current,{
            transform:'translateY(100%)'
          })
        }
      }, [ridePopupPannel])

      useGSAP(function(){
        if(confirmRidePopupPannel){
          gsap.to(confirmRidePopupPannelRef.current,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(confirmRidePopupPannelRef.current,{
            transform:'translateY(100%)'
          })
        }
      }, [confirmRidePopupPannel])

  return (
    <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
          <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
        </div>
        <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='h-2/5 p-6'>
            <CaptainDetails/>
        </div>
        <div  ref={ridePopupPannelRef} className='fixed w-full z-10 translate-y-full bottom-0 px-3 py-10 pt-12 bg-white '>
            <RidePopUp setRidePopupPannel={setRidePopupPannel} setConfirmRidePopupPannel={setConfirmRidePopupPannel}/>
        </div>
        <div  ref={confirmRidePopupPannelRef} className='fixed w-full h-screen z-10 translate-y-full bottom-0 px-3 py-10 pt-12 bg-white '>
            <ConfirmRidePopUp setConfirmRidePopupPannel={setConfirmRidePopupPannel} setRidePopupPannel={setRidePopupPannel}/>
        </div>
    </div>
  )
}

export default CaptainHome