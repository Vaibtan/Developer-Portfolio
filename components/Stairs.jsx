import { animate, motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

//CALCULATE THE REVERSE INDEX FOR STAGGERED DELAY
const reverseIndex = (index) => {
    
    const totalSteps = 6;
    return totalSteps - index - 1;
};


const Stairs = () => {
    return (
        <>
        { /*
     RENDER 6 MOTION DIVS,EACH REPRESENTING A STEP OF THE STAIRS
     EACH DIV WILL HAVE THE SAME ANIMATION DEFINED BY THE STAIRS_ANIMATION OBJECT
     THE DELAY FOR EACH DIV WILL BE CACULATED SINAMICALLY BASED ON ITS REVERSED INDEX,
     CREATING A STAGGERED EFFECT W/ DECREASING DELAY FOR EACH SUBSEQUENT STEP.

        */ }
        </>
    );
};

export default Stairs;