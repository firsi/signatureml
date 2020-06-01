import makeStyles from "@material-ui/core/styles/makeStyles"
import Button from "@material-ui/core/Button"


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    button: {
        color: '#fff',
        fontSize: '1.3em',
        fontWeight: 700,
        transition: '.3s ease-in-out',
        '&:hover': {
            color: theme.palette.primary.main
        }
    }
}))
export const Links = ({handleIndex, ...props}) => {
    const classes = useStyles();
    return (
        <div {...props}>
            <div className={classes.root}>
                <Button variant='text' onClick={() => handleIndex(1)} className={classes.button}>Etude de cas</Button>
                <Button variant='text' onClick={() => handleIndex(2)} className={classes.button}>Produits</Button>
            </div>
        </div>
    )
}
