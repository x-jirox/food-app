// src/hooks/useScrollToTop.ts
import { useEffect, useState } from "react";

export const useScrollToTop = (heightToShow = 250) => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        const windowScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        setIsVisible(windowScroll > heightToShow);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return { isVisible, scrollTop };
};
