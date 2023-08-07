import { useRef } from 'react';

const useScroll = () => {
    // References to the container and initial properties
    const scrollContainer = useRef(null);
    const isDown = useRef(false); // State to determine if the user is actively dragging
    const startX = useRef(0); // Initial X position when dragging starts
    const scrollLeft = useRef(0); // Initial scroll position when dragging starts

    // Function to set initial properties when drag starts
    const start = (pageX) => {
        isDown.current = true;
        startX.current = pageX;
        scrollLeft.current = scrollContainer.current.scrollLeft;
    };

    // Function to handle dragging movement and update the scroll position
    const move = (pageX) => {
        if (!isDown.current) return;
        const x = pageX;
        const walk = x - startX.current;
        scrollContainer.current.scrollLeft = scrollLeft.current - walk;
    };

    // Function to reset the dragging state when drag ends
    const end = () => {
        isDown.current = false;
    };

    // Function to initialize event listeners for drag-scroll functionality
    const initializeScroll = () => {
        const slider = scrollContainer.current;

        // Desktop Events
        slider.addEventListener("mousedown", (e) => start(e.pageX));
        slider.addEventListener("mouseleave", end);
        slider.addEventListener("mouseup", end);
        slider.addEventListener("mousemove", (e) => move(e.pageX));

        // Mobile Events
        slider.addEventListener("touchstart", (e) => start(e.touches[0].pageX), { passive: true });
        slider.addEventListener("touchend", end, { passive: true });
        slider.addEventListener("touchcancel", end, { passive: true });
        slider.addEventListener("touchmove", (e) => move(e.touches[0].pageX), { passive: true });
    };

    return { scrollContainer, initializeScroll };
};

export default useScroll;
