import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";

function Loader({ isLoading, setIsLoading }) {

    useEffect(() => {
        setTimeout(() => {
            setIsLoading();
        }, 1900)
    }, [setIsLoading]);

    return (
        <AnimatePresence>
            {
                isLoading && (

                    <motion.div 
                    className="loader"
                    exit={{ scale: 0 }}
                    key="motiondivleave"
                    transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                    }}
                    >
                        <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 160">
                            <title>Logo</title>
                            <g>
                                <g id="AN" transform="translate(25.000000, 40.000000)">
                                <motion.text
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        delay: 1,
                                    }}
                                    exit={{
                                        scale: 2,
                                    }}
                                    x="24" 
                                    y="16" 
                                    fill="currentColor" 
                                    fontSize="30" 
                                    textAnchor="middle"
                                    >
                                    AN
                                </motion.text>
                                </g>
                                <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M 50, 2
                                L 10, 45
                                
                                L 50, 95
                                
                                L 90, 45 z"
                                />
                            </g>
                        </svg>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
}

export default Loader;