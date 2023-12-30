"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logoImg from "@/assets/logo-no-background.png"
import Navitem from "./Navitem";

export default function Navbar() {
    const navigation = [
        "Home",
        "About",
        "Resume",
        "Portfolio",
        "Contact"
    ];


    return (
        <div className="navbar bg-secondary text-base-100 drop-shadow-md sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:drop-shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-[25px] h-[25px] stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </div>
                    </motion.div>
                    <ul tabIndex={0} className="menu menu-md dropdown-content bg-base-200 text-white p-4 rounded">
                        {
                            navigation.map((item, i) => (
                                <Navitem key={i} href="#" name={item} />
                            ))
                        }
                    </ul>
                </div>
                
            </div>
            <div className="navbar-center">
                <Link href="#" className="btn btn-ghost text-2xl">
                        <Image 
                            src={logoImg}
                            alt="<JM Dev />"
                            width={120}
                        />                    
                </Link>
            </div>
        </div>
    )
}