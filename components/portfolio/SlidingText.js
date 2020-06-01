import SwipeableViews from 'react-swipeable-views'
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
    root: {
       backgroundColor: '#000',
       padding: theme.spacing(1),
       textAlign: 'right'
    },
    text: {
        fontWeight: 700
    }
}))
export const SlidingText = () => {
    const classes = useStyles();
    const [index, setIndex] = React.useState(0);

    const handleIndexChange = (index) => {
        setIndex(index)
    }
    return (
        <div className={classes.root}>
            <SwipeableViews enableMouseEvents autoPlay >
                <Typography onViewChange={handleIndexChange} variant='h5' className={classes.text}>
                    Signez avec votre image
                </Typography>
                <Typography onViewChange={handleIndexChange} variant='h5' className={classes.text}>
                    Des produits remarquables
                </Typography>
            </SwipeableViews>
        </div>
    )
}
