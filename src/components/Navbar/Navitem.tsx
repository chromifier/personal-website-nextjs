import { motion } from "framer-motion";
import Link from "next/link";

type Navitemprops = {
    id: string,
    name: string;
    href: string,
};

export default function Navitem({ name, id, href }: Navitemprops) {
    return (
        <li>
            <motion.div
                whileHover={{ x: 4 }}
            >
                <Link href={href} onClick={() => {
                    const el = document.getElementById(name.toLowerCase());
                    el?.scrollIntoView({ behavior: "smooth" });
                }}>
                    {name}
                </Link>
            </motion.div>
        </li>
    );
}