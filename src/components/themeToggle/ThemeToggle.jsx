"use client"
import { ThemeContext } from "@/context/ThemeContext"
import Image from "next/image"
import { useContext } from "react"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme);
    return (
        <div
            className={`w-10 h-5 rounded-xl flex justify-between items-center  relative ${theme === "dark" ? 'bg-white' : 'bg-black'}`}
            onClick={() => { toggleTheme(); }}>
            <Image src={"/moon.png"} alt="moon" width={14} height={14} className="object-contain mx-[2px]" />
            <div className={`w-[15px] h-[15px] rounded-xl  absolute ${theme === "dark" ? 'right-[1px] bg-black' : 'left-[1px] bg-white'} `}></div>
            < Image src={"/sun.png"} alt="sun" width={14} height={14} className="object-contain mx-[2px]" />
        </div>
    )
}

export default ThemeToggle