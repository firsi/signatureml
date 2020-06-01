import { animated, useSpring } from "react-spring"
import  makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import { WorkCard } from "../../components/home/work/WorkCard"
import { SearchBar } from "../../components/layout/SearchBar"
import { FadeIn } from "../../components/animation/FadeIn"
import { FadeInSlideTop } from "../../components/animation/FadeInSlideTop"

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(12),
        position: 'relative'
    },
    button: {
        position: 'fixed',
        right: 0,
        top: '12%',
        zIndex: 1000,
        borderRadius: 40,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    topContainer: {
        marginBottom: theme.spacing(5)
    }
}))
const Products = () => {
    const classes = useStyles();
   
    return (
        <div  className={classes.root}>
            <Container maxWidth='lg'>
                <FadeIn delay={300} duration={700} className={classes.topContainer}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography className={classes.title} variant='h4'>
                                Nos produits
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <SearchBar />
                        </Grid>
                    </Grid>
                </FadeIn>
                <Grid container spacing={5} >
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

export default Products;
//TODO: after automation of the workcards, put individual workcards inside FadeIn component