import { useState, useEffect } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        const cleanUp = () => {
            console.log("runs if a useEffect dependecy changes")
            window.removeEventListener("resize", handleResize);
        }

        return cleanUp;
    }, [])

    return windowSize;
}