import SwipeableViews from "react-swipeable-views"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

const slides = [
    {src: '/portfolio-slide1.jpg', label: 'Etude de cas - Un tour de quelques unes de nos campagnes marketing'},
    {src: '/portfolio-slide2.jpg', label: 'Goodies, accessoires et services'}
]
const useStyles = makeStyles(theme =>({
    container: {
        position: 'relative',
        width: 300,
        [theme.breakpoints.up('sm')]: {
            width: 550            
        },
        [theme.breakpoints.up('md')]: {
            width: 700
        },
        margin: 'auto'
    },
    chevronLeft: {
        position : 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        marginLeft: '-60px',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        '&:disabled': {
            backgroundColor: '#827d7d'
        }
    },
    chevronRight: {
        position : 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        marginRight: '-60px',
        color: "#fff",
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        '&:disabled': {
            backgroundColor: '#827d7d'
        }
    },
    slide: {
        // padding: '24px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 'auto',
        cursor: 'pointer',
    },
    
    imgContainer: {
        
    },
    img: {
        marginBottom: theme.spacing(3),
        width: '100%',
        maxWidth: '100%',
    },
    label: {
        textAlign: 'center'
    },
    icon: {
        color: '#fff',
    }
}))
export const Slider = ({handleIndex}) => {
    const [index, setIndex] = React.useState(0);
    const classes = useStyles();

    const handleSlideChangeIndex = (index) => {
        setIndex(index)
    }
    const handleLeftChevron = () => {
        index>0 && setIndex(index - 1)
        console.log(index)
    }
    const handleRightChevron = () => {
        index<slides.length-1 && setIndex(index + 1)
        console.log(index)

    }
    return (
        <div className={classes.container}>
            <IconButton className={classes.chevronLeft} onClick={handleLeftChevron} disabled={index===0}>
                <ChevronLeftIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.chevronRight} onClick={handleRightChevron} disabled={index===slides.length-1}>
                <ChevronRightIcon className={classes.icon}  />
            </IconButton>
        <SwipeableViews 
            index={index} 
            onChangeIndex={handleSlideChangeIndex} 
            enableMouseEvents 
            style={{width: '100%'}} 
            >
            {
                slides.map((slide, index) => (
                    <div key={index} className={classes.slide} onClick={() => handleIndex(index)} >
                        <div className={classes.imgContainer}>  
                            <img className={classes.img} src={slide.src} />
                        </div>
                        <Typography className={classes.label} variant='h6'>
                            {slide.label} 
                        </Typography>
                    </div>
                )) 
            }
        </SwipeableViews>

        </div>    
    )
}
