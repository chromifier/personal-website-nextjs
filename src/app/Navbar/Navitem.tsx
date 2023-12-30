import { motion } from "framer-motion"

type Navitemprops = {
    href: string,
    name: string
}

export default function Navitem({href, name} : Navitemprops) {
    return (
        <li>
            <motion.a
                whileHover={{x: 4}}
                href={href}
            >
                {name}
            </motion.a>
        </li>
    )
}