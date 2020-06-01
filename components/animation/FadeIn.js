import { useSpring, animated } from "react-spring"
import { isVisible, optimizedScrollListener } from "../../util/helper"

export const FadeIn = ({duration, delay, children, ...props}) => {
    const ref = React.useRef(null);
    const [animate, setAnimate] = React.useState(false)
    const springProps = useSpring({
        from: {
                opacity:0,
        },
        to: {
            opacity: animate ? 1 : 0 ,
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
            window.removeEventListener('scroll');
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
        <animated.div style={springProps} ref={ref} {...props}>
            {children}
        </animated.div>
    )
}
