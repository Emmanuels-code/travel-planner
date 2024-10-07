import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData, width = 300, height = 300 }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData, // Pass the Lottie JSON here
        });

        return () => anim.destroy(); // Cleanup on unmount
    }, [animationData]);

    return <div ref={containerRef} style={{ width, height }} />;
};

export default LottieAnimation;
