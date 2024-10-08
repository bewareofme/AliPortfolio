import { motion } from "framer-motion"

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}

// calculkate the reverse index for the staggered delay
const reverseIndex = (index:number) => {
    const totalSteps:number = 6
    return totalSteps - index - 1
}
const Stairs = () => {
    return (
        <>
            {/* return 6 motion divs each representing a step of the stairs
    
    Each div will have the animation defined by the stairsAnimation object
    The delay for each div is calculated sinomically based on its reversed index,
    creating a staggered effect with increasing delay for each subsequent step
    */}
            {[...Array(6)].map((_, index) => {
                return(
                <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1
                }}
                className="h-full w-full bg-white relative"
                >
                    
                </motion.div>
            )})}
        </>
    )
}

export default Stairs