import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: props => props.color ? props.color : '#000',
        opacity: props => props.opacity ? props.opacity : 0.5
    }
}))
export const Overlay = ({color, opacity}) => {
    const props = {color, opacity};
    const classes = useStyles(props);

    return (
        <div className={classes.root}></div>
    )
}
