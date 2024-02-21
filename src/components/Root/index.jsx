import React from "react";
import { Outlet } from 'react-router-dom'
import * as SC from "./styles";
import { Container } from "../Container";
import { Link } from "../Link";

export const Root = () => <>
    <Container>
    <SC.Menu>
        <Link simple={false} to={'/'}>Главная</Link>
        <Link simple={false} to={'/posts'}>Список постов</Link>
        <Link simple={false} to={'/auth'}>Авторизация</Link>
        <Link simple={false} to={'/registration'}>Регистрация</Link>
    </SC.Menu>
    </Container>    
    <Outlet />
</>