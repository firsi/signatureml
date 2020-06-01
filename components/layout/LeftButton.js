import makeStyles from '@material-ui/core/styles/makeStyles'
import IconButton from '@material-ui/core/IconButton'
import LeftChevronIcon from '@material-ui/icons/ChevronLeft'


const useStyles = makeStyles(theme => ({
    leftChevronIcon: {
        color: '#fff',
    },
}))
export const LeftButton = (props) => {
    const classes = useStyles();
    return (
        <IconButton
            aria-label="Retour en arrière"
            {...props}
        >
            <LeftChevronIcon className={classes.leftChevronIcon} />
        </IconButton>
    )
}