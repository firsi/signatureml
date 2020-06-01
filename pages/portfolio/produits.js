import  makeStyles from "@material-ui/core/styles/makeStyles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import { SearchBar } from "../../components/layout/SearchBar"
import { FadeIn } from "../../components/animation/FadeIn"
import { ProductList } from "../../components/portfolio/products/ProductList"

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
    const [keyword, setKeyword] = React.useState();
    
    const handleSearchChange = (keyword) => {
        setKeyword(keyword)
    }
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
                            <SearchBar handleSearchChange={handleSearchChange} />
                        </Grid>
                    </Grid>
                </FadeIn>
                <Grid container spacing={5} >
                    <ProductList keyword={keyword} />
                </Grid>
            
                </Container>
        </div>
    )
}

export default Products;
