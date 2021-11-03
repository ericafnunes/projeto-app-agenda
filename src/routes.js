import React from "react";
import { Switch, Route } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Perfil from './pages/Perfil';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/contatos" component={Perfil} />
            <Route path="/cadastro" component={Cadastro} />
        </Switch>
    )
}