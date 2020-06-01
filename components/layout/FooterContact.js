import { makeStyles } from '@material-ui/core';
import  InfoCard from './InfoCard';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
}))

function FooterContact() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <InfoCard 
                    content='Numero: +223 xx xx xx xx'
                    align="center"
                    variant='body1'
                    color='#333333'
                    iconColor='#333333'
                />
                <InfoCard 
                    content='Email: email@gmail.com'
                    align="center"
                    variant='body1'
                    color='#333333'
                    iconColor='#333333'
                />
        </div>
    )
}

export default FooterContact
