import { motion } from "framer-motion";
import Link from "next/link";

type Navitemprops = {
    href: string,
    name: string;
};

export default function Navitem({ href, name }: Navitemprops) {
    return (
        <li>
            <motion.div
                whileHover={{ x: 4 }}
            >
                <Link href={href}>{name}</Link>
            </motion.div>
        </li>
    );
}