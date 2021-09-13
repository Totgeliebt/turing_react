
import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import ToDo from './pages/ToDo'
import ImagesGallery from "./pages/ImagesGallery";

class App extends React.Component {
    render() {
        return (
            <>
                <Link to="/">Open ToDo page</Link>
                <Link to="/images_gallery">Images gallery</Link>
                <Link to="/blocked page">Blocked page</Link>
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
}
export default App;
