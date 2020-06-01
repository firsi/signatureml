import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(10),
        color: '#fff'
    },
    button: {
        marginTop: theme.spacing(3),
        minWidth: '250px',
        float: 'right',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    input: {
        '& label': {
            color: 'rgba(255,255,255,0.6)'
        },
        '& input': {
            borderBottom: '1px solid rgba(255,255,255,0.6)',
            color: 'rgba(255,255,255,0.8)',
        },
        '& textarea': {
            
        }
    },
}))
export const ContactForm = () => {
    const classes = useStyles();
    return (
        <form>
            <TextField 
                label='Nom&Prénoms'
                fullWidth
                type='text'
                InputProps={{"aria-label": "Nom et Prénoms"}}
                margin='dense'
                color='primary'
                className={classes.input}
            />
            <TextField 
                label='E-mail'
                fullWidth
                type='mail'
                InputProps={{"aria-label": "mail"}}
                margin='dense'
                color='primary'
                className={classes.input}
            />
            <TextField 
                label='Sujet'
                fullWidth
                type='text'
                InputProps={{"aria-label": "Sujet"}}
                margin='dense'
                color='primary'
                className={classes.input}
            />
            <TextField 
                label='Message'
                variant='outlined'
                fullWidth
                type='text'
                InputProps={{"aria-label": "Message"}}
                margin='dense'
                multiline
                color='primary'
                className={classes.input}
                rows={6}
                rowsMax={6}
            />
            <Button type='submit' className={classes.button} variant='contained' color='primary' size='large'>
                Envoyer
            </Button>
        </form>
    )
}
