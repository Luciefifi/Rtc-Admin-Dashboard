import { useEffect } from "react"
import { useState } from "react"
import { HiMiniBars3 } from "react-icons/hi2";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > 0){
                setIsSticky(true)
            }
        };
        window.addEventListener("scrol", handleScroll)
    }, [])
  return (
    <header className="w-full fixed top-0 left-0 right-0 border-b-2 ">
        <nav className={`py-4 md:px-8 px-4 bg-[#D9D9D9;] ${isSticky ?"sticky top-0 left-0 bg-white" : ""}`}>
        <div className="">
    <div className="flex items-center justify-between">
      <div className="font-bold text-2xl cursor-pointer text-black">
        <a href="./">Logo</a>
        </div>  

        {/* for larger devices */}
        <div className="lg:flex items-center gap-3 hidden text-[#8F8F8F]">
            <a href="./" className="block hover:border-b-2 border-orange-400 py-2 px-4">Orders</a>
            <a href="./" className="block  hover:border-b-2 border-orange-400 py-2 px-4">Inventory</a>
            <a href="./" className="block  active:border-b-2 border-orange-400 py-2 px-4">Reports</a>
            <a href="./" className="block  active:border-b-2 border-orange-400 py-2 px-4">Settings</a>
        </div>
     
        <div className="lg:block hidden absolute top-4 right-4">
            <button className="btn_outliner">NJ</button>
        </div>

        
        <div>
            <button onClick={toggleMenu} className="lg:hidden text-orange-400 text-3xl"> <HiMiniBars3/>
            </button>

        </div>
    </div>
</div>
{
    isMenuOpen && (
        <div className=" lg:hidden mt-4  text-[#8F8F8F] rounded py-4">
             <a href="./" className="block hover:text-orange-400 py-2 px-4 ">Orders</a>
            <a href="./" className="block hover:text-orange-400 py-2 px-4">Inventory</a>
            <a href="./" className="block hover:text-orange-400 py-2 px-4">Reports</a>
            <a href="./" className="block hover:text-orange-400 py-2 px-4">Settings</a>
        </div>

    )
}
        </nav>

    </header>
  )
}

export default Navbar