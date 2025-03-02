"use client";
import { FC } from "react";
import { motion } from "framer-motion";

const AnimatedTitle:FC = () => {
    return (
        <section className="relative w-full h-[700px] bg-black text-white flex flex-col items-center justify-center">
            <div className="container mx-auto lg:px-40 px-5">
                <div className=" relative z-10 max-w-14xl text-center px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}   // Ensure animation triggers when visible
                        className=" text-3xl md:text-5xl font-light !leading-[40px] lg:!leading-[70px] sticky top-0"
                    >
                        Evolving the drive with <span className="font-semibold">360-degree</span> <br />
                        comprehensive solutions
                    </motion.h2>
                </div>
            </div>
        </section>
    );
};
export default AnimatedTitle;