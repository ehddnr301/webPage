import * as React from 'react';
import { HashRouter, Redirect, Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import Program from '../Program';

const PageRoutes: React.FC = () => {
    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/program" component={Program} />
                <Redirect from="*" to="/" />
            </Switch>
        </HashRouter>
    );
};

export default PageRoutes;
