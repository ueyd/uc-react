import React from 'react';
import {TableHeader} from './TableHeader';
import {TableBody} from './TableBody';

export type User = {
    name: string,
    job: string
}

export interface TableProps {
    users:User[],
    handlerRemoveUser: (e:any) => void;
}

export const Table:React.FC<TableProps> = ({users, handlerRemoveUser}) => {

    const onClickGretting = (username:string) => {
        alert(`Hola ${username}!`)
    }

    return (
        <table>
            <TableHeader/>
            <TableBody users={users} handler={onClickGretting} handlerRemoveUser={handlerRemoveUser}/>
        </table>
    )
}
