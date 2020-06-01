import { useSpring, animated } from "react-spring"
import { isVisible, optimizedScrollListener } from "../../util/helper"

export const ColorChange = ({duration, primaryColor, secondaryColor, delay, children}) => {
    const ref = React.useRef(null);
    const [animate, setAnimate] = React.useState(false)
    const springProps = useSpring({
        from: {
                backgroundColor: primaryColor,
        },
        to: {
            backgroundColor: animate ? secondaryColor : primaryColor,
        },
        config: {
            duration: duration ? duration : 300
        },
        delay: delay ? delay : 300
    })

    React.useEffect(() => {
        if(isVisible(ref.current)){
            setAnimate(true)
        }
        optimizedScrollListener(activateAnimation);

        return () => {
            window.removeEventListener('scroll', activateAnimation);
        }
    },[]);
    const activateAnimation = () => {
        if(isVisible(ref.current)){
            setAnimate(true)
        }
        else{
            setAnimate(false);
        }
    }
    return (
        <animated.div style={springProps} ref={ref}>
            {children}
        </animated.div>
    )
}
