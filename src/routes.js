import React from 'react';
import {BrowserRouter, Swith, Route} from 'react-route-dom';

import Main from '.pages/Main';
import Repositorio from './pages/repositorio';


export default function Router(){
    return(
        <BrowserRouter>
        <Swith>
            <Router exact path="/" component={Main} />

            <Router exact path="/repositorio:repositorio" component={Repositorio} />

        </Swith>
        </BrowserRouter>
    );
}
