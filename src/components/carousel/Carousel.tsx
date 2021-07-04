import React, { HTMLAttributes, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import '../../style/base.scss';
import "./Carousel.scss";

export interface Carousel extends HTMLAttributes<HTMLDivElement> {
    children?: any;
}

export interface CarouselItem extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: any;
    width?: string | number;
    index?: number
}

export const CarouselItem = ({ children, width, index }: CarouselItem) => {
    return (
        <div className={`carousel-item py-6 ${index && index % 2 === 1 ? 'background-light' : 'background-dark'}`} style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }: Carousel) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div
            {...handlers}
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
        </div>
    );
};

export default Carousel;
