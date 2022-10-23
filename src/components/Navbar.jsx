import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <button type='button' onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
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
    <div className='flex justify-between p-2 md:mx-6 realtive'>
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
        <NavButton
          customFunc={() => handleClick('userProfile')}
          color="blue" 
          icon={<FaUser />} 
        />
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar