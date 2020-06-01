import makeStyles from '@material-ui/core/styles/makeStyles'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'


const useStyles = makeStyles(theme => ({
    closeIcon: {
        color: '#fff',
    },
}))
export const CloseButton = (props) => {
    const classes = useStyles();
    return (
        <IconButton
            aria-label="Fermer"
            {...props}
        >
            <CloseIcon className={classes.closeIcon} />
        </IconButton>
    )
}
