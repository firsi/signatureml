import { makeStyles, InputBase, fade } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        backgroundColor: theme.palette.secondary.main,
        width: '100%',
        float: 'right',
        "&:hover": {
            backgroundColor: fade(theme.palette.common.black, 0.4),
        },
        [theme.breakpoints.up('sm')]: {
            width: '80%',
            maxWidth: 400
        }
    },
    searchIcon: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        padding: theme.spacing(0,1),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputRoot: {
        width: '80%',
    },
    inputInput: {
        color: 'white',
        padding: theme.spacing(1,1,1,0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '80%',
    }
}))
export const SearchBar = ({hideOnMobile}) => {
    const props = {hideOnMobile}
    const classes = useStyles(props);
    return (
        <div className={classes.search}  >
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase 
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                }}
                placeholder='Rechercher...'
                inputProps={{'aria-label': 'Rechercher'}}
            />
        </div>
    )
}
