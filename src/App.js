
import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import ToDo from './pages/ToDo'
import { makeStyles } from '@material-ui/core/styles';
import ImagesGallery from "./pages/ImagesGallery";
import { Link as MaterialLink} from '@material-ui/core'
import { Typography } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const App = () => {

        const classes = useStyles();
        return (
            <>
                <Typography className={classes.root}>
                <MaterialLink component={Link}
                              to='/'
                              variant="body2"
                              >Open ToDo page</MaterialLink>
                <MaterialLink component={Link}
                              to="/images_gallery"
                              variant="body2"
                              >Images gallery</MaterialLink>
                <MaterialLink component={Link}
                              to="/blocked page"
                              variant="body2"
                              >Blocked page</MaterialLink>
                </Typography>
                <Switch>
                    <Route path="/blocked_page">
                        <h1>Blocked page</h1>
                    </Route>
                    <Route path="/images_gallery">
                        <ImagesGallery/>
                    </Route>
                    <Route path="/">
                        <ToDo/>
                    </Route>
                </Switch>
            </>
        )

}
export default App;
