import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaUser, FaUserCircle } from 'react-icons/fa';
import { Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <button type='button' onClick={customFunc} style={{ color }} className="relative text-xl rounded-xl p-3 hover:bg-light-gray">
    <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
      {icon}
    {/* </span> */}
  </button>
) 


const Navbar = () => {
  const { activeMenu, setActiveMenu, handleClick, isClicked, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);

  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  },[screenSize, setActiveMenu]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton 
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue" 
        icon={<AiOutlineMenu />} 
      />
      <div className='flex'>
        <NavButton
          dotColor="#03C9D7"         
          customFunc={() => handleClick('notification')}
          color="blue" 
          icon={<RiNotification3Line />} 
        />
        <div className='p-3 flex hover:bg-light-gray rounded-xl' onClick={() => handleClick('userProfile')}>
          <FaUserCircle className='text-2xl mt-1' style={{color: 'blue'}}/>
          <span className='pl-2 text-gray-700 text-xs'>
            <p>aeguinazu@gmail.com</p>
            <p>Admin</p>
          </span>
        </div>
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar