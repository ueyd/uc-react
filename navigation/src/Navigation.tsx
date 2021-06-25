import React from 'react';
import {Link} from 'react-router-dom'

const NavigationOpts = [

    {
        path:'/',
        label:'Home'
    },
    {
        path:'/about',
        label:'About'
    },
    {
        path:'/contact',
        label:'Contact'
    }
]

export const Navigation:React.FC = () => {
    return <div>
        <ul>
        {NavigationOpts.map((item) => (
            <li><Link to={item.path}>{item.label}</Link></li>
        ))}
        </ul>
    </div>
}