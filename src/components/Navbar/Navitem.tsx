import { motion } from "framer-motion";

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
                <a onClick={() => {
                    const el = document.getElementById(name.toLowerCase());
                    el?.scrollIntoView({ behavior: "smooth" });
                    console.log("click", name);
                }}>
                    {name}
                </a>
            </motion.div>
        </li>
    );
}