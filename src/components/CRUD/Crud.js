import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {Home} from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core"
import Container from "@material-ui/core/Container";
import Main from "./Main";

const navLinks = [
    {title: `about us`, path: `/about-us`},
    {title: `product`, path: `/product`},
    {title: `blog`, path: `/blog`},
    {title: `contact`, path: `/contact`},
    {title: `faq`, path: `/faq`},
]

export default function Crud() {
    const classes = useStyles()

    return (
        <div>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Container className={classes.navbarDisplayFlex}>
                            <IconButton edge="start" color="inherit" aria-label="home">
                                <Home fontSize="large"/>
                            </IconButton>
                            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                                {navLinks.map(({title, path}) => (
                                    <a href={path} key={title} className={classes.linkText}>
                                        <ListItem button>
                                            <ListItemText primary={title}/>
                                        </ListItem>
                                    </a>
                                ))}
                            </List>
                        </Container>
                    </Toolbar>
                </AppBar>
            </div>
            <div>
                <Main />
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    }
});
