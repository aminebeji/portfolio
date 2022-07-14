import React from 'react'

function Transition({ children, timeOut, delay }) {
    const defaultStyle = {
        transition: `opacity ms ease-in-out`,
        opacity: 0,
        padding: 20,
        display: "inline-block",
        backgroundColor: "#b3d0ff",
        opacity: '0.01',
        transform: 'translateY(20px)',
        transition: 'opacity 300ms cubic-bezier(0.645,0.045,0.355,1), transform 300ms cubic-bezier(0.645,0.045,0.355,1)'
    };
    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 1 },
        exited: { opacity: 0 }
    };
    return (
        <Transition in={inProp} timeout={300}>
            <div
                style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}
            >{children}</div>
        </Transition>
    )
}
export default Transition