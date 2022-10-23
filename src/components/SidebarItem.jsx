import { Link, NavLink, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiFolderOpen } from 'react-icons/hi';
import { TbArrowsDownUp } from "react-icons/tb";
import { GoSettings } from "react-icons/go";
import { FaToolbox } from 'react-icons/fa';
import { SiGooglesheets } from 'react-icons/si';

import { useState } from 'react';

export default function SidebarItem({ item, func }) {
    const [open , setOpen] = useState(false);
    const location = useLocation();
    const SidebarTitleIcon = ({icon}) => {
        switch (icon) {
            case 'HiFolderOpen':
                return <HiFolderOpen />;
            case 'TbArrowsDownUp':
                return <TbArrowsDownUp />;
            case 'GoSettings':
                return <GoSettings />;
            case 'FaToolbox':
                return <FaToolbox />;
            case 'SiGooglesheets':
                return <SiGooglesheets />;
            default:
                return null;
        }
    }


    if (item.childrens) {
        return (
            <div className="mt-1 pr-3">
                <div onClick={() => setOpen(!open)} className='rounded-xl hover:cursor-pointer hover:bg-white hover:bg-opacity-10 flex text-white font-semibold items-center text-base px-6 py-3'>
                    <SidebarTitleIcon icon={item.icon} />
                    <p className="rounded-xl ml-2">
                        {item.title}
                    </p>
                    <MdKeyboardArrowDown className="ml-auto text-lg"/>
                </div>
                <div className="pt-1">
                    <NavLink onClick={ func }>
                        {open && item.childrens.map((children) => (
                            <Link to={children.path} key={children.title}>
                                <p className={`rounded-xl py-2 px-6 mb-1 ml-6 text-base ${location.pathname === '/' + children.path ? 'bg-white text-black' : 'hover:bg-white hover:bg-opacity-10 text-white'}`}>
                                    {children.title}
                                </p>
                            </Link>
                        ))}
                    </NavLink>
                </div>
            </div>
        )
    } else {
        return (
            <Link to={item.path}>
                <p>
                    {item.title}
                </p>
            </Link>
        )
    }
}