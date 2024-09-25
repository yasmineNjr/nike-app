import { headerLogo } from '../assets/images';
import { hamburger, close, star } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'><img src={headerLogo} alt='logo' width={130} height={29}/></a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}
                        className='fonts-montserrat leading-normal text-lg text-slate-gray'
                    >
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            {/* <div className='hidden max-lg:block'>
                <img src={hamburger} alt='menu' width={25} height={25}/>
            </div> */}
            <div className='hidden max-lg:block'>
            {/* sm:hidden flex flex-1 justify-end items-center */}
                <img 
                src={toggle ? close : hamburger} 
                alt='menu' 
                width={25} height={25}
                className='object-contain'//w-[28px] h-[28px] 
                onClick={() => setToggle((prev) => !prev)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-width-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((item, index) => (
                        <li key={item.label} 
                        className={`font-palanquin font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ?' mr-0' : 'mb-4'}`}>
                            <a href={`${item.href}`}>{item.label}</a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
       
    </header>
  )
}

export default Nav
