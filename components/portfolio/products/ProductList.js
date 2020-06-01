import Grid from "@material-ui/core/Grid"
import { WorkCard } from "../../home/work/WorkCard"
import { PRODUCTS } from "../../../util/constants"

export const ProductList = ({keyword}) => {
    const search = (product) => {
        if(!keyword){
            return product;
        }
        else if(product.title.toLowerCase().includes(keyword.toLowerCase()) 
             || product.body.toLowerCase().includes(keyword.toLowerCase())){
            return product;
        }
    }
    return (
        <>
            {PRODUCTS.filter((product) => {
                return search(product);
            })
            .map((product, index) => (
                    <Grid item xs={12} md={4} key={`${product.title}-${index}`}>
                        <WorkCard
                            title={product.title}
                            body={product.body}
                            imageUrl={product.imageUrl}
                        />
                    </Grid>
            ))}
        </>
    )
}
