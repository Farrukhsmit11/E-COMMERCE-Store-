import logo from '../assets/Logo/shop logo.jpg'
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
    return (
        <div className="h-28 border-2 flex justify-around items-center ">

            <img className='w-20' src={logo} />

            <div className='border-2 w-60 px-3 h-10 p-2 rounded center bg-[#F5F5F5]  outline-none'>
                <input type='search' className='outline-none w-full text-sm bg-transparent justify-around items-center font-medium ' placeholder='What are you looking for? ' />
                <CiSearch className='font-bold text-3xl search-logo' />
            </div>

            <ul className='flex justify-center gap-3 '>
                <li className='hover-underline'>Home</li>
                <li className=''>About</li>
                <li className=''>Contact</li>
                <li></li>
            </ul>

        </div>
    )
}
