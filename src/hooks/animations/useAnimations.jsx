import React from 'react'
import anime from "animejs"
function useAnimations() {
    const animationRef = React.useRef(null);
    React.useEffect(() => {
        animationRef.current = anime({
            targets: '.line-drawing-demo .lines path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function (el, i) { return i * 250 },
            direction: 'alternate',
            loop: true
        });
    }, []);
    return {}
}

export default useAnimations