import React from 'react';
import {TableHeader} from './TableHeader';
import {TableBody} from './TableBody';

export const Table:React.FC = () => {
    return (
        <table>
            <TableHeader/>
            <TableBody/>
        </table>
    )
}
