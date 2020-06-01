import { useTransition, animated } from "react-spring"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { PortfolioHome } from "../components/portfolio/PortfolioHome"
import { Products } from "../components/portfolio/Products"
import { CaseStudy } from "../components/portfolio/CaseStudy"

const useStyles = makeStyles(theme => ({
    root: {
        
    }
}))
const work = () => {
    const classes = useStyles();
    const [view, setView] = React.useState(0);
    const transitions = useTransition(view, null,{
        from: {transform: 'translateY(100%)'},
        enter: {transform: 'translateY(0%)'},
        leave: {transform: 'translateY(100%)'}
    })
    const handleIndex = (index) => {
        setView(index);
    }
    const selectView = () => {
        switch(view) {
            case 0: 
                return <PortfolioHome handleIndex={handleIndex} />
            case 1: 
                return <Products />
            case 2: 
                return <CaseStudy />
            default: 
                return <PortfolioHome handleIndex={handleIndex} />
        }
    }
    return (
        <div className={classes.root}>
            {transitions.map(({item, key, props}) =>
                {
                    console.log(item);
                    switch(item) {
                        case 0: 
                            return <animated.div style={props}>
                                        <PortfolioHome handleIndex={handleIndex} />
                                    </animated.div>
                        case 1: 
                            return <animated.div style={props}>
                                        <Products handleIndex={handleIndex} />
                                    </animated.div>
                        case 2: 
                            return <animated.div style={props}>
                                        <CaseStudy  />
                                    </animated.div>
                        default: 
                            return <animated.div style={props}>
                                        <PortfolioHome handleIndex={handleIndex} />
                                    </animated.div>
                    }
                }
            )}
        </div>
    )
}

export default work
