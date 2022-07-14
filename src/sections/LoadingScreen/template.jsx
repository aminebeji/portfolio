import React from 'react'
import AnimatedText from 'react-animated-text-content';
function LoadingScreen() {
    return (
        <div
            style={{
                display: "flex",
                textAlign:"center",
                justifyContent:"center",
                "alignItems":"center",
                height:"100vh"
            }}
        ><AnimatedText
            type="chars"
            animation={{
                x: '200px',
                y: '-20px',
                scale: 1.5,
                ease: 'ease-in-out',
            }}
            animationType="rifle"
            interval={0.1}
            duration={0.9}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
        >
                Welcome To ,
                Beji's Portfolio
            </AnimatedText></div>
    )
}

export default LoadingScreen