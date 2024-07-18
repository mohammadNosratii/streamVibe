import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AuthenticationCard({ children }: { children: ReactNode }) {
    return (
        <motion.div initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center bg-[#ffffff33] dark:bg-[#98979733] shadow-normal backdrop-blur-lg rounded-xl p-8 w-[350px] md:w-[500px]">
            {children}
        </motion.div>
    )
}
