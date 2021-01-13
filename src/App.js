import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { HashRouter, Route, Switch } from "react-router-dom";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import Home from "./pages/home";
import Me from "./pages/me";
import Portfolio from "./pages/portfolio";
import PortfolioDetail from "./pages/portfolio-detail";
import ErrorPage from "./pages/404";

function App() {
    const DATA_URL = "https://raw.githubusercontent.com/yasgo/yasgo.github.io/master/data.json";
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(DATA_URL)
            .then(function (response) {
                dispatch({
                    type: "DATA_CHANGE",
                    data: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [DATA_URL, dispatch])

    return (
        <HashRouter>
            <Header />
            <Footer />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/me" component={Me} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/portfolio-detail/:id" component={PortfolioDetail} />
                <Route component={ErrorPage} />
            </Switch>
        </HashRouter>
    );
}

export default App;