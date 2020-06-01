import makeStyles from "@material-ui/core/styles/makeStyles"
import PhoneIcon from "@material-ui/icons/Phone"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: '160px',
        height:'33px',
        background: props => props.backgroundColor ? props.backgroundColor : theme.palette.secondary.main,
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems : 'center',
        borderRadius: '5px',
    },
    text: {
        fontWeight: props => props.weight ? props.weight : 400,
    },
    icon: {
        paddingRight: theme.spacing(1)
    }
}))
export const Contacts = ({variant='body1', backgroundColor, weight}) => {
    const props = {backgroundColor, weight}
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <PhoneIcon  className={classes.icon} />
            <Typography className={classes.text} variant={variant}> +223 76 21 48  </Typography>
        </div>
    )
}
