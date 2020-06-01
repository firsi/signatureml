import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles(theme => ({
    title: {
        fontWeight: 700,
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2)
    },
    body: {
        color: '#9b9b9b'
    }

}))
export const TabContent = ({title, children}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth='md' >
                <Typography variant='h5' className={classes.title}>
                    {title}
                </Typography>
                <Typography variant='body1' className={classes.body}>
                    {children}
                </Typography> 
            </Container>
        </div>
    )
}
