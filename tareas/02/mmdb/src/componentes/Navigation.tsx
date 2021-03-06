
import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import styled from 'styled-components';
import logo from '../logo.png'
import { GetNewToken } from '../services/themoviedb/AuthService';
import { UserInfo } from './Auth/UserInfo';


const NavigationOpts:any = [
    {
        path:'/',
        label:'Home'
    },
    {
        path:'/profile',
        label:'Profile'
    }
    // {
    //     path:'/movie/:id',
    //     label:'Movie'
    // },
    // {
    //     path:'/search',
    //     label:'Search'
    // }
]

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10%;
    li, a {
        font-weight: 500;
        font-size: 16px;
        color: #edf0f1;
        text-decoration: none;
    }
    .logo{
        cursor: pointer;
        width: 60px;
    }
    .nav__links{
        list-style: none;
    }

    .nav__links li{
        display: inline-block;
        padding: 0px 20px;
    }

    .nav__links li a {
        transition: all 0.3s ease 0s;
    }

    .nav__links li a:hover{
        color: #0088a9;
    }
    button{
        padding: 9px 25px;
        background-color: rgba(0, 136, 169, 1);
        border: none;
        border-radius: 15px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
    }

    button:hover{
        background-color: rgba(0, 136, 169, 0.8);
    }
`

export const Navigation:React.FC = () => {

    //const history = useHistory();
    // const GetText = () => {
    //     return (localStorage.getItem("session_id") === null || localStorage.getItem("session_id") === undefined) ? 'Log In' : 'Sign out';
    // }
    // const LogIn = async() => {
    //     console.log(localStorage.getItem("session_id"));
    //     if(localStorage.getItem("session_id") === null || localStorage.getItem("session_id") === undefined)
    //     {
    //         const token = await GetNewToken();
    //         window.open("https://www.themoviedb.org/authenticate/" + token + "?redirect_to=http://localhost:3000/logged", "_blank");
    //     }
    //     else 
    //     {
    //         localStorage.removeItem("session_id");
    //         history.push("/");
    //     }
    // }
    
    return <Header>
        <img src={logo} alt="" className="logo"/>
        <nav>
            <ul className="nav__links">
            {NavigationOpts.map((item:any, ind:number) => 
            {
                const key = item.path + "_" + ind;
                return <li key={key}><Link to={item.path}>{item.label}</Link></li>
            })}
            </ul>
        </nav>
        <UserInfo></UserInfo>
    </Header>
}
