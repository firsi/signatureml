import { animated, useSpring } from "react-spring"
import  makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button'
import { WorkCard } from '../home/work/WorkCard'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(5),
        position: 'relative'
    },
    button: {
        position: 'fixed',
        right: 0,
        top: '10%',
        zIndex: 1000,
    }
}))
export const Products = ({handleIndex}) => {
    const classes = useStyles();
   
    return (
        <div  className={classes.root}>
            <Container maxWidth='lg'>
                <Typography className={classes.title} variant='h4'>
                    Nos produits
                </Typography>
                <Button className={classes.button} variant='contained' onClick={() => handleIndex(0)}>back</Button>
                <Grid container spacing={10} >
                        <Grid item xs={12} md={4}>
                            <WorkCard 
                                title='Chaise'
                                body='toutes couleurs, marquages epoxy à huile(gonflant)'
                                imageUrl='/chair.png'
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <WorkCard 
                                title='Youth'
                                body='toutes couleurs, marquages epoxy à huile(gonflant)'
                                imageUrl='/bag.png'
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <WorkCard 
                                title='Dizerstone'
                                body='toutes couleurs, marquages epoxy à huile(gonflant)'
                                imageUrl='/chair.png'
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <WorkCard 
                                title='Youth'
                                body='toutes couleurs, marquages epoxy à huile(gonflant)'
                                imageUrl='/bag.png'
                            />
                        </Grid>
                    </Grid>
                </Container>
        </div>
    )
}
