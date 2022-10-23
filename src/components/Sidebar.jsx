import React from 'react'
import { Link } from 'react-router-dom'
import { GiAbstract014 } from 'react-icons/gi';
import { MdOutlineCancel } from 'react-icons/md';
import items from '../data/menus.json'
import SidebarItem from './SidebarItem';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={handleCloseSidebar} className="items-center gap-3 ml-3 mt-4 flex text-3xl font-extrabold tracking-tight dark:text-white text-white">
            <GiAbstract014 />
            <span>Hercules</span>
          </Link>
          <button onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}>
            <MdOutlineCancel className='mr-3 mt-4 text-xl rounded-full block md:hidden text-white'/>
          </button>
        </div>
        <div className='mt-10'>
          {items.map((item, index) => <SidebarItem key={index} item={item} func={handleCloseSidebar} />)}
        </div>
      </>
      )}

    </div>
  )
}

export default Sidebar