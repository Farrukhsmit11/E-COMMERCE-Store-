import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";



export default function Navbar() {
    return (
        <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
            <h1 className="text-xl font-bold">Exclusive</h1>
            <input
                className="outline-none text-sm bg-transparent border-4 p-1 bg-"
                type="search"
                placeholder="What are you looking for?"
            />
             <CiSearch className="text-3xl" />
           
            <nav className="flex gap-4">
                <a href="#home" className="hover:text-gray-500">Home</a>
                <a href="#contact" className="hover:text-gray-500">Contact</a>
                <a href="#about" className="hover:text-gray-500">About</a>
                <a href="#signup" className="hover:text-gray-500">Sign Up</a>
            </nav>
            <div className="flex items-center gap-2">
            <CiHeart className="text-3xl" />
            <CiShoppingCart className="text-3xl"/>
                <CiUser className="w-7 h-7 bg-red-500 rounded-full px-2 text-white " />
                
                
            </div>

        </div>
    );
}
