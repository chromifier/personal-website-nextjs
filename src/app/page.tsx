"use client";

import heroImg from "@/assets/hero_img.jpg";
import logoColor from "@/assets/logo-color.png"
import Image from "next/image";
import {motion, useScroll} from "framer-motion"

export default function Home() {
  let {scrollYProgress} = useScroll();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full bg-base-100">
      <motion.div layout className="hero">
        <motion.div
          style={{opacity: scrollYProgress}}
          className="hero_image max-h-screen"
        >
          <Image
            src={heroImg}
            alt="Hero Image"
          />
        </motion.div>
        <Image
            src={logoColor}
            alt="Logo Color Image"
          />
      </motion.div>
    </main>
  )
}
