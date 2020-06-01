import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            justifyContent: props => props.align ? props.align : 'normal'
        }
    },
    content: {
        display: 'inline-block',
        marginLeft: theme.spacing(1),
        color: props => props.color ? props.color : 'inherit'
    },
    icon: {
        // color: props => props.iconColor ? props.iconColor : 'inherit',
        width: '30px',
        opacity: 0.4
    }
}))

const InfoCard = ({ imageUrl, content, variant='h6', color, iconColor, align}) => {
    const props = {color,iconColor, align}
    const classes = useStyles(props);
    return (
        <div className={classes.container}>
            <img src={imageUrl} className={classes.icon}/>
            <Typography variant={variant}  className={classes.content}>{content}</Typography>
        </div>
    )
}

export default InfoCard;