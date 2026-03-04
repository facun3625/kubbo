import { useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
    value: number;
    duration?: number;
}

export const AnimatedCounter = ({ value, duration = 2 }: AnimatedCounterProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px" });

    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return <motion.span ref={ref}>{display}</motion.span>;
};
