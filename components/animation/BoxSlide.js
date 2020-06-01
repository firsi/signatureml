import { useSpring, animated } from "react-spring"
import { isVisible, optimizedScrollListener } from "../../util/helper"

export const BoxSlide = ({duration, delay, children, ...props}) => {
    const ref = React.useRef(null);
    const [animate, setAnimate] = React.useState(false)
    const springProps = useSpring({
        from: {
            transform: 'translate3d(300px,0,0)',
        },
        to: {
            transform: animate ? 'translate3d(0,0,0)' : 'translate3d(300px,0,0)' ,
        },
        config: {
            // duration: duration ? duration : 300,
            tension: 100,
            mass: 10,
            friction: 40
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
        <animated.div style={springProps} ref={ref} {...props}>
            {children}
        </animated.div>
    )
}
