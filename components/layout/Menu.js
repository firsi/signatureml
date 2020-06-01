import { useEffect } from "react"
import  { animated, useTransition } from 'react-spring'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Link from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"
import { SUBLINKS } from '../../util/constants';

const useStyles = makeStyles(theme => ({
    navUl: {
        listStyle: 'none',
        paddingLeft: '0',
        transform: 'translateY(-30%)',
        textAlign: 'center'
    },
    link: {
        marginTop: theme.spacing(5),
        color: '#fff',
        display: 'block',
        fontSize: '2em',
        fontWeight: 700,
        transition: '.2s ease-in-out',
        transformOrigin: 'center',
        '&:hover': {
            color: theme.palette.primary.light,
            transform: 'scale(1.2)',
            textDecoration: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.7em'
        }
    },
    sublinkWrapper:  {
        overflow: 'hidden'
    },
    sublink: {
        color: '#fff',
        fontSize: '1em',
        fontWeight: 700,
        transition: '.3s ease-in-out',
        transformOrigin: 'center',
        '&:hover': {
            color: theme.palette.primary.light,
            textDecoration: 'none'
        }
    },
    sublinkContainer: {
        textAlign: 'left',
        paddingLeft: theme.spacing(1)
    },
}))
export const Menu = ({open, handleIndex}) => {
    const classes = useStyles();
    const [links, setLinks] = React.useState([]);
    const [showLinks, setShowLinks] = React.useState(false)
    const transitions = useTransition(links, link => link.key, {
        from: {opacity: 0, transform: 'translate3d(0,-40px,0)'},
        enter: {opacity: 1, transform: 'translate3d(0,0,0)'},
        leave: {opacity: 0, transform: 'translate3d(0,-40px,0)'},
        config: {
            duration: 500
        }
    })
    
    const handleShowLink = () => {
        setShowLinks(!showLinks);
    }
    
    useEffect(() => {
        showLinks ? setLinks([...SUBLINKS]) : setLinks([]);
        !open && setLinks([]);
    },[setLinks, open, showLinks])

    const addSublinks = () => {
        return transitions.map(({item, key, props}) => 
           item && <div key={key} className={classes.sublinkWrapper}>
               <animated.div className={classes.sublinkContainer}  style={props}>
                            <Link 
                            variant="button" 
                            color="textPrimary" 
                            href={item.href} 
                            className={classes.sublink}
                            >
                                {item.label}
                            </Link>
                    </animated.div>
           </div>
        )
    }
    return (
        <ul  className={classes.navUl}>
            <li>
                <Button 
                variant="text" 
                className={classes.link}
                onClick={handleShowLink}
                >
                    Portfolio
                </Button>
                {addSublinks()}
            </li>
            <li>
                <Link 
                variant="button" 
                href='/qui-sommes-nous' 
                className={classes.link}
                >
                    Qui sommes nous?
                </Link>
            </li>
            <li>
                <Button 
                variant="text" 
                className={classes.link}
                onClick={() => handleIndex(1)}
                >
                    Contacts
                </Button>
            </li>
        </ul>
    )
}
