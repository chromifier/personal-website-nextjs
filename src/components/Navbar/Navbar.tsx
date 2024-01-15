"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logoImg from "@/assets/logo-no-background.png";
import Navitem from "./Navitem";

export default function Navbar() {
    const navigation = [
        ["Home", "#home", "/#home"],
        ["About", "#about", "/#about"],
        ["Resume", "#resume", "/#resume"],
        ["Portfolio", "#portfolio", "/#portfolio"],
        ["Contact", "#contact", "/#contact"]
    ];

    return (
        <div className="navbar h-20 bg-base-100 text-base-100 drop-shadow-md sticky top-0 z-50 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <div tabIndex={0} role="button" className="p-4 hover:drop-shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="30px" height="30px"><path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" /></svg>
                        </div>
                    </motion.div>
                    <ul tabIndex={0} className="menu menu-md dropdown-content bg-secondary text-white p-4 rounded-md drop-shadow-md">
                        {
                            navigation.map((item, i) => (
                                <Navitem key={i} name={item[0]} id={item[1]} href={item[2]} />
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 350, damping: 10 }}
                >
                    <Link href="#">
                        <Image
                            src={logoImg}
                            alt="<JM Dev />"
                            width={140}
                        />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};