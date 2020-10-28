import * as React from 'react';
import { HashRouter, Redirect, Switch, Route } from 'react-router-dom';
import Detail from '../Detail';
import Home from '../Home';

const PageRoutes: React.FC = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:id" component={Detail} />
                <Redirect from="*" to="/" />
            </Switch>
        </HashRouter>
    );
};

export default PageRoutes;
