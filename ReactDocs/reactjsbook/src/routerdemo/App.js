import React from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import {
    Home,
    ChildrenEx,
    Services,
    History,
    LinkEx,
    AHrefEx
} from "./page";
function App() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/childrenEx" element={<ChildrenEx/>} />
                <Route exact path="/childrenEx/services" element={<Services/>} />
                <Route exact path="/childrenEx/history" element={<History/>} />
                <Route exact path="/linkEx" element={<LinkEx/>} />
                <Route exact path="/aHrefEx" element={<AHrefEx/>} />
            </Routes>
        </Router>
    )
}
export default App;