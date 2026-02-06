import { motion } from 'framer-motion';

export default function Preloader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-evolve-cream flex items-center justify-center"
        >
            <div className="relative flex flex-col items-center">
                <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [0.8, 1.1, 1],
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        times: [0, 0.6, 1]
                    }}
                    src="/images/logo.png"
                    alt="EvolveWood Loading"
                    className="w-48 md:w-64 h-auto object-contain mb-8"
                />

                {/* Loading Bar */}
                <div className="w-48 h-1 bg-evolve-brown/10 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-evolve-green"
                    />
                </div>
            </div>
        </motion.div>
    );
}
